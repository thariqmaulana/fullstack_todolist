import { prisma } from "../app/database.js";

export const authMiddleware = async (req, res, next) => {
  // console.info(`${req.get('Authorization')} - asdjasdas`)
  const token = req.get('Authorization');
  console.info(req.body.todoId + "body")

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