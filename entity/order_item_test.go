package entity

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_should_calculate_total_items(t *testing.T) {
	orderItem := NewOrderItem(*NewItem("5248-9856", "teclado mecanico", 350.0), 2)
	assert.Equal(t, 700.0, orderItem.calculateTotalItem())
}
