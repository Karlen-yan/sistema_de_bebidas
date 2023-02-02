import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import Productos from './view/Productos';
import ListaProductos from './ListaProductos';
import Pagar from './components/Pagar';
import EditarProductos from './components/EditarProducto';
import Producto from './components/Producto';
function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ListaProductos />} exact></Route>
          <Route path='/pagar' element={ <Pagar />} exact></Route>
          <Route path='/editarproducto' element={ <EditarProductos />} exact></Route>
          <Route path='/producto' element={ <Producto />} exact></Route>
  
        </Routes>
      </BrowserRouter>


  );
}

export default App;
