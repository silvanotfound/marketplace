import Cpf from "../shared/validator/cpf";
import { Coupon } from "./coupon.entity";
import { OrderItem } from "./orderItem.entity";

export class Order {

    private orderItens: OrderItem[] = [];
    private coupon: Coupon | undefined;

    constructor(readonly document: string) {
        document = new Cpf(document).getValue()
    }

    addItem(orderItem: OrderItem){
        this.orderItens.push(orderItem);
    }

    getTotal(): number {
        let total = 0;
        this.orderItens.forEach((orderOtem) => {
            total += orderOtem.getTotalValue();
        });
        return this.applyDiscout(total);
    }

    applyDiscout(rawTotal: number): number {
        let total = rawTotal;
        if (this.coupon != undefined) {
            total = this.coupon.applyDiscout(rawTotal);
        }
        return total;
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }
}