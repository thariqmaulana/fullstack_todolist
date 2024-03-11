import todolistService from "../service/todolist-service.js";


const create = async (req, res, next) => {
  try {
    console.info(req.body)
    const result = await todolistService.create(req.user, req.body);
    res.status(200).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const remove = async (req, res, next) => {
  try {
    console.info(req.body.id + "tes")
    await todolistService.remove(req.user, req.body.data)
    res.status(200).json({
      data: "OK"
    });
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  remove,
}