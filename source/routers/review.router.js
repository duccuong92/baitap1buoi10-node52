import { Router } from "express";
import {
  createReview,
  reviewsByRestaurant,
  reviewsByUser,
} from "../controllers/review.controller.js";

const router = Router();

// POST /api/reviews
router.post("/", createReview);

// GET /api/reviews/restaurant/:restaurantId
router.get("/restaurant/:restaurantId", reviewsByRestaurant);

// GET /api/reviews/user/:userId
router.get("/user/:userId", reviewsByUser);

export default router;
