package entity

func freghtCalculete(order Order) float64 {
	fregth := 0.0
	const MINIMAL_FREGHT = 10
	for _, oi := range order.OrderItems {
		fregth += 1000 * oi.Item.getVolume() * (oi.Item.getDencity() / 100)
	}
	if fregth < MINIMAL_FREGHT {
		fregth = MINIMAL_FREGHT
	}
	return fregth
}
