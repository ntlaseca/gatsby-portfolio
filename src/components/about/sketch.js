import React from "react"
import p5 from "p5"

class Sketch extends React.Component {
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
    return <div ref={this.sketchRef} className="react-p5 slide-in animate-second"></div>;
  }
}

export default Sketch