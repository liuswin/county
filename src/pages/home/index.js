import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Carousel, Button } from 'antd';
import './index.less';

class HomePage extends Component {
  renderCarouselItem() {
    //autoplay="autoplay" loop="loop"
    return (
      <div className='video-panel'>
        <video style={{width: '100%'}} controls="" id="banner-video"  autostart="true">
          <source src="https://cdn.clgnews.com/video/site.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
  renderCarouselPanel() {
    return (
      <div className='carousel-container'>
        <Button className='switch-btn prev' shape='circle' icon='left'></Button>
        <Button className='switch-btn next' shape='circle' icon='right'></Button>
        <Carousel ref='carousel'>
          {this.renderCarouselItem()}
          <div>
            <h3>2</h3>
          </div>
        </Carousel>
      </div>
    )
  }
  renderHomeBlockContent() {
    return (
      <div className='home-content'>
        <div class="block-content-01">
          <p className='county-title'>中国县域发展榜</p>
          <p className='slogan'>展现中国实现全面小康的<span className='highlight'>辉煌成就</span></p>
          <p className='slogan'><span className='highlight'>创建中国县域发展</span>的综合测评体系</p>
        </div>
      </div>
    )
  }
  render() {
    return (
      <Row>
        <Col className="page-banner" span={24}>
          {this.renderCarouselPanel()}
        </Col>
        <Col span={24}>
          {this.renderHomeBlockContent()}
        </Col>
      </Row>
    );
  }
}

const stateToProps = ({ loggedUserState }) => ({
  userInfo: loggedUserState.userInfo,
});
export default connect()(HomePage);
