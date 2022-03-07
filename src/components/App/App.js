import React from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';
import { Theme, QUERIES } from '../../constants';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
  /*
  @media ${(p) => p.theme.queries.laptopAndDown} {
    background-color: green;
  }
  @media ${QUERIES.tabletAndDown} {
    background-color: blue;
  }
  @media ${QUERIES.phoneAndDown} {
    background-color: beige;
  }
  */
`;

export default App;
