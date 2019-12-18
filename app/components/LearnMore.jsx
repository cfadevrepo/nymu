import React from 'react';
import {
  StyledLearnMore,
} from './core.styles';

export default class LearnMore extends React.Component {
  render() {
    const {
      text,
      href,
    } = this.props;

    return (
      <StyledLearnMore
        target="_blank"
        href={href}
      >
        {text}
      </StyledLearnMore>
    );
  }
}
