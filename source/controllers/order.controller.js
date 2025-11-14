import { createOrder, getOrderById } from "../services/order.service.js";

export async function create(req, res) {
  try {
    const { userId, items } = req.body;
    const order = await createOrder({ userId, items });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function get(req, res) {
  try {
    const { orderId } = req.params;
    const order = await getOrderById(parseInt(orderId, 10));
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
