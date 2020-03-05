import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_04 from '../../assets/images/banner_04.png';
import './index.less';
import { menus } from '../channel/menus';

const { Search } = Input;

export default class Channel extends Component {
  render() {
    return (
      <Row className="pass-container">
        <Col span={24}>
          <Banner backgroundImage={banner_04} title="郡县通" desc="县域民生产品中心" />
        </Col>
        <Col span={24}>
          <CarouselMenu menus={menus} perPageCount={8} />
          <Search placeholder="关键词搜索" onSearch={value => console.log(value)} enterButton size="large" />
        </Col>
      </Row>
    );
  }
}
