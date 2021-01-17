import React from 'react';
import styled from 'styled-components';
import Todos from './components/Todos';

import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {

  return (
    <Provider store={store}>
      <AppContainer>
        <Todos />
      </AppContainer>
    </Provider>

  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  align-items: center;
`


export default App;
