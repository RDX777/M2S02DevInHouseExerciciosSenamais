import { useState } from "react";
import { toast } from 'react-toastify';

export const CadastroPizza = () => {
  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ price, setPrice ] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3333/pizzas", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price
      })
    })
    toast.success("Pizza cadastrada")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro de pizzas</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Nome da pizza"/>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" placeholder="Descrição da pizza"/>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} name="price" id="price" />
      <input type="submit" value="Salvar" />
    </form>
  )
}