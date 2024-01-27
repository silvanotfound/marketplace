import { Item } from "../item.entity";
import { OrderItem } from "../orderItem.entity";

describe('Teste criação item de pedido', ()=> {

    test('Deve deve calcular o item do pedido', () => {
        const orderItem = new OrderItem(new Item("Lartena de sobrevivencia", 50), 2);
        expect(orderItem.getTotalValue()).toBe(100.00);
    });
});