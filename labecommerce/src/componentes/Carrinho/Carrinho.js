import React from "react";
import { Container,Imagem, Titulo, Valor, Botao, Unidades, Bloco } from "./CarrinhoStyle";
function ProductCard(props){
    return(
        <Container>
            <Imagem src={props.produto.img}/>
            <Bloco>
                <Titulo>{props.produto.nome}</Titulo>
                <Valor>{props.produto.valor},00R$ </Valor>
                <Unidades>Quantidade: {props.produto.amount}</Unidades>
                <Botao onClick={() => props.deletarProduto(props.produto)}> Remover</Botao>  
            </Bloco>
        </Container>
    )
}
export default ProductCard
