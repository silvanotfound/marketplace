import { Coupon } from "../coupon.entity";

describe('Teste cupom de desconto', ()=> {

    test('Deve aplicar um disconto', () => {
        const coupon = new Coupon("VALE10", 10);
        const totalOrder = 1000.00;
        expect(coupon.applyDiscout(totalOrder)).toBe(900.00);
    });
});