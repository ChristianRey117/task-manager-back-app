import { Router } from "express";
import taskRoutes from "./task.route";
import userRoutes from "./user.route";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = Router();

router.use("/task", authenticateJWT, taskRoutes);
router.use("/user", userRoutes);

export default router;
