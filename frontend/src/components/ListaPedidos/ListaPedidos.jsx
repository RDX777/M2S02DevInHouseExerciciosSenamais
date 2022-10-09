import { useState, useEffect } from "react";

export const ListaPedidos = () => {
  const [ pedidos, setPedidos ] = useState([])

  function handlePizza() {
    fetch("http://localhost:3333/solicitations", {
      method: "GET",
      }
    ).then(async response => {
      const data = await response.json()
      setPedidos(data)
    })
  }

  useEffect(() => {
    handlePizza()
  }, [])

  return (
    <>
      <h1>Lista de pedidos</h1>

      <section>
        {
          pedidos.map((pedido, index) => (
            <div key={index}>
              {pedido.name}
            </div>
          ))
        }
      </section>

    </>
  )

}