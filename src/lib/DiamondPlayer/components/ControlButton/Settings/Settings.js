import React, { Component } from 'react';

import { SettingsIcon } from './styles';
import TooltipButton from '../../TooltipButton';

class Settings extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /**
     * ToDo: Open settings.
     */
  }

  render() {
    return (
      <TooltipButton title="Settings" onClick={this.handleClick}>
        <SettingsIcon />
      </TooltipButton>
    );
  }
}

export default Settings;
