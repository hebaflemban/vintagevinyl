import React from 'react';

//data
// import vinyls from './components/vinyls';

//styling
import styles from './components/styles'

//mdri
import VinylsList from './components/VinylsList'

function App() {

  return (
    <div className="">
      <header className="">
        <div class="container">
          <img style={styles.headerImg}
              className=""
              src='https://i.pinimg.com/originals/7f/ab/1d/7fab1d3e555a2d3c7e12701f5777282f.jpg' 
              alt = 'background' 
          />
          <h1 style={styles.centered1} ><code> Vintage Vinyl </code></h1>
          <h3 style={styles.centered3}><code> a store that can sing</code></h3>
        </div>

      </header>

      <br></br>
      <br></br>
      <div>  <VinylsList/>  </div>
      <div>  <VinylsList/>  </div>
      <div>  <VinylsList/>  </div>

    </div>
  );

}

export default App;

