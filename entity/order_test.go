package entity

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_should_not_create_new_order_whit_invalid_cpf(t *testing.T) {
	_, err := NewOrder("012-2548", "0111577390821")
	assert.EqualError(t, err, "CPF informado com tamanho inválido")
}

func Test_should_create_new_order_whit_three_items(t *testing.T) {
	order, _ := NewOrder("012-2548", "01115773909")
	order.addOrderItem(*NewOrderItem(*NewItem("5248-9856", "teclado mecanico", 350.0), 1))
	order.addOrderItem(*NewOrderItem(*NewItem("3259-4152", "Mouse Gamer", 120.0), 1))
	order.addOrderItem(*NewOrderItem(*NewItem("9658-3265", "Headset Gamer", 140.0), 1))
	assert.Equal(t, 3, order.getTotalItems())
}

func Test_should_create_new_order_whit_three_items_and_apply_discount_coupon(t *testing.T) {
	order, _ := NewOrder("012-2548", "01115773909")
	order.addOrderItem(*NewOrderItem(*NewItem("5248-9856", "teclado mecanico", 350.0), 1))
	order.addOrderItem(*NewOrderItem(*NewItem("3259-4152", "Mouse Gamer", 120.0), 1))
	order.addOrderItem(*NewOrderItem(*NewItem("9658-3265", "Headset Gamer", 140.0), 1))
	order.addCoupon(*NewCoupon("3254-6582", "VALE10", 10))
	assert.Equal(t, 549.0, order.calculateTotalOrder())
}

func Test_should_create_new_order_whit_three_items_and_calculate_total(t *testing.T) {
	order, _ := NewOrder("012-2548", "01115773909")
	order.addOrderItem(*NewOrderItem(*NewItem("5248-9856", "teclado mecanico", 350.0), 1))
	order.addOrderItem(*NewOrderItem(*NewItem("3259-4152", "Mouse Gamer", 120.0), 1))
	order.addOrderItem(*NewOrderItem(*NewItem("9658-3265", "Headset Gamer", 140.0), 1))
	assert.Equal(t, 610.0, order.calculateTotalOrder())
}
