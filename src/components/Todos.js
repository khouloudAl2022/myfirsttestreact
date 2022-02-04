import React, { Component } from "react";
import Header from "./Header";
import Text from "./Text";
import Social from "./Social";
import { Button } from "react-bootstrap";

class Todos extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button variant="primary">Button #1</Button>

        <Text />
        <Social />
      </div>
    );
  }
}
export default Todos;
