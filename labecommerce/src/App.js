import React, { useState } from 'react';
import Header from './componentes/Header/Header'
import ProductCard from './componentes/Produto/ProductCard/ProductCard';
import produtos from './Lista/produtos.json'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Carrinho from './componentes/Carrinho/Carrinho'
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

  display:grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`
const Blab = styled.div`
  display: flex;
`
const CarrinhoDiv = styled.div`  
  width: 250px;
  background-color: gray;
`
function App() {
  const [buscaNome, setBuscaNome] = useState('')
  const [buscaId, setBuscaId] = useState('')
  const [buscaSelect, setBuscaSelect] = useState('')
  const [buscaMin, setBuscaMin] = useState()
  const [buscaMax, setBuscaMax] = useState()


  const [cart, setCart] = useState([{
    "id": "071",
    "nome":"Cubos com letras",
    "valor":100.00,
    "img": "https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-cubos-de-brinquedo-infantil-com-letras_23-2149345296.jpg?w=740&t=st=1684588396~exp=1684588996~hmac=5b0bf3c4c385d7d46f10c55b3505aeac1fefdf94f87bb756759e72b74e2bda75"
 }])
  let soma = 0
  const deletarProduto = (produto) => {
    const produtoDel = cart.find((item) => item.id === produto.id)
    if(produtoDel.amount >1){
      const novoCarrinho = cart.map((item) =>{
        if(item.id === produto.id){
          return{...produtoDel, amount: produtoDel.amount-1}  
        }else{
          return item
        }
      })
      setCart(novoCarrinho)
    }else{
      const novoCarrinho = cart.filter((item) => {
        return item.id !== produto.id
      })
      setCart(novoCarrinho)
    }
  }
  const produtosCarrinho = cart.map((produto) =>{
    return(
      <Carrinho
      key={produto.id}
      produto = {produto}
      deletarProduto = {deletarProduto}
      />
    )
  })
  const addToCart = (produto) => {
    const novoProduto = cart.find((item) => item.id === produto.id)
    if(novoProduto === undefined){
      setCart([...cart,{...produto, amount:1}])
    }else{
      const novoCarrinho = cart.map((item) =>{
        if(item.id === produto.id){
          return{...novoProduto, amount: novoProduto.amount+1}  
        }else{
          return item
        }
      })
      setCart(novoCarrinho)
    }
  }

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
                addToCart={addToCart}
              />
            )
          }
          )
        }
        </CardsContainer>
        <CarrinhoDiv>
          <h1>Carrinho</h1>
          <p>Valor total: R${soma}.00</p>
          {produtosCarrinho}
        </CarrinhoDiv>
      </Blab>
    </>
  );
}

export default App;
