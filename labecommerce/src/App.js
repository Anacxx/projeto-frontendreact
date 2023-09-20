import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header.js';
import ProductCard from './Components/ProductCard/ProductCard.js'
import produtos from './Lista/produtos.json'
import { createGlobalStyle } from 'styled-components';
import Carrinho from './Components/Cart/Cart.js';
import Filters from './Components/Filters/Filters.js';
import { CardsContainer, CartContainer, Main, StyledTotal } from './styles.js';
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
}
`
function App() {
  const [buscaNome, setBuscaNome] = useState('')
  const [buscaId, setBuscaId] = useState('')
  const [buscaSelect, setBuscaSelect] = useState('')
  const [buscaMin, setBuscaMin] = useState()
  const [buscaMax, setBuscaMax] = useState()
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

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
      if(novoCarrinho.length === 0){
        setTotal(0)
      }
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
  useEffect(() => {
    let soma = 0
    if(cart.length){
      cart.map((item) => {
        return (soma= soma + (item.amount*item.valor))
      })
      setTotal(soma)
    }
  },[cart])
  useEffect(() =>{
    if(cart.length > 0){
      localStorage.setItem('carrinho',JSON.stringify(cart))
    }
  },[cart] )
  useEffect(() =>{
    const carrinhoLocal =localStorage.getItem('carrinho')
    if (carrinhoLocal){
      setCart(JSON.parse(carrinhoLocal))
    }
  },[])
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main>
        <Filters
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
                >
        </Filters>
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
              return 0;
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
        <CartContainer>
          <h1>Carrinho</h1>
          <StyledTotal>Total: R${total},00</StyledTotal>
          {produtosCarrinho}
        </CartContainer>
      </Main>
    </>
  );
}

export default App;
