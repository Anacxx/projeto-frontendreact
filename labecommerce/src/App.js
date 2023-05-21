import React, { useState } from 'react';
import Header from './componentes/Header/Header'
import ProductCard from './componentes/ListaProdutos/ProductCard/ProductCard';
import produtos from './Lista/produtos.json'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Carrinho from './componentes/Carrinho/Carrinho0/Carrinho';
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
}
`
const CardsContainer = styled.div`
  max-width: 700px;
  border: 1px solid black;
  display:grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`
const Blab = styled.div`
  display: flex;
`
function App() {
  const [buscaNome, setBuscaNome] = useState('')
  const [buscaId, setBuscaId] = useState('')
  const [buscaSelect, setBuscaSelect] = useState('')
  const [buscaMin, setBuscaMin] = useState()
  const [buscaMax, setBuscaMax] = useState()


  return (
    <>
      <GlobalStyle/>
      <Header
        buscaNome={buscaNome}
        setBuscaNome={setBuscaNome}
        buscaId={buscaId}
        setBuscaId={setBuscaId}
        buscaSelect={buscaSelect}
        setBuscaSelect={setBuscaSelect}
        buscaMin={buscaMin}
        setBuscaMin={setBuscaMin}
        buscaMax={buscaMax}
        setBuscaMax={setBuscaMax}
      />
      <Blab>
        <CardsContainer>
        {
        produtos
        .filter((produto) => {
          if(buscaNome && produto.nome.toLowerCase().includes(buscaNome.toLowerCase())){
            return produto;
          }else if(!buscaNome){
            return produto;
          }
        })
        .filter((produto) => {
          if(buscaId && produto.id === buscaId){
            return produto;
          }else if(!buscaId){
            return produto;
          }
        })
        .filter((produto) => {
          if(buscaMin){
            return produto.valor >= buscaMin || buscaMin === ""
          }else if(!buscaMin){
            return produto;
          }
        })
        .filter((produto) => {
          if(buscaMax){
            return produto.valor <= buscaMax || buscaMax === ""
          }else if(!buscaMax){
            return produto;
          }
        })
        .sort((a, b) => {
          if ( buscaSelect === "crescente") {
            return a.nome > b.nome ? 1 : -1;
          } else if ( buscaSelect === "decrescente") {
            return a.nome > b.nome ? -1 : 1;
          }
        })
        .map((produto) => {
            return (
              <ProductCard
                produto={produto}
              />
            )
          }
          )
        }
        </CardsContainer>
        <Carrinho/>
      </Blab>
    </>
  );
}

export default App;
