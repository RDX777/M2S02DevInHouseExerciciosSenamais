const { v4: uuidv4 } = require('uuid')

const express = require('express')
const app = express()

app.use(express.json())

const PORTA = 3333

const DADOSPIZZAS = []
const DADOSPEDIDOS = []

app.get("/pizzas", (request, response) => {
  return response.status(200).json(DADOSPIZZAS)
})

app.post("/pizzas", (request, response) => {
  const pizza = {
    id : uuidv4(),
    name : request.body.name,
    description : request.body.description,
    price : request.body.price,
    ingredients : request.body.ingredients,
  }
  DADOSPIZZAS.push(pizza)
  return response.status(201).json(pizza)
})


app.get("/solicitations", (request, response) => {
  return response.status(200).json(DADOSPEDIDOS)
})

app.get("/solicitations/:id", (request, response) => {
  const pedidoLocalizado = DADOSPEDIDOS.find(pedido => pedido.id === request.params.id)
  if(pedidoLocalizado) {
    return response.status(200).json(pedidoLocalizado)
  }
  return response.status(404).json({message : "Nada foi localizado."})
  
})

app.post("/solicitations", (request, response) => {
  const pedido = {
    id : uuidv4(),
    name : request.body.name,
    cpf : request.body.cpf,
    phone : request.body.phone,
    payment : request.body.payment,
    note : request.body.note,
    requestClient : request.body.requestClient

  }
  DADOSPEDIDOS.push(pedido)
  return response.status(201).json(pedido)
})


app.listen(PORTA, () => {
    console.log("Servidor iniciado na porta: " + PORTA)
})