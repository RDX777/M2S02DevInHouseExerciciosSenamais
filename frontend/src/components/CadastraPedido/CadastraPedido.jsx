import { useState } from "react";
import { toast } from 'react-toastify';

export const CadastraPedido = () => {
  const [ name, setName ] = useState("")
  const [ cpf, setCpf ] = useState("")
  const [ phone, setPhone ] = useState("")
  const [ payment, setPayment ] = useState("")
  const [ note, setNote ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3333/solicitations", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name,
        cpf,
        phone,
        payment,
        note
      })
    })
    toast.success("Pizza cadastrada")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro de pizzas</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Nome do cliente"/>
      <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} name="description" id="description" placeholder="Cpf"/>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name="price" id="price" placeholder="Telefone"/>
      <input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} name="price" id="price" placeholder="Pagamento"/>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} name="price" id="price" placeholder="Preço"/>
      <input type="submit" value="Salvar" />
    </form>
  )
}