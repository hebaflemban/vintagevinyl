import React from 'react';

//data
import vinyls from './components/vinyls';

//styling
import styles from './components/styles'

function App() {

  const vinylsList = vinyls.map(vinyl => (
        <div key = {vinyl.id}>
            <img style={styles.listImg}
                  className=""
                  src={vinyl.image} 
                  alt = 'background' 
              />
            <h5 style={styles.center} ><code> {vinyl.name} </code></h5>
            <p style={styles.center}><code>{vinyl.price}</code></p>
        </div>

  ));

  return (
    <div className="">
      <header className="">
        <h1 style={styles.center} ><code> Vintage Vinyl </code></h1>
        <h3 style={styles.center}><code> a store that can sing</code></h3>
        <img style={styles.headerImg}
             className=""
             src='https://i.pinimg.com/originals/7f/ab/1d/7fab1d3e555a2d3c7e12701f5777282f.jpg' 
             alt = 'background' 
        />
      </header>
      <br></br>
      <br></br>
      <div style={styles.list}>
        {vinylsList}
      </div>

    </div>
  );

}

export default App;

