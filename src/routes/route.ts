import { Router } from "express";
import taskRoutes from "./task.route";
import userRoutes from "./user.route";

const router = Router();

router.use("/task", taskRoutes);
router.use("/user", userRoutes);

export default router;
