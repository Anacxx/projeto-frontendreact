import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    background-color: white;
    border: 1px solid #cfd4dd;
    min-width: 100px;
    max-height: 200px;
    border-radius: 6px;
    margin: 8px;
    display: flex;
    flex-direction: column;
`
export const StyledImg = styled.img`
    align-self: center;
    width: 70%;
    border-radius: 6px;
    margin: 5px;
`
export const StyledTitle = styled.p`
    color: black;
    padding-left: 15px;
`
export const StyledPrice = styled.span`
    color: #43B02A;
    padding-left: 15px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bolder;
    font-size:0.9rem;

`   
export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #43B02A;
    font-weight: bold;
    padding-left: 15px;
    text-align: left;
    cursor: pointer;
`