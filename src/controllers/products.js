const Product = require('../models/product.js')

const getProducts = function(req, res) {
  Product.find({}).then(function(products) {
    res.send(products)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const getProduct = function(req, res) {
  _id = req.params.id
  Product.findById(_id).then(function(product) {
    return res.send(product)
  }).catch(function(error) {
    return res.status(404).send({})
  })
}

const createProduct = function(req, res) {
  const product = new Product(req.body)
  product.save().then(function() {
    return res.send(product)
  }).catch(function(error) {
    return res.send(400).send(error)
  })
}

const updateProduct = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['categorias']
  // revisa que los updates enviados sean permitidos, que no envie una key que no permitimos
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Product.findByIdAndUpdate(_id, req.body ).then(function(product) {
    if (!product) {
      return res.status(404).send({})
    }
    return res.send(product)
  }).catch(function(error) {
    res.status(500).send(error)
  })
}


const deleteProduct = function(req, res) {
  const _id = req.params.id
  Product.findByIdAndDelete(_id).then(function(product){
    if(!product) {
      return res.status(404).send({})
    }
    return res.send(product)
  }).catch(function(error) {
    res.status(505).send(error)
  })
}


module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
