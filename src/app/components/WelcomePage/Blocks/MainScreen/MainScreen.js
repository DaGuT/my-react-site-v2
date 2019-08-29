import React, {Component} from 'react';
import TextScramble from '../../../TextScramble';
import './MainScreen.css';

/**
 * This is main block that will be displayed in welcomepage component
 * It has nice text effect and more cool stuff will be added later
 *
 * @export
 * @class MainScreen
 * @extends {Component}
 */
export default class MainScreen extends Component {
  constructor() {
    super();

    this.state = {
      scrambleProgess: 0
    }

    this.skipScramble = this
      .skipScramble
      .bind(this);
  }

  skipScramble() {}

  render() {
    // phrases list and freeDuration for TextScramble. Defined here just for
    // visibility
    let phrases = ['Hi', 'How are you doing?', 'I am doing it!'];
    let freezeDuration = 1600;

    //and now we render :)
    return (
      <div className="MainScreen">
        {/*we only display scramble skip button while we show that scramble text*/
        this.state.scrambleProgess < 1 && <div className="top-right-text">
          <span className="TextScramble-progressbar">
            <span
              onClick={this.skipScramble}
              className="underline"
              style={{
              'width': `${Math.floor(this.state.scrambleProgess * 100)}%`
            }}></span>skip</span>
        </div>}
        <div className="scramble-container">
          <TextScramble
            phrases={phrases}
            freezeDuration={freezeDuration}
            reportProgress={(progress) => {
            this.setState({"scrambleProgess": progress})
          }}/>
        </div>
      </div>
    )
  }
}
