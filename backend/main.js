const { v4: uuidv4 } = require('uuid')

const express = require('express')
const app = express()

app.use(express.json())

const PORTA = 3333

const DADOS = []

app.get("/pizzas", (request, response) => {
  response.status(200).json(DADOS)
})

app.post("/pizzas", (request, response) => {
  const pizza = {
    id : uuidv4(),
    name : request.body.name,
    description : request.body.description,
    price : request.body.price,
    ingredients : request.body.ingredients,
  }
  DADOS.push(pizza)
  response.status(201).json(pizza)
})

app.listen(PORTA, () => {
    console.log("Servidor iniciado na porta: " + PORTA)
})