import { Router } from "express";
import taskRoutes from "./task.route";

const router = Router();

router.use("/task", taskRoutes);

export default router;
