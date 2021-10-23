// @ts-ignore
import styled from 'styled-components'
import logo from './logo.svg';
import { HomePage } from './Containers/HomePage'
import react from 'react';


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
`

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
