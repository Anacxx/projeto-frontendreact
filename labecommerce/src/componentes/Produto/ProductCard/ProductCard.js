import React from "react";
import { Container,Imagem, Titulo, Valor, Botao } from "./ProductCardStyle";
function ProductCard(props){
    return(
        <Container>
            <Imagem src={props.produto.img}/>
            <Titulo>{props.produto.nome}</Titulo>
            <div>
            <Valor>{props.produto.valor}R$ </Valor><Botao onClick={() => props.addToCart(props.produto)}> Comprar</Botao>  
            </div>
        </Container>
    )
}
export default ProductCard
