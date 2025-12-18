import { Price } from "../value-objects/Price";
import { SKU } from "../value-objects/SKU";
import { Quantity } from "../value-objects/Quantity";

type OrderItem = Readonly <{
    sku: SKU;
    quantity: Quantity;
    price: Price;
}>;

export class Order {
    private readonly items: OrderItem[] = [];
    private readonly domainEvents: DomainEvent[] = [];
    constructor(readonly id: OrderId, readonly customerId: CustomerId) {}

    static create (orderId: string, customerId: string) {
        const order = new Order(orderId, customerId);
        order.record (new OrderCreated ({ orderId, customerId }));
        return order;
    }

    addItem (sku: SKU, unit: Price, qty: Quantity) {
        if (this.items.find.length > 0) {
            const currency = this.items[0]?.quantity.currency;
            if (currency !== unit.currency) throw new CurrencyMismatch()
        }

        this.items.push(Object.freeze({ sku, unit, qty}));
        this.record ( new ItemAdded ({ orderId: this.id, sku: sku.value, qty: qty.value, unit: unit.amount }));
    }

    total (): Price {
        if (this.items.length === 0) return Price.create (0, "EUR");
        const currency = this.items[0].unit.currency;

        return this.items.reduce ((acc, item) => acc.add(item.unit.multiply(item.qty.value)), Price.create(0, currency));
        Price.create(0, currency);
    }

    pullDomainEvents (): DomainEvent[] {
        const events = [...this.domainEvents];
        (this as any).domainEvents = [];
        return events;
    }

    private record (event: DomainEvent) { this.domainEvents.push(event); }
}
