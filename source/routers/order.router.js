import { Router } from "express";
import {
  create as createOrderHandler,
  get as getOrderHandler,
} from "../controllers/order.controller.js";

const router = Router();

// POST /api/orders
router.post("/", createOrderHandler);

// GET /api/orders/:orderId
router.get("/:orderId", getOrderHandler);

export default router;
