import { Router } from "express";
import taskController from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get("/", taskController.getAllTask);
taskRouter.get("/:id", taskController.getTaskById);
taskRouter.post("/", taskController.postTask);
taskRouter.put("/:id", taskController.putTask);

export default taskRouter;
