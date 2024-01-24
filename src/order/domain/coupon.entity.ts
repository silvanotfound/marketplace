export class Coupon{

    constructor(readonly name:string, readonly value: number){
    }

    applyDiscout(totalOrder: number): number {
        return totalOrder -= totalOrder * this.value / 100;
    }    
}