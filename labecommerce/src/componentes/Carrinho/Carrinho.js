import React from "react";
import { Container,Imagem, Titulo, Valor, Botao } from "./CarrinhoStyle";
function ProductCard(props){
    return(
        <Container>
            <Imagem src={props.produto.img}/>
            <Titulo>{props.produto.nome}</Titulo>
            <p>Quantidade: {props.produto.amount}</p>
            <Valor>{props.produto.valor}R$ </Valor><Botao onClick={() => props.deletarProduto(props.produto)}> Remover</Botao>  
        </Container>
    )
}
export default ProductCard
