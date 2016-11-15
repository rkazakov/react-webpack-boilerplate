import React, { Component } from 'react';

class Verse extends Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div>
        This is some Bible verse.
      </div>
    );
  }
}

export default Verse;
