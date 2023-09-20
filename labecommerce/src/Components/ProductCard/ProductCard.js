import React from "react";
import { ProductCardContainer,StyledImg, StyledTitle, StyledPrice , StyledButton } from "./ProductCardStyle";
function ProductCard(props){
    return(
        <ProductCardContainer>
            <StyledImg src={props.produto.img}/>
            <StyledTitle>{props.produto.nome}</StyledTitle>
            <StyledPrice>{props.produto.valor},00R$ </StyledPrice>
            <StyledButton onClick={() => props.addToCart(props.produto)}> Comprar</StyledButton>  
        </ProductCardContainer>
    )
}
export default ProductCard
