
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { CadastroPizza, CadastraPedido, ListaPizzas, ListaPedidos, BuscaPizza } from "./components/"
function App() {

  return (
    <>
      <CadastroPizza />
      <BuscaPizza />
      <ListaPizzas />
      <CadastraPedido />
      <ListaPedidos />
      <ToastContainer />
    </>
  );
}

export default App;
