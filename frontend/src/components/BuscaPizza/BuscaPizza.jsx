import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export const BuscaPizza = () => {
  const [pizzas, setPizzas] = useState([])
  const [nomePizza, setNomePizza] = useState("")

  function buscaPizza() {
    fetch("http://localhost:3333/pizzas?name=" + nomePizza, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      }
    })
      .then(response => response.json())
      .then((data) => {
        if (data.length === 0) {
          toast.error("Nenhuma pizza encontrada")
        } else {
          setPizzas(data)
          toast.success("Encontado")
        }
      })


  }

  return (
    <>
      <h1>Busca de pizzas</h1>
      <input type="text" name="buscapizza" id="buscapizza" value={nomePizza} onChange={(e) => setNomePizza(e.target.value)} />
      <input type="button" value="Buscar" onClick={buscaPizza} />
      <h2>Pizzas encontradas:</h2>
      <section>
        {
          pizzas.map((pizzas, index) => (
            <div key={index}>
              {pizzas.name}
            </div>
          ))
        }
      </section>
    </>
  )
}