package entity

import (
	"errors"
	"marketplace/validator"
	"time"
)

type Order struct {
	Id         string
	Cpf        string
	OrderItems []OrderItem
	Coupon     Coupon
}

func NewOrder(id string, cpf string) (*Order, error) {
	order := &Order{
		Id:  id,
		Cpf: cpf,
	}
	err := order.validate()
	if err != nil {
		return nil, err
	}
	return order, nil
}

func (o Order) validate() error {
	_, err := validator.Cpf_validate(o.Cpf)
	return err
}

func (o Order) getTotalItems() int {
	return len(o.OrderItems)
}

func (o Order) calculateTotalOrder() float64 {
	total := float64(0)
	for _, item := range o.OrderItems {
		total += item.calculateTotalItem()
	}
	totalOrder := o.calculateDiscount(total)
	return totalOrder
}

func (o Order) calculateDiscount(totalOrder float64) float64 {
	total := totalOrder
	total -= float64(o.Coupon.Value) * total / 100
	return total
}

func (o *Order) addOrderItem(orderItem OrderItem) {
	o.OrderItems = append(o.OrderItems, orderItem)
}

func (o *Order) addCoupon(coupon Coupon, today time.Time) error {
	if !coupon.ExpirionDate.IsZero() {
		if today.After(coupon.ExpirionDate) {
			return errors.New("Expired Coupon!")
		}
	}
	o.Coupon = coupon
	return nil
}
