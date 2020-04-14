import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`
const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Button success>Hello</Button>
      <Button danger>Hello</Button>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &active,
  &focus{
    outline: none;
  }
  background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"}
`;

export default App;


