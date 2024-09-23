import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Frutas');
  const CategoriaClick = (categoria) => {
    setSelectedCategory(categoria)
  }
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar onClick={CategoriaClick}/>
        <ProductList category={selectedCategory}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
