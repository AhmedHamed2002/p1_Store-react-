import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import ProductDetails from './components/ProductDetails'; 
import ProductList from './components/ProductList';
import {Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Slider/>
            <ProductList/>
          </>
        }/>
        <Route path='about' element={<About/>}/>

        <Route path='product/:productId' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
