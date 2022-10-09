import { useState, useEffect } from "react";

export const ListaPizzas = () => {
  const [ pizzas, setPizzas ] = useState([])

  function handlePizza() {
    fetch("http://localhost:3333/pizzas", {
      method: "GET",
      }
    ).then(async response => {
      const data = await response.json()
      setPizzas(data)
    })
  }

  useEffect(() => {
    handlePizza()
  }, [])

  return (
    <>
      <h1>Lista de pizzas</h1>

      <section>
        {
          pizzas.map((pizza, index) => (
            <div key={index}>
              {pizza.name}
            </div>
          ))
        }
      </section>

    </>
  )

}