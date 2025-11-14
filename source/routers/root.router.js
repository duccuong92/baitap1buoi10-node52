// source/routers/root.router.js
import express from "express";
import likeRouter from "./like.router.js";
import reviewRouter from "./review.router.js";
import orderRouter from "./order.router.js";
// (nếu có thêm router khác, import chúng ở đây)

const rootRouter = express.Router();

// giống code mẫu của thầy: gắn từng router vào prefix riêng
rootRouter.use("/likes", likeRouter);
rootRouter.use("/reviews", reviewRouter);
rootRouter.use("/orders", orderRouter);

// chỗ này sau bạn có thêm usersRouter, productsRouter… thì cũng gắn tương tự
// rootRouter.use("/users", usersRouter);

export default rootRouter;
