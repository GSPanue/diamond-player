import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext();

class Provider extends Component {
  constructor() {
    super();

    this.togglePlay = this.togglePlay.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.toggleMaximize = this.toggleMaximize.bind(this);

    this.state = {
      play: false,
      mute: false,
      maximize: false,
      actions: {
        togglePlay: this.togglePlay,
        toggleMute: this.toggleMute,
        toggleMaximize: this.toggleMaximize
      }
    };
  }

  /**
   * togglePlay: Plays/Pauses the video.
   */
  togglePlay() {
    const { play } = this.state;

    this.setState({ play: !play });
  }

  /**
   * toggleMute: Mutes/Unmutes the video.
   */
  toggleMute() {
    const { mute } = this.state;

    this.setState({ mute: !mute });
  }

  /**
   * toggleMaximize: Maximizes/Minimizes the video.
   */
  toggleMaximize() {
    const { maximize } = this.state;

    this.setState({ maximize: !maximize });
  }

  render() {
    const { state, props: { children } } = this;

    return (
      <Context.Provider value={state}>
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired
};

export default Provider;
