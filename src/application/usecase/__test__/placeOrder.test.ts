import { ItemRepositoryMemory } from "../../../infra/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../../infra/memory/OrderRepositotyMemory";
import { PlaceOrder, PlaceOrderInputDto } from "../placeOrder";

describe('Teste caso de uso Criação de pedido', ()=> {

    test('Deve fazer um pedido', () => {
        let placeOrderInput: PlaceOrderInputDto
        placeOrderInput = {
            cpf: "011.157.739-09",
            orderItems:[
                {idItem:1, quantity: 2},
                {idItem:2, quantity: 1},
                {idItem:3, quantity: 1}
            ],
            coupon: {
                name: "VALE10",
                value: 10,
                expirationDate: new Date("2024-01-20")
            }
        }
        const placeOrder = new PlaceOrder(new ItemRepositoryMemory(), new OrderRepositoryMemory());
        const output = placeOrder.execute(placeOrderInput);
        expect(output.total).toBe(200.0)
    });

    test('Deve gerar código do pedido', () => {
        let placeOrderInput: PlaceOrderInputDto
        placeOrderInput = {
            cpf: "011.157.739-09",
            orderItems:[
                {idItem:1, quantity: 2},
                {idItem:2, quantity: 1},
                {idItem:3, quantity: 1}
            ],
            coupon: {
                name: "VALE10",
                value: 10,
                expirationDate: new Date("2024-01-20")
            }            
        }
        const placeOrder = new PlaceOrder(new ItemRepositoryMemory(), new OrderRepositoryMemory());
        const output = placeOrder.execute(placeOrderInput);
        expect(output.code ).toBe("20241")
    });    
});