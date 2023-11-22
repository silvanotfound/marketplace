package validator

import (
	"errors"
	"regexp"
	"strconv"
)

func Cpf_validate(document string) (bool, error) {
	if len(document) == 0 {
		return false, errors.New("CPF não foi informado")
	}
	cpf := clear_formatting(document)
	if !is_valid_size(cpf) {
		return false, errors.New("CPF informado com tamanho inválido")
	}
	if !are_all_digits_the_same(cpf) {
		return false, errors.New("o Cpf não pode ter todos os digitos iguas")
	}
	calculated_first_digit, calculated_second_digt := calculated_digits(cpf)
	vireify_digits := strconv.Itoa(calculated_first_digit) + strconv.Itoa(calculated_second_digt)
	if cpf[9:11] != vireify_digits {
		return false, errors.New("Digito verificador inválido")
	}
	return true, nil
}

func calculated_digits(cpf string) (int, int) {
	const FACTOR_FIRST_DIGIT = 10
	const FACTOR_SECOND_DIGIT = 11
	first_digit := calculate(cpf, FACTOR_FIRST_DIGIT)
	second_digit := calculate(cpf, FACTOR_SECOND_DIGIT)
	return first_digit, second_digit
}

func calculate(cpf string, factor int) int {
	var total int = 0
	for _, digit := range cpf[0 : factor-1] {
		value, _ := strconv.Atoi(string(digit))
		total += (value * factor)
		factor--
	}
	rest := total % 11
	digit := 0
	if rest >= 2 {
		digit = 11 - rest
	}
	return digit
}

func are_all_digits_the_same(cpf string) bool {
	return verify_digits(cpf)
}

func verify_digits(cpf string) bool {
	const TOTAL_INVALID_DIGITS = 11
	total_equal_digits := 0
	for _, digit := range cpf {
		if string(digit) == string(cpf[0]) {
			total_equal_digits++
		}
	}
	if total_equal_digits == TOTAL_INVALID_DIGITS {
		return false
	}
	return true
}

func is_valid_size(cpf string) bool {
	const VALID_SEZE = 11
	if len(cpf) != VALID_SEZE {
		return false
	}
	return true
}

func clear_formatting(document string) string {
	var patheern = regexp.MustCompile(`[^0-9]+`)
	return patheern.ReplaceAllString(document, "")
}
