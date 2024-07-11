import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import dashboardRouter from "./routes/dashboardRouter.js";
import ordersRouter from "./routes/ordersRouter.js";
import productsRouter from "./routes/productsRouter.js";
import suppliersRouter from "./routes/supplierRouter.js";
import customersRouter from "./routes/customersRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/products", productsRouter);
app.use("/api/suppliers", suppliersRouter);
app.use("/api/customers", customersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => console.log("Server is running on 3000 PORT"));
