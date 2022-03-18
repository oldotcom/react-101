import React from "react";

export default class Greet extends React.Component {
  render() {
    const {name,age} = this.props

    return <h3>Hello {name}, you are {age} years old </h3>
  }
}


