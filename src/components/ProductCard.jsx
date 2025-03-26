//Componentes de card de produto

import React from 'react'; 
import { Link } from 'react-router-dom'; // Importando o Link do React Router
import '../App.css';


const ProductCard = ({ product, onAddToCart }) => {  
    return (  
        <div className="product-card">  
            <img src={product.image} alt={product.name} style={{ width: '100%' }}/>  
            <h3>{product.name}</h3> 
            <p className="price"> R$ {product.price}</p>  
            <Link to={`/product/${product.id}`} className="product-link">Ver detalhes</Link> {/* Link para detalhar o produto */} 
            <button onClick={() => onAddToCart(product.id)}className="custom-button">Adicionar ao Carrinho</button>  
        </div>  
    );  
};  

export default ProductCard;  