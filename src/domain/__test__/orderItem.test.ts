import { Item } from "../item";
import { OrderItem } from "../orderItem";

describe('Teste criação item de pedido', ()=> {

    test('Deve deve calcular o item do pedido', () => {
        const orderItem = new OrderItem(new Item(1, "Lartena de sobrevivencia", 50), 2);
        expect(orderItem.getTotalValue()).toBe(100.00);
    });
});