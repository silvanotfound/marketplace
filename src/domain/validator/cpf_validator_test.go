package validator

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_cpf_not_informed(t *testing.T) {
	isValid, _ := Cpf_validate("")
	assert.False(t, isValid)
}

func Test_cpf_with_invalid_size(t *testing.T) {
	isValid, _ := Cpf_validate("011.157.739.099")
	assert.False(t, isValid)
}

func Test_cpf_with_same_digits(t *testing.T) {
	isValid, _ := Cpf_validate("111.111.111-11")
	assert.False(t, isValid)
}

func Test_invalid_cpf(t *testing.T) {
	isValid, _ := Cpf_validate("011.157.739-00")
	assert.False(t, isValid)
}

func Test_valid_cpf(t *testing.T) {
	isValid, _ := Cpf_validate("011.157.739-09")
	assert.True(t, isValid)
}
