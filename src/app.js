const express = require('express')
const app = express()
const routerProduct = require('./routes/productRouter.js')
const routerCarts = require('./routes/cartRouter.js')
// para poder leer los json
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/products',routerProduct)
app.use('/api/carts',routerCarts)




app.listen(8080,err =>{
    console.log("escuchando el perto 8080")
})
