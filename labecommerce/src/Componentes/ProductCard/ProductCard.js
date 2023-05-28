import React from "react";
import { Container,Imagem, Titulo, Valor, Botao } from "./ProductCardStyle";
function ProductCard(props){
    return(
        <Container>
            <Imagem src={props.produto.img}/>
            <Titulo>{props.produto.nome}</Titulo>
            <Valor>{props.produto.valor},00R$ </Valor>
            <Botao onClick={() => props.addToCart(props.produto)}> Comprar</Botao>  
        </Container>
    )
}
export default ProductCard
