import React, {Component} from 'react';
import PropTypes from 'prop-types';

//creds for TextScrambleHelper to https://codepen.io/soulwire/pen/mErPAK

/**
 * This class is used to create nasty scramble effect
 *
 * @class TextScramble
 * @extends {Component}
 */
class TextScramble extends Component {
  static propTypes = {
    /**
     * array of phrases that should be shown to the user
     */
    "phrases": PropTypes
      .arrayOf(PropTypes.string)
      .isRequired,
    /**
     * Function that will be run after all animations are complited
     * this callback can be used to update state of parent component to tell that animation is finished or some other cases
     */
    "finishCallback": PropTypes.func,
    /**
    * time that each phrase should be displayed. 
    * Default value: 800
    */
    "phraseTime": PropTypes.number
  }
  static defaultProps = {
    phraseTime: 800
  }

  constructor() {
    super();
  }

  //after component is mounted, we start our magic
  componentDidMount() {
    const el = this.refs.TextScramble;
    const fx = new TextScrambleHelper(el);

    let counter = 0;
    const next = () => {
      if (counter < this.props.phrases.length) {
        fx
          .setText(this.props.phrases[counter])
          .then(() => {
            setTimeout(next, 800);
          });
        counter++;
      } else {
        this.props.finishCallback && this
          .props
          .finishCallback();
      }
    };

    next();
  }

  render() {
    return (
      <div ref="TextScramble"></div>
    );
  }
}

/**
 *This class is used to make scramble effect and will be used by TextScramble component
 *
 * @class TextScrambleHelper
 */
class TextScrambleHelper {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this
      .update
      .bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this
        .queue
        .push({from, to, start, end});
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {from, to, start, end, char} = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}


export default TextScramble;