/*!
 * tva-calculator
 * Copyright(c) 2022 Amadou Sylla
 * MIT Licensed
 */
'use strict'
/**
 * Module exports.
 * @public
 */
module.exports = calculator
/**
 * Create a that return the all included tax for a given
 * 
 * @param {string|number} _taxFree 
 * @param {string|number} _valueAddedTaxRate
 * @returns {number}
 * @private
 */
function allTaxIncluded(_taxFree, _valueAddedTaxRate) {

  if (typeof _taxFree === 'number' && typeof _valueAddedTaxRate === 'number') {
    return Number(_taxFree * (1 + _valueAddedTaxRate / 100))
  }

  if (typeof _taxFree !== 'string' && typeof _valueAddedTaxRate !== 'string') {
    throw new TypeError('The amount and tax rate must be a number or string')
  }

  var taxfree = parseInt(_taxFree, 10)
  var valuaddedtaxrate = parseInt(_valueAddedTaxRate, 10)

  if (!isNaN(taxfree) && !isNaN(valuaddedtaxrate)) {
    return Number(taxfree * (1 + valuaddedtaxrate / 100))
  }
  return Number(0)
}

/**
 * Create a that return the  tax free for a given
 * 
 * @param {string|number} _allTaxIncluded 
 * @param {string|number} _valueAddedTaxRate
 * @returns {number}
 * @private
 */
function taxFree(_allTaxIncluded, _valueAddedTaxRate) {

  if (typeof _allTaxIncluded === 'number' && typeof _valueAddedTaxRate === 'number') {
    return Number(_allTaxIncluded / (1 + _valueAddedTaxRate / 100))
  }

  if (typeof _allTaxIncluded !== 'string' && typeof _valueAddedTaxRate !== 'string') {
    throw new TypeError('The amount and tax rate must be a number or string')
  }

  var taxfree = parseInt(_allTaxIncluded, 10)
  var valuaddedtaxrate = parseInt(_valueAddedTaxRate, 10)

  if (!isNaN(taxfree) && !isNaN(valuaddedtaxrate)) {
    return Number(taxfree / (1 + valuaddedtaxrate / 100))
  }
  return Number(0)
}
/**
 * @param {Array} args
 * @returns {number}
 * @public
 */
calculator.sum = function(...theArgs) {
  let total = 0
  for (const args of theArgs) {
    total += Number(parseInt(args, 10))
  }
  return total
}
/**
 * Create a function that return the value added tax for a given
 * 
 * @param {string|number} _taxFree 
 * @param {string|number} _valueAddedTaxRate
 * @returns {number}
 * @private
 */
function valueAddedTax(_taxFree, _valueAddedTaxRate) {

  if (typeof _taxFree === 'number' && typeof _valueAddedTaxRate === 'number') {
    return Number(_taxFree * (_valueAddedTaxRate / 100))
  }

  if (typeof _taxFree !== 'string' && typeof _valueAddedTaxRate !== 'string') {
    throw new TypeError('The amount and tax rate must be a number or string')
  }

  var taxfree = parseInt(_taxFree, 10)
  var valuaddedtaxrate = parseInt(_valueAddedTaxRate, 10)

  if (!isNaN(taxfree) && !isNaN(valuaddedtaxrate)) {
    return Number(taxfree * (valuaddedtaxrate / 100))
  }
  return Number(0)
}
/**
 * Create a function that return the tva or ht or ttc for a given
 * 
 * @param {string} __TYPE__
 * @param {string|number} _amount 
 * @param {string|number} _valueAddedTax
 * @returns {number}
 * @public
 */
function calculator(...args) {
  var __TYPE__, _amount, _valueAddedTax
  switch (arguments.length) {
    case 3:
      __TYPE__ = arguments[0]
      _amount = arguments[1]
      _valueAddedTax = arguments[2]
      break
    case 2:
      __TYPE__ = ''
      _amount = arguments[0]
      _valueAddedTax = arguments[1]
      break
  }
  if (typeof __TYPE__ !== 'string') {
    throw new TypeError('The type must be a string')
  }
  switch (__TYPE__) {
    case 'VAT':
      return valueAddedTax(_amount, _valueAddedTax)
      break
    case 'ATI':
      return allTaxIncluded(_amount, _valueAddedTax)
      break
    case 'TF':
      return taxFree(_amount, _valueAddedTax)
      break
    default:
      return taxFree(_amount, _valueAddedTax)
  }
}