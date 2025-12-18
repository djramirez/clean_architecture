export class Price {
    private constructor(readonly amount: number, readonly currency: "EUR" | "USD") {}

    static create(amount: number, currency: "EUR" | "USD"): Price {
        
        ///regla de negocio
        if (!Number.isFinite(amount) || amount < 0) throw new Error("Amount must be a non-negative finite number");
        const rounded = Math.round(amount * 100) / 100; // Round to 2 decimal places
       
        return new Price(rounded, currency)
    }

}