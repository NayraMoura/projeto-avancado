import React from 'react';  
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';  
import ProductsPage from './pages/ProductsPage';  
import ProductDetails from './pages/ProductDetails';  // importando detalhes do produto
import Button from './components/Button';  
import './App.css'; 

const ButtonComponent = () => {  
    const navigate = useNavigate();  

    const handleViewProducts = () => {  
        navigate('/'); // Navega para a página de produtos  
    };  

    return <Button label="Ver Produtos" onClick={handleViewProducts} />;  
};  

const App = () => {  
    return (  
        <Router>  
            <div>  
                {/* Seção dos Botões */}  
                <div className="button-container">  
                    <ButtonComponent />  
                </div>  

                {/* Rotas da Aplicação */}  
                <Routes>  
                    <Route path="/" element={<ProductsPage />} />  
                    <Route path="/product/:productId" element={<ProductDetails />} />  
                </Routes>  
            </div>  
        </Router>  
    );  
};  

export default App;   