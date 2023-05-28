import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content:center;
    padding: 10px;
    padding-top: 20px;
`
export const Imagem = styled.img`
    width: 70%;
    border-radius: 10px;
`
export const Titulo = styled.h4`
    text-align: center;
    padding-top: 15px;
    color: black;
`
export const Valor = styled.span`
    color: #04AA6D;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bolder;
    font-size:1rem;

`   

export const Botao = styled.button`
    background-color: #04AA6D;
    border: none;
    color: white;
    padding: 10px 16px;
    text-decoration: none;
    border-radius: 4px;
    margin: 4px 2px;
    cursor: pointer;
`