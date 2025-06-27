import { Router } from "express";
import taskController from "../controllers/task.controller";
import { taskMiddleware } from "../middleware/task.middleware";

const taskRouter = Router();

taskRouter.get("/", taskController.getAllTask);
taskRouter.get("/:id", taskController.getTaskById);
taskRouter.post("/", taskMiddleware, taskController.postTask);
taskRouter.put("/:id", taskMiddleware, taskController.putTask);
taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
