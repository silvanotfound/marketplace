package entity

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_should_calculate_freght(t *testing.T) {
	order, _ := NewOrder("012-2548", "01115773909")
	order.addOrderItem(*NewOrderItem(*NewCompleteItem("5248-9856", "Camera", 350.0, *NewDemension(100, 30, 10, 3)), 1))
	assert.Equal(t, 30.0, freghtCalculete(*order))
}

func Test_should_calculate_minimal_freght(t *testing.T) {
	order, _ := NewOrder("012-2548", "01115773909")
	order.addOrderItem(*NewOrderItem(*NewCompleteItem("5248-9856", "Camera", 350.0, *NewDemension(20, 15, 10, 1)), 1))
	assert.Equal(t, 10.0, freghtCalculete(*order))
}
