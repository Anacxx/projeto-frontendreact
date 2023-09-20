import React from "react";
import { StyledH4, StyledPrice, StyledButton, StyledQt, StyledDiv, StyledImg, CartCardContainer } from "./CartStyle";
function Cart(props){
    return(
        <CartCardContainer>
            <StyledImg src={props.produto.img}/>
            <StyledDiv>
                <StyledH4>{props.produto.nome}</StyledH4>
                <StyledPrice>{props.produto.valor},00R$ </StyledPrice>
                <StyledQt>Quantidade: {props.produto.amount}</StyledQt>
                <StyledButton onClick={() => props.deletarProduto(props.produto)}> Remover</StyledButton>  
            </StyledDiv>
        </CartCardContainer>
    )
}
export default Cart;
