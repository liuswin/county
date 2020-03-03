import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Banner from '../../component/Banner';
import banner_04 from '../../assets/images/banner_04.png';

export default class Channel extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
      </Row>
    );
  }
}
