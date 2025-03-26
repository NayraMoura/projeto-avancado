import React from 'react';  
import { useParams } from 'react-router-dom'; // Para pegar o parâmetro da URL  
import { products } from '../data/products'; // Importando a lista de produtos


const ProductDetails = () => {  
    const { id } = useParams(); // Pegando o id do produto da URL  
    console.log("ID do Produto:", id); // Para ver qual ID está sendo pego
    const product = products.find((prod) => prod.id === parseInt(id)); // Encontrando o produto correspondente
    
    if (!product) {
        return <h2>Produto não encontrado!</h2>; // Mensagem caso o produto não seja encontrado
    }

    return (  
         <div className="product-detail">  
            <h1>{product.name}</h1>  
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />  
            <p><strong>Descrição:</strong> {product.description}</p>  
            <p><strong>Preço:</strong> R$ {product.price}</p>  
            {/* Outros detalhes do produto podem ser adicionados aqui */}  
        </div>  
    );  
}  

export default ProductDetails;  