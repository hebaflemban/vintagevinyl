import React from 'react';

//styling
import { Title, Subtitle, GlobalStyle,Header} from './components/styles'

//components
import VinylsList from './components/VinylsList'

//theme 
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#ff85a2",
};


function App() {

  return (
    <ThemeProvider theme = {theme}>
      <div>
        <GlobalStyle/>
        <Header >
          <div class="container">
            <Title ><code> Vintage Vinyl </code></Title>
            <Subtitle><code> a store that can sing</code></Subtitle>
          </div>

        </Header>

        <br></br>
        <br></br>
        <div>  <VinylsList/>  </div>
        <div>  <VinylsList/>  </div>
        <div>  <VinylsList/>  </div>

      </div>
      </ThemeProvider>
  );

}

export default App;

