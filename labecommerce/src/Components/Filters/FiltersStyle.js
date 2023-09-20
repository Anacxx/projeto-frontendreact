import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-top: 10px;
  background-color: white;
  border: 2px solid #cfd4dd;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px; 
  padding: 5px;
  height: 50vh;
`;
export const StyledTitle = styled.p`
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  border-radius: 15px;
  padding: 5px;
  width: 100%;
  background-color: #f5f6f7;
`
export const StyledInput = styled.input`
  background-color: white;
  padding: 8px;
  margin: 8px 0;
  border: 1.8px solid #cfd4dd;
  border-radius: 6px;
  cursor: pointer;
`;

export const AreaSelect = styled.select`
  background-color: white;
  color: black;
  padding: 8px;
  margin: 8px 0;
  border: 1.8px solid #cfd4dd;
  border-radius: 6px;
  cursor: pointer;
`