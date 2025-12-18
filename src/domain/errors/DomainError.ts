export class DomainError extends Error {}
export class InvalidStateError extends DomainError {}

//los errores concretos ya los definimos: InvalidSKU, InvalidPrice, etc....

export class InvalidPrice extends DomainError {
    constructor(message: string) {
        super(message);
        this.name = "InvalidPrice";
    }
}
