import { Router } from "express";
import taskController from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get("/", taskController.getAllTask);
taskRouter.get("/:id", taskController.getProductById);

export default taskRouter;
