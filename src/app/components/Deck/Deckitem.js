import React, {Component} from 'react';
import "./deck.css";
import "./grid.css";
import BigPicture from "react-bigpicture";

class Deckitem extends Component {
  render() {
    return (
      <BigPicture
        type="iframe"
        caption={this.props.item.sitedesc
        ? this.props.item.sitedesc
        : ''}
        src={this.props.item.src}
        className={`active-image grr-6 grc-6 grr-lg-${this.props.item.rows || 1} grc-lg-${this.props.item.cols || 1} pf-item with-overlay`}
        style={{
        'backgroundImage': `url(${this.props.item.imgSrc})`
      }}>

        <div className="overlay">
          <div className="center-text">
            {this.props.item.sitename}
          </div>
        </div>

      </BigPicture>

    );

  };
}

export default Deckitem;
