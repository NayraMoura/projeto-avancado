import React from 'react';  

const ProductCard = ({ product, onAddToCart }) => {  
    return (  
        <div className="product-card">  
            <img src={product.image} alt={product.name} />  
            <h3>{product.name}</h3>  
            <p>Preço: R$ {product.price}</p>  
            <button onClick={() => onAddToCart(product.id)}>Adicionar ao Carrinho</button>  
        </div>  
    );  
};  

export default ProductCard;  