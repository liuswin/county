import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Carousel, Button } from 'antd';
import Polygon from '../../component/Polygon';
import './index.less';
import { countyModules } from './moduleMenu';

class HomePage extends Component {
  state = {
    currentCarouselIdx: 0,
    carouselCount: 0
  };
  componentDidMount() {
    this.setState({
      carouselCount: this.refs.carousel.props.children.length
    });
  }
  renderCarouselVedioItem() {
    //autoplay="autoplay" loop="loop"
    return (
      <div className="video-panel">
        <video
          style={{ width: '100%' }}
          controls
          controlsList="noremote footbar nodownload noremoteplayback"
          disablePictureInPicture={true}
          id="banner-video"
          autoPlay="autoplay"
          loop="loop"
          autostart="true"
        >
          <source src="https://cdn.clgnews.com/video/site.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
  renderCarouselModuleItem() {
    return (
      <div className="module-menu-panel">
        <div className="menu-row-container">
          {countyModules.map((module, i) => (
            i < 3 && <Polygon key={module.id} title={module.title} desc={module.desc} />
          ))}
        </div>
        <div className="menu-row-container">
          {countyModules.map((module, i) => (
            i > 2 && <Polygon key={module.id} title={module.title} desc={module.desc} />
          ))}
        </div>
      </div>
    );
  }
  handleSwitch(type) {
    //
    if (type === 'prev') {
      this.refs.carousel.prev();
    } else {
      this.refs.carousel.next();
    }
  }
  handleChange(current) {
    this.setState({
      currentCarouselIdx: current,
    });
    var videoDOM = document.querySelectorAll('.video-panel video')[0];
    current === 0 && videoDOM.paused ? videoDOM.play() : videoDOM.pause();
  }
  renderCarouselPanel() {
    const { currentCarouselIdx, carouselCount } = this.state;
    return (
      <div className="carousel-container">
        <Button className="switch-btn prev" shape="circle" icon="left" onClick={() => this.handleSwitch('prev')} disabled={currentCarouselIdx === 0}></Button>
        <Button className="switch-btn next" shape="circle" icon="right" onClick={() => this.handleSwitch('next')} disabled={currentCarouselIdx === carouselCount - 1}></Button>
        <Carousel ref="carousel" afterChange={current => this.handleChange(current)}>
          {this.renderCarouselVedioItem()}
          {this.renderCarouselModuleItem()}
        </Carousel>
      </div>
    );
  }
  renderHomeBlockContent() {
    return (
      <div className="home-content">
        <div className="block-content-01">
          <p className="county-title">中国县域发展榜</p>
          <p className="slogan">
            展现中国实现全面小康的<span className="highlight">辉煌成就</span>
          </p>
          <p className="slogan">
            <span className="highlight">创建中国县域发展</span>的综合测评体系
          </p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <Row>
        <Col className="page-banner" span={24}>
          {this.renderCarouselPanel()}
        </Col>
        <Col span={24}>{this.renderHomeBlockContent()}</Col>
      </Row>
    );
  }
}

const stateToProps = ({ loggedUserState }) => ({
  userInfo: loggedUserState.userInfo,
});
export default connect()(HomePage);
