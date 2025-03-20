import React from 'react';  
import { useParams } from 'react-router-dom';  

const ProductDetails = () => {  
    const { id } = useParams(); // Pegando o id do produto da URL  

    return (  
        <div>  
            <h1>Detalhes do Produto</h1>  
            <p>ID do Produto: {id}</p>  
            {/* Aqui você pode adicionar a lógica para exibir detalhes específicos do produto */}  
        </div>  
    );  
}  

export default ProductDetails;  