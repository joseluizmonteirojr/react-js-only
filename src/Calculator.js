import React, { Component } from "react";

import "./Calculator.css";

import { Button, Display, Row } from "./components";

export default class Calculator extends Component {
  state = {};

  render() {
    return (
      <section className="Calculator">
        <Row>
          <Button variant="clear" value="C" />
          <Display value={"1+2"} />
        </Row>
        <Row>
          <Button variant="default" value="7" />
          <Button variant="default" value="8" />
          <Button variant="default" value="9" />
          <Button variant="operator" value="+" />
        </Row>
        <Row>
          <Button variant="default" value="4" />
          <Button variant="default" value="5" />
          <Button variant="default" value="6" />
          <Button variant="operator" value="-" />
        </Row>
        <Row>
          <Button variant="default" value="1" />
          <Button variant="default" value="2" />
          <Button variant="default" value="3" />
        </Row>
        <Row>
          <Button variant="default" value="0" />
          <Button variant="default" value="." />
          <Button variant="equals" value="=" />
        </Row>
      </section>
    );
  }
}
