import { prisma } from "../app/database.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.get('Authorization');

  if (!token) {
    res.status(401).json({
      errors: "Unauthorized"
    }).end();
  } else {
    const user = await prisma.user.findFirst({
      where: {
        token: token
      },
      select: {
        username: true,
        token: true
      }
    })
    if (!user) {
      res.status(401).json({
        errors: "Unauthorized"
      }).end();
    }else{
      req.user = user;
      next();
    }
  }

  
  
  
}