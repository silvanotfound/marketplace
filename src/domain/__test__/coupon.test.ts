import { Coupon, InvalidCouponError } from "../coupon";

describe('Teste cupom de desconto', ()=> {

    test('deve validar cupom expirado', () => {
        const exception = ()=> {
            const coupon = new Coupon("VALE10", 10, new Date("2024-01-10"));
            coupon.validate(new Date("2024-01-20"));
        }
        expect(exception).toThrow(InvalidCouponError)
    });
});