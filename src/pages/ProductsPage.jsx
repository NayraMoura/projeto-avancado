import React, { useState } from 'react';  
import ProductCard from '../components/ProductCard';  
import { products } from '../data/products'; // Importando a lista de produtos  
const ProductsPage = () => {  
    const [cart, setCart] = useState([]);  

    const handleAddToCart = (productId) => {  
        const product = products.find(p => p.id === productId);  
        if (product) {  
            setCart([...cart, product]);  
            alert(`${product.name} foi adicionado ao carrinho!`);  
        }  
    };  

    return (  
        <div className="products-page">  
            <h1>Produtos</h1>  
            <div className="product-list">  
                {products.map(product => (  
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />  
                ))}  
            </div>  
        </div>  
    );  
};  

export default ProductsPage;  