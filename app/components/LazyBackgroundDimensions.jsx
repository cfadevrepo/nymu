import React from 'react';

export default class LazyBackgroundDimensions extends React.Component {

  state = { src: null };

  componentDidMount() {
    const { src } = this.props;
    const { width } = this.props;
    const { height } = this.props;

    const imageLoader = new Image(width, height);
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    return <div className={"notHome"} {...this.props} style={{ backgroundImage: `url(${this.state.src || this.props.placeholder})` }} />;
  }
}