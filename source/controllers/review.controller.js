import {
  addReview,
  getReviewsByRestaurant,
  getReviewsByUser,
} from "../services/review.service.js";

export async function createReview(req, res) {
  try {
    const { userId, restaurantId, rating, comment } = req.body;
    const review = await addReview({ userId, restaurantId, rating, comment });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function reviewsByRestaurant(req, res) {
  try {
    const { restaurantId } = req.params;
    const reviews = await getReviewsByRestaurant(parseInt(restaurantId, 10));
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function reviewsByUser(req, res) {
  try {
    const { userId } = req.params;
    const reviews = await getReviewsByUser(parseInt(userId, 10));
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
