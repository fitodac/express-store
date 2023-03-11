const express = require('express')
const { faker } = require('@faker-js/faker')
const router = express.Router()

router.get('/', (req,res) => {
	const products = []
	const{size} = req.query
	const limit = size || 10

	console.log(faker.commerce)

	for(let index = 0; index < limit; index++){
		products.push({
			name: faker.commerce.product(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.food()
		})
	}

	res.json(products)
})


router.get('/filter', (req, res) => {
	res.send('Yo soy un filter')
})


router.get('/:id', (req, res) => {
	const { id } = req.params
	res.json({
		id,
		name: 'Product 2',
		price: 2000
	})
})


router.post('/', (req, res) => {
	const body = req.body
	res.json({
		message: 'created',
		data: body
	})
})

router.patch('/:id', (req, res) => {
	const { id } = req.params
	const body = req.body
	res.json({
		id,
		message: 'update',
		data: body
	})
})

router.delete('/:id', (req, res) => {
	const { id } = req.params
	res.json({
		id,
		message: 'deleted'
	})
})


module.exports = router