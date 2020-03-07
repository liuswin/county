import React, { Component } from 'react';
import './index.less';

export default class LineWave extends Component {
  state = {
    xs: [],
    t: 0
  }
  componentDidMount(){
    let points = [];
    for (let i = 0; i <= 1920; i++) {
      points.push(i)
    }
    this.setState({
      xs: points
    })
    this.lineAnimate();
  }

  lineAnimate = () => {
    const { xs, t } = this.state;
    const { length = 30, amplitute = 45, speed = 1, id } = this.props;

    let points = xs.map( x => {
      let y = 100 + amplitute * Math.sin( (x + t) / length )

      return [x, y]
    })

    let path = 'M' + points.map( p => {
      return p[0] + ',' + p[1]
    }).join(' L')

    points.length && document.querySelector(`#${id} path`).setAttribute('d', path)

    this.setState({t: t + speed});

    requestAnimationFrame(this.lineAnimate);
  }
  render() {
    const { id } = this.props;
    return <svg id={id} className="line-wave"><path></path></svg>
  }
};
