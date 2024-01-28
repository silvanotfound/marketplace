import { Item } from "./item";

export class OrderItem{
    constructor(readonly item: Item, readonly quantity: number) {        
    }

    getTotalValue(): number {
        const value = this.item.price * this.quantity;
        return Number(value.toFixed(2));
    }
}