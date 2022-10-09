const { v4: uuidv4 } = require('uuid')

const express = require('express')
const app = express()

const cors = require("cors")

app.use(express.json())
app.use(cors())

const PORTA = 3333

let DADOSPIZZAS = [{
	"id": "5a4bc4c6-fcc4-497b-b1f8-3f68e3af6441",
	"name": "Pizza numero 1",
	"description": "Pizza numero 1 descrição",
	"price": 100.01,
	"ingredients": [
		"Ingrediente 1",
		"Ingrediente 2",
		"Ingrediente 3"
	]
}]
let DADOSPEDIDOS = []

app.get("/pizzas", (request, response) => {
  const nameqQuery = request.query.name || ""
  const pizzasFiltered = DADOSPIZZAS.filter(pizza => pizza.name.toLowerCase().includes(nameqQuery.toLowerCase()))
  return response.status(200).json(pizzasFiltered)
})

app.delete("/pizzas/:id", (request, response) => {
  const { id } = request.params

  const item = DADOSPIZZAS.filter(pizza => {
    return pizza.id !== id    
  })
  DADOSPIZZAS = item
  return response.status(200).json({message : "Deletado com sucesso"})

})

app.post("/pizzas", (request, response) => {

  const {name, description, price, ingredients} = request.body
  const pizza = {
    id : uuidv4(),
    name,
    description,
    price,
    ingredients,
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

app.delete("/solicitations/:id", (request, response) => {
  const { id } = request.params

  const item = DADOSPEDIDOS.filter(pedido => {
    return pedido.id !== id    
  })
  DADOSPEDIDOS = item
  return response.status(200).json({message : "Deletado com sucesso"})

})

app.post("/solicitations", (request, response) => {
  const pedido = {
    id : uuidv4(),
    name : request.body.name,
    cpf : request.body.cpf,
    phone : request.body.phone,
    payment : request.body.payment,
    note : request.body.note,
    requestClient : request.body.requestClient,
    order : "EM PRODUÇÃO"

  }
  DADOSPEDIDOS.push(pedido)
  return response.status(201).json(pedido)
})


app.listen(PORTA, () => {
    console.log("Servidor iniciado na porta: " + PORTA)
})