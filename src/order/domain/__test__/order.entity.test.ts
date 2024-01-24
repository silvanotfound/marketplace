import { Coupon } from "../coupon.entity";
import { Item } from "../item.entity";
import { Order } from "../order.entity";
import { OrderItem } from "../orderItem.entity";

describe('Teste criação de pedidos', ()=> {

    test('Deve criar um com 3 itens', () => {
        const order = new Order('011.157.739-09');
        order.addItem(new OrderItem(new Item("Lanterna de sobrevivencia", 50), 2));
        order.addItem(new OrderItem(new Item("Mine placa solar", 100), 1));
        order.addItem(new OrderItem(new Item("Mochila impermeavel", 350.50), 1));
        expect(order.getTotal()).toBe(550.50);
    });

    test('Deve criar um com 3 itens e aplicar um cupom de desconto', () => {
        const order = new Order('011.157.739-09');
        order.addItem(new OrderItem(new Item("Lanterna de sobrevivencia", 50), 2));
        order.addItem(new OrderItem(new Item("Mine placa solar", 100), 1));
        order.addItem(new OrderItem(new Item("Mochila impermeavel", 350.50), 1));
        order.addCoupon(new Coupon("VALE10", 10))
        expect(order.getTotal()).toBe(495.45);
    });
    
    test('Não Deve criar um pedido com Cpf inválido', () => {
        expect(() => new Order('011.157.739-090')).toThrow('Cpf Inválido');
    });    
});