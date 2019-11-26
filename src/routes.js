const express = require('express')
const products = require('./controllers/products')


const router = express.Router()

router.get('/products', products.getProducts)
router.get('/products/:id', products.getProduct)
router.post('/products', products.createProduct)
router.patch('/products/:id', products.updateProduct)
router.delete('/products/:id', products.deleteProduct)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /products'
  })
})

module.exports = router
