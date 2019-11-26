//const validator = require('validator')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  categoria: {
    type: [{
      name: {
        type: String,
        required: true
      },
      productos: [{
        nombre: {
          type: String,
          required: true
        },
        descripcion: {
          type: String,
          required: true
        },
        presentacion: {
          type: String,
          required: true
        },
        link: {
          type: String,
          required: true
        }
      }
      ]
    }
    ],
    required: true
  }

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product

// const yo = new Product({
//   name: "Barbara",
//   age: 28,
//   email: 'barbara@tec.mx',
//   password: 'xxx'
// })
//
// yo.save().then(function(data) {
//   console.log(data)
// }).catch(function(error) {
//   console.log('Error: ', error)
// })
