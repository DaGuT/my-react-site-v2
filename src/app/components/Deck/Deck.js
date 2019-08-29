import React, {Component} from 'react';
import Deckitem from './Deckitem.js';
import './grid.css';
import $ from 'jquery';
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";

class Deck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };
  }

  //we first draw some empy blocks, then we parse data in this function and replace empty blocks with normal portfolio items
  componentDidMount() {
    this.initGallery();
  }

  //upon component update we update all portfolio items
  componentDidUpdate() {
    this.initGallery();
  }

  render() {
    //may be I should hide functions like this?
    function drawDeck(data) {
      return data.map(item => <Deckitem key={item.src} item={item}/>);
    }

    return (<div className="grid-container">{drawDeck(this.state.data)}</div>);
  }

  //misc functions
  initGallery() {
    $('.mf-popup').magnificPopup({
      type: 'iframe',
      iframe: {
        patterns: {
          pf: {
            index: '',
            id: function(url) {
              return url;
            },
            src: '%id%'
          }
        }
      },
      gallery: {
        enabled: true, // set to true to enable gallery

        navigateByImgClick: true,

        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)', // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
      }

    });
  }

}

export default Deck;
