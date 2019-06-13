const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)
routes.get('/products/:product_id', ProductController.show)
routes.post('/products', ProductController.store)
routes.put('/products/:product_id', ProductController.update)
routes.delete('/products/:product_id', ProductController.destroy)

module.exports = routes
