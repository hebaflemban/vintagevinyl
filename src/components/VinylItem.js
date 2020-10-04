import React from 'react';

import {ItemWrapper} from './styles';


const VinylItem = (props) => {
    const vinyl = props.vinyl;
    return (
        <ItemWrapper>
            <img src={vinyl.image} alt = 'background'/>
            <h5><code> {vinyl.name} </code></h5>
            <p className="vinyl-price"><code> {vinyl.price} </code></p>
        </ItemWrapper>

    );

};

export default VinylItem;