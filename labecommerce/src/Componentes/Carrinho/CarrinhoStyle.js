import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content:center;
    padding: 10px;
    padding-top: 20px;
`
export const Bloco = styled.div`
    padding-left: 10px;

`
export const Imagem = styled.img`
    width: 50%;
    border-radius: 10px;
`
export const Titulo = styled.h4`
    text-align: center;

    font-size:1rem;
    color: black;
`
export const Valor = styled.p`
    color: black;
    font-family:Impact, sans-serif;
    font-weight: bolder;
    font-size:0.9rem;
    text-align: center;
`   
export const Unidades = styled.p`
    color: black;
    font-family:Impact, sans-serif;
    font-size:0.8rem;
    text-align: center;
`
export const Botao = styled.button`
    background-color: red;
    border: none;
    color: white;
    padding: 10px 16px;
    text-decoration: none;
    border-radius: 4px;
    margin: 4px 2px;
    cursor: pointer;
`