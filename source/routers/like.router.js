import { Router } from "express";
import {
  like as likeHandler,
  unlike as unlikeHandler,
  likesByRestaurant,
  likesByUser,
} from "../controllers/like.controller.js";

const router = Router();

// POST /api/likes
router.post("/", likeHandler);

// DELETE /api/likes
router.delete("/", unlikeHandler);

// GET /api/likes/restaurant/:restaurantId
router.get("/restaurant/:restaurantId", likesByRestaurant);

// GET /api/likes/user/:userId
router.get("/user/:userId", likesByUser);

export default router;
