import React from 'react';

class Typewriter extends React.Component {
  state = {
    targetIndex: 0,
    text: ''
  }

  componentDidMount() {
    this.startTick();
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  startTick = () => {
    this.setState(
      () => ({ text: '' }),
      () => {
        this.interval = setInterval(this.tick, 100)
      }
    );
  }

  tick = () => {
    const { text, targetIndex } = this.state;
    const { words } = this.props;
    const target = words[targetIndex];

    if (text !== target) {
      this.setState(() => ({ text: text + target[text.length] }));
    } else {
      let nextIndex;

      do {
        nextIndex = Math.floor(Math.random() * words.length);
      } while (nextIndex === targetIndex);

      this.setState(() => ({ targetIndex: nextIndex }));
      clearInterval(this.interval);
      this.timeout = setTimeout(this.startTick, 1000);
    }
  }

  render() {
    const { text } = this.state;
    const { className } = this.props;

    return (
      <p className={className}>
        {text}
      </p>
    );
  }
}

Typewriter.defaultProps = {
  className: ''
};

export default Typewriter;
