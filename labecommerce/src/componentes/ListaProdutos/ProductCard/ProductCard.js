import React from "react";
import { Container,Imagem, Titulo } from "./ProductCardStyle";
function ProductCard(props){
    return(
        <Container>
            <Imagem src={props.produto.img}/>
            <Titulo>{props.produto.nome}</Titulo>
            <div>
            <span>{props.produto.valor}R$ </span><button> Comprar</button>  
            </div>
        </Container>
    )
}
export default ProductCard
