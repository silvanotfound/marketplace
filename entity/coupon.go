package entity

type Coupon struct {
	Id          string
	Description string
	Value       float32
}

func NewCoupon(id string, descriptions string, valeu float32) *Coupon {
	return &Coupon{
		Id:          id,
		Description: descriptions,
		Value:       valeu,
	}
}
