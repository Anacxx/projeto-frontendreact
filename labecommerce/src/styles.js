import styled from 'styled-components';

export const CardsContainer = styled.div`
  margin: 10px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 6px; 
  grid-auto-rows: minmax(200px, auto);
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: #ebebeb;
`;

export const CartContainer = styled.div`
  background-color: white;
  margin-top: 10px;
  border: 2px solid #cfd4dd;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border-radius: 15px;
    padding: 5px;
    width: 100%;
    background-color: #f5f6f7;
  }
`;
export const StyledTotal = styled.p`
 text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`