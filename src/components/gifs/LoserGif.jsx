import React from 'react';
import "./gif.css"
import Loser from "./../../assets/images/lilo-and-stitch-stitch.gif"

const LoserGif = () => {
    return (
        <div>
             <img className="gif" src={Loser} alt="GIF cargado en React" />
        </div>
    );
};

export default LoserGif;