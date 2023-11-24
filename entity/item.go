package entity

import "strconv"

type Item struct {
	Id          string
	Description string
	Price       float32
	Demension   Demension
}

func NewItem(id string, description string, price float32) *Item {
	return &Item{
		Id:          id,
		Description: description,
		Price:       price,
	}
}

func NewCompleteItem(id string, description string, price float32, demension Demension) *Item {
	return &Item{
		Id:          id,
		Description: description,
		Price:       price,
		Demension:   demension,
	}
}

func (i Item) getVolume() float64 {
	result := strconv.FormatFloat(float64((i.Demension.Height/100)*(i.Demension.Width/100)*(i.Demension.Depth/100)), 'f', 3, 64)
	volume, _ := strconv.ParseFloat(result, 64)
	return volume
}
func (i Item) getDencity() float64 {
	result := strconv.FormatFloat((i.Demension.Weight / i.getVolume()), 'f', 0, 64)
	density, _ := strconv.ParseFloat(result, 64)
	return density
}
