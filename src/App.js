import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Checkout from './pages/checkout/checkout';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
