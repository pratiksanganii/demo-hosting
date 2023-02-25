const express = require("express")
const products = require("./products")
const app = express()

app.get('/',(req,res)=>{
    res.json("This is Demo for hosting.")
})

app.get('/products',(req,res)=>{
    res.json(products)
})

app.listen(5000)