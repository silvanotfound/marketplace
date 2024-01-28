import { Order } from "../../domain/order";
import { OrderRepository } from "../../domain/repository/orderRepository";

export default class OrderRepositoryMemory implements OrderRepository{
    order : Order[]

    constructor() {
        this.order = []
    }

    save(order: Order) {
       this.order.push(order)
    }

    findOrderCode() {
        return this.order.length
    }

}