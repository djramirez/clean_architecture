import Fastify from "fastify";
import { OrderController } from "./controllers/OrdersController";

export async function buildServer() {
    const app = Fastify();
    app.post("/orders", OrderController.create);
    app.delete("/orders/:id", OrderController.delete);
    return app;
}