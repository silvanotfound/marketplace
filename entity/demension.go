package entity

type Demension struct {
	Height float64
	Width  float64
	Depth  float64
	Weight float64
}

func NewDemension(height float64, width float64, depth float64, weight float64) *Demension {
	return &Demension{
		Height: height,
		Width:  width,
		Depth:  depth,
		Weight: weight,
	}
}
