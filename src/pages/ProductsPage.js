import React, { useEffect, useState } from 'react';  
import ProductCard from '../components/ProductCard';  

const ProductsPage = () => {  
    const [products, setProducts] = useState([]);  
    const [cart, setCart] = useState([]);  

    useEffect(() => {  
        // Simulação de carregamento de produtos  
        const fetchedProducts = [  
            { id: 1, name: "Produto A", price: 100, description: "Descrição do Produto A", image: "imagem_a.jpg" },  
            { id: 2, name: "Produto B", price: 200, description: "Descrição do Produto B", image: "imagem_b.jpg" },  
        ];  
        setProducts(fetchedProducts);  
    }, []);  

    const handleAddToCart = (productId) => {  
        const product = products.find(p => p.id === productId);  
        if (product) {  
            setCart([...cart, product]);  
            alert(`${product.name} foi adicionado ao carrinho!`);  
        }  
    };  

    return (  
        <div className="products-page">  
            <h1>Lista de Produtos</h1>  
            <div className="product-list">  
                {products.map(product => (  
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />  
                ))}  
            </div>  
        </div>  
    );  
};  

export default ProductsPage;  