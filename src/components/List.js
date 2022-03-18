import React from "react";

export default class List extends React.Component {

  componentDidMount() {
    console.log('START')
  }

  componentWillUnmount() {
    console.log('END')
  }

  render() {
    return "List"
  }
}