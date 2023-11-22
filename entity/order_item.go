package entity

type OrderItem struct {
	Item     Item
	quantity int
}

func NewOrderItem(item Item, quantity int) *OrderItem {
	orderItem := &OrderItem{
		Item:     item,
		quantity: quantity,
	}
	return orderItem
}

func (o OrderItem) calculateTotalItem() float64 {
	return float64(o.Item.Price) * float64(o.quantity)
}
