import {Order} from "@domain/entities/Order";
import {OrderRepository} from "@application/ports/OrderRepository";

export type CreateOrderInput = { orderId: string; customerId: string }
export type CreateOrderOutput = { orderId: string }

export class CreateOrder {
    constructor(private readonly repo: OrderRepository) {}

    async execute ({ orderId, customerId }: CreateOrderInput): Promise<CreateOrderOutput> {
        const existe = await this.repo.findById(orderId);
        if (existe) throw new Error("Order with this ID already exists");

        const order = new Order(orderId, customerId);
        await this.repo.save(order);

        return { orderId: order.id };
    }
}