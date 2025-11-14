import express from "express";
import rootRouter from "./source/routers/root.router.js";
import { sequelize } from "./source/models/db.model.js";

const app = express();
app.use(express.json());

// health check
app.get("/api", (req, res) => {
  res.send("API is running");
});

// thay vì gắn từng router, gắn root router dưới `/api`
app.use("/api", rootRouter);

const PORT = 3069;
async function startServer() {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("DB error:", err);
  }
}

startServer();
