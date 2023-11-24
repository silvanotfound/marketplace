package entity

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_should_calculate_valume_item(t *testing.T) {
	item := NewCompleteItem("5248-9856", "Camera", 350.0, *NewDemension(20, 15, 10, 1))
	var expectedVolume float64 = 0.003
	assert.Equal(t, expectedVolume, item.getVolume())
}

func Test_should_calculate_dencity_item(t *testing.T) {
	item := NewCompleteItem("5248-9856", "Camera", 350.0, *NewDemension(20, 15, 10, 1))
	var expectedDencity float64 = 333
	assert.Equal(t, expectedDencity, item.getDencity())
}
