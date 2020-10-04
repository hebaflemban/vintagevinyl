import React from 'react';

import styles from './styles';


const VinylItem = (props) => {
    const vinyl = props.vinyl;
    return (
        <div>
            <img style={styles.listImg}
                    className=""
                    src={vinyl.image} 
                    alt = 'background' 
            />
            <h5 style={styles.center} ><code> {vinyl.name} </code></h5>
            <p style={styles.center}><code>{vinyl.price}</code></p>
        </div>

    );

};

export default VinylItem;