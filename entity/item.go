package entity

type Item struct {
	Id          string
	Description string
	Price       float32
}

func NewItem(id string, description string, price float32) *Item {
	return &Item{
		Id:          id,
		Description: description,
		Price:       price,
	}
}
