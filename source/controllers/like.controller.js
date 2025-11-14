import {
  likeRestaurant,
  unlikeRestaurant,
  getLikesByRestaurant,
  getLikesByUser,
} from "../services/like.service.js";

export async function like(req, res) {
  try {
    const { userId, restaurantId } = req.body;
    const like = await likeRestaurant({ userId, restaurantId });
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function unlike(req, res) {
  try {
    const { userId, restaurantId } = req.body;
    const result = await unlikeRestaurant({ userId, restaurantId });
    if (!result) return res.status(404).json({ error: "Like not found" });
    res.status(200).json({ message: "Unliked successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function likesByRestaurant(req, res) {
  try {
    const { restaurantId } = req.params;
    const likes = await getLikesByRestaurant(parseInt(restaurantId, 10));
    res.json(likes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function likesByUser(req, res) {
  try {
    const { userId } = req.params;
    const likes = await getLikesByUser(parseInt(userId, 10));
    res.json(likes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
