export class Coupon{
    constructor(readonly name:string, readonly value: number, readonly expirationDate?: Date){
    }

    validate(today: Date) {
        if(this.expirationDate !== undefined) {
            if (this.expirationDate?.getTime() < today.getTime()) {
                throw new InvalidCouponError("Cupom expirado")
            }
        }
    }
}

export class InvalidCouponError extends Error {
    constructor(message: string) {
        super(message);
    }
}