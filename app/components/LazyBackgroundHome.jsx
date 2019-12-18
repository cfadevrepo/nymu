import React from 'react';

export default class LazyBackgroundHome extends React.Component {

  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    return <div className={"hero"} {...this.props} style={{ backgroundImage: `url(${this.state.src || this.props.placeholder})` }} />;
  }
}