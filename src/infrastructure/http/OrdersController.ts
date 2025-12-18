import { FastifyRequest, FastifyReply } from "fastify";
import { createOrder } from "@composititon/container" //inyectado ya compuesto
import { create } from "node:domain";

export const OorderControllelr = {
    async create(request: FastifyRequest, reply: FastifyReply) {
        const { orderId, customerId } = request.body as any;

        const out = await createOrder.execute({ orderId, customerId });

        return reply.status(201).send(out);
    }
};