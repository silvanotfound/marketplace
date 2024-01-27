import FreightCalculator from "../FreightCalculator";
import { DimensionsItem, Item } from "../item.entity";
import { Order } from "../order.entity";
import { OrderItem } from "../orderItem.entity";

test('Deve calcular o valor do frete', () => {
    const order = new Order('011.157.739-09');
    order.addItem(new OrderItem(new Item("Lanterna", 150.0, new DimensionsItem(100.0,30.0,10.0,3.0)), 2));
    const freight = new FreightCalculator()
    expect(freight.calculate(order)).toBe(30.0);
});

test('Deve retornar o frete minimo', () => {
    const order = new Order('011.157.739-09');
    order.addItem(new OrderItem(new Item("Lanterna", 150.0, new DimensionsItem(20.0,15.0,10.0,1.0)), 2));
    const freight = new FreightCalculator()
    expect(freight.calculate(order)).toBe(10.0);
});