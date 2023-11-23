package entity

import "time"

type Coupon struct {
	Id           string
	Description  string
	Value        float32
	ExpirionDate time.Time
}

func NewCoupon(id string, descriptions string, value float32) *Coupon {
	return &Coupon{
		Id:          id,
		Description: descriptions,
		Value:       value,
	}
}

func NewCouponWithLimitedTime(id string, descriptions string, value float32, expirionDate time.Time) *Coupon {
	return &Coupon{
		Id:           id,
		Description:  descriptions,
		Value:        value,
		ExpirionDate: expirionDate,
	}
}
