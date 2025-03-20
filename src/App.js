import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import ProductsPage from './pages/ProductsPage';  
import ProductDetails from './pages/ProductDetails';  

const App = () => {  
    return (  
        <Router>  
            <div>  
                <Routes>  
                  <Route path="/" element={<ProductsPage />} />  
                  <Route path="/product/:productId" element={<ProductDetails />} />   
                </Routes>  
            </div>  
        </Router>  
    );  
};  

export default App; 