import Cpf from "../shared/validator/cpf";
import { Coupon } from "./coupon";
import { OrderItem } from "./orderItem";

export class Order {

    private orderItems: OrderItem[] = [];
    private coupon: Coupon | undefined;

    constructor(readonly document: string) {
        document = new Cpf(document).getValue()
    }

    addItem(orderItem: OrderItem){
        this.orderItems.push(orderItem);
    }

    getTotal(): number {
        let total = 0;
        this.orderItems.forEach((orderOtem) => {
            total += orderOtem.getTotalValue();
        });
        return this.calculateDiscout(total);
    }

    addCoupon(coupon: Coupon, today: Date) {
        coupon.validate(today)
        this.coupon = coupon;
    }

    getOrderItems(): OrderItem[] {
        return this.orderItems
    }

    private calculateDiscout(total: number): number {
        if(this.coupon != undefined) {
            return total -= total * this.coupon?.value / 100;    
        }
        return total
    }

}