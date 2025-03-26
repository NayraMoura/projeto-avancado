import React from 'react';  
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';  
import ProductsPage from './pages/ProductsPage';  
import ProductDetails from './pages/ProductDetails';  // Importando detalhes do produto  
import Button from './components/Button';  
import './App.css';   

const ButtonComponent = () => {  
    const navigate = useNavigate();  

    const handleGoBack = () => {  
        navigate('/'); // Retorna para a página de produtos  
    };  

    return <Button label="Voltar" onClick={handleGoBack} />;  
};  

const App = () => {  
    return (  
        <Router>  
            <div>  
                {/* Rotas da Aplicação */}  
                <Routes>  
                    <Route path="/" element={<ProductsPage />} />  
                    {/* Rota para retornar a página de produtos */}  
                    <Route path="/product/:id"   
                           element={  
                               <div>  
                                   <ButtonComponent /> {/* Botão de voltar adicionado apenas na página de detalhes */}  
                                   <ProductDetails />  
                               </div>  
                           }   
                    />  
                </Routes>  
            </div>  
        </Router>  
    );  
};  

export default App;