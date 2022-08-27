# VAT calculator
This module provides from the standard value added tax calculation formula who is below
```txt
HT = ATI / (1 + decimal of VAT)
ATI = TF * (1 + decimal of VAT)
VAT = TF * (decimal of VAT)
			NOTE: 
decimal value of VAT => VAT rate/100
	VAT => value added tax
	 TF => tax free
	ATI => all tax included
```
## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install vat-rate-calculator
```
### API

```js
const calculator = require('vat-rate-calculator')
```
### calculator('TF', amount-ati, vat-rate)
   Or
### calculator(amount-ati, vat-rate)
Returns the value excluding tax of a given amount
```js

calculator('TF',59000,18) // => 50000
calculator(59000,18) // => 50000
```

### calculator('ATI', amount-tf, vat-rate)

Returns the all tax included of a given amount

```js
calculator('ATI',50000,18) // => 59000
```
### calculator('VAT', amount-tf, vat-rate)

Returns the value added tax of a given amount

```js
calculator('VAT',59000,18) // => 9000
```
### calculator.sum(...args)

Returns sum total of the args

```js
calculator.sum(1,2,3,4,5)// => 15
```
## License

[MIT](/LICENSE.md)
