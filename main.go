package main

import (
	"fmt"
	"marketplace/entity"
)

func main() {
	fmt.Println("Marketplace online")
	order, err := entity.NewOrder("2010-0245", "01115773909")
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(order)
	}
}
