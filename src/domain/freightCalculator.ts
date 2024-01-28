import { Order } from "./order";

export default class FreightCalculator {
    private DISTANCE: number = 1000;
    private minimumFreight: number = 10.0;
    constructor(){}
    
    calculate(order : Order): number {
        let totalVolume = 0;
        let totalDensity = 0
        order.getOrderItems().forEach(orderItem => {
            totalVolume += orderItem.item.getVolume()
            totalDensity += orderItem.item.getDensity()
        })
        const result = this.DISTANCE * totalVolume * (totalDensity / 100);
        return result < this.minimumFreight ? this.minimumFreight : result
    }
}