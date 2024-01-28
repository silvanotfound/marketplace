import { Coupon } from "../../domain/coupon"
import FreightCalculator from "../../domain/freightCalculator"
import { Order } from "../../domain/order"
import { OrderItem } from "../../domain/orderItem"
import { ItemRepository } from "../../domain/repository/itemRepository"
import { OrderRepository } from "../../domain/repository/orderRepository"

export type PlaceOrderInputDto = {
    cpf: string,
    orderItems: OrderItemInputDto[],
    coupon: {}
}

export type OrderItemInputDto = {
    idItem: number, 
    quantity: number
}

export class PlaceOrder {

    constructor(readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository){
    }

    execute(placeOrderinput: PlaceOrderInputDto) {
        const order = this.createOrder(placeOrderinput);
        this.orderRepository.save(order);
        return {
            code: this.getOrderCode(),
            total: order.getTotal()
        }
    }
    
    getOrderCode() {
        const code = this.orderRepository.findOrderCode();
        return new Date().getFullYear() +""+code; 
    }
    
    private createOrder(placeOrderinput: PlaceOrderInputDto) {
        const order = new Order(placeOrderinput.cpf);
        placeOrderinput.orderItems.forEach(orderItem => {
            let item = this.itemRepository.findItemById(orderItem.idItem)
            order.addItem(new OrderItem(item, orderItem.quantity))
        });
        return  order
    }
}

