import React, { Component } from 'react';
import Slick from 'react-slick';
import Verse from '../Verse/Verse';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slick className='container' {...settings}>
        <div><Verse /></div>
        <div><Verse /></div>
        <div><Verse /></div>
        <div><Verse /></div>
        <div><Verse /></div>
      </Slick>
    );
  }
}

export default Slider;
