import React from 'react';

import styles from './styles';

import vinyls from './vinyls';

import VinylItem from './VinylItem';

const VinylsList = () => {

    const vinylsList = vinyls.map(vinyl => 
        < VinylItem vinyl = {vinyl} key={vinyl.id}/>);

    return <div style={styles.list}> {vinylsList} </div>

};


export default VinylsList;