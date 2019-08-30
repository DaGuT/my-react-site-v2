import React from 'react';
import Deckitem from './Deckitem.js';
import './grid.css';
import {BigPictureGallery} from "react-bigpicture";

const Deck = (props) => {

    let data = props.data;

    function drawDeck(data) {
      return data.map(item => <Deckitem key={item.src} item={item}/>);
    }

    return (
      <div>
        <div className="grid-container">{drawDeck(data)}</div>
      </div>
    );
}

export default Deck;
