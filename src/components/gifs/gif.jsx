import React from 'react';
import myGif from '../../assets/images/minions.gif'
import "./gif.css"
const MyGifs = () => {
    return (
        <div>
            <img src={myGif} alt="GIF cargado en React" />
        </div>
    );
};

export default MyGifs;