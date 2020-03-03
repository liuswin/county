import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_03 from '../../assets/images/banner_03.png';
import { menus } from './menus';

export default class Channel extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Banner backgroundImage={banner_03} title="郡县号" desc="县域民生视频引擎" />
        </Col>
        <Col span={24}>
          <CarouselMenu menus={menus} />
        </Col>
      </Row>
    );
  }
}
