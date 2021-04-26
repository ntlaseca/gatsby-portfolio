import React from "react"
import p5 from "p5"
import { Container } from "./self-portrait.css"

class SelfPortrait extends React.Component {
  constructor(props) {
    super(props)
    this.sketchRef = React.createRef();
    this.canvas = null;
  }

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchRef.current); //eslint-disable-line
  }

  componentDidUpdate() {
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.sketchRef.current); //eslint-disable-line
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return <Container ref={this.sketchRef}></Container>;
  }
}

export default SelfPortrait