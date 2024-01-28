import { Coupon, InvalidCouponError } from "../coupon";
import { Item } from "../item";
import { Order } from "../order";
import { OrderItem } from "../orderItem";

describe('Teste criação de pedidos', ()=> {

    test('Deve criar um com 3 itens', () => {
        const order = new Order('011.157.739-09');
        order.addItem(new OrderItem(new Item(1, "Lanterna de sobrevivencia", 50), 2));
        order.addItem(new OrderItem(new Item(2, "Mine placa solar", 100), 1));
        order.addItem(new OrderItem(new Item(3, "Mochila impermeavel", 350.50), 1));
        expect(order.getTotal()).toBe(550.50);
    });

    test('Deve criar um com 3 itens e aplicar um cupom de desconto', () => {
        const order = new Order('011.157.739-09');
        order.addItem(new OrderItem(new Item(1, "Lanterna de sobrevivencia", 50), 2));
        order.addItem(new OrderItem(new Item(2, "Mine placa solar", 100), 1));
        order.addItem(new OrderItem(new Item(3, "Mochila impermeavel", 350.50), 1));
        const today = new Date("2024-01-20")
        order.addCoupon(new Coupon("VALE10", 10), today)
        expect(order.getTotal()).toBe(495.45);
    });
    
    test('Não Deve criar um pedido com Cpf inválido', () => {
        expect(() => new Order('011.157.739-090')).toThrow('Cpf Inválido');
    });
    
    test('Não deve aplicar cupom de descont expirado', () => {
        const order = new Order('011.157.739-09');
        order.addItem(new OrderItem(new Item(1, "Lanterna de sobrevivencia", 50), 2));
        order.addItem(new OrderItem(new Item(2, "Mine placa solar", 100), 1));
        order.addItem(new OrderItem(new Item(3, "Mochila impermeavel", 350.50), 1));
        const expirantionDate = new Date("2024-01-10");
        const today = new Date("2024-01-20")
        const exception = ()=> {
            order.addCoupon(new Coupon("VALE10", 10, expirantionDate), today)
        }
        expect(exception).toThrow(InvalidCouponError)
    });    
});