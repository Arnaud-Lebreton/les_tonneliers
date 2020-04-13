import React, { Component } from "react";
import Calendar from "react-calendar";

class Calendar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default Calendar1;
