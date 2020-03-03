import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_04 from '../../assets/images/banner_04.png';
import { menus } from '../channel/menus';

export default class Channel extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
        <Col span={24}>
          <CarouselMenu menus={menus} />
        </Col>
      </Row>
    );
  }
}
