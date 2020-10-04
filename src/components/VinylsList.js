import React from 'react';

import {List} from './styles'
import vinyls from './vinyls';

import VinylItem from './VinylItem';

const VinylsList = () => {

    const vinylsList = vinyls.map(vinyl => 
        < VinylItem vinyl = {vinyl} key={vinyl.id}/>);

    return <List> {vinylsList} </List>

};


export default VinylsList;