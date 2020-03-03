import React, { Component } from 'react';
import { Row, Col, List } from 'antd';
import moment from 'moment';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_03 from '../../assets/images/banner_03.png';
import './index.less';
import { menus } from './menus';
import { videos } from './videos';

export default class Channel extends Component {
  renderVideoList() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        dataSource={videos}
        renderItem={item => (
          <List.Item key={item.id} extra={<video className="video-component" controls disablePictureInPicture={true} src={item.src}></video>}>
            <List.Item.Meta title={item.title} description={item.desc} />
            <span>发布时间：{moment(item.time).format('YYYY-MM-DD')}</span>
          </List.Item>
        )}
      />
    );
  }
  render() {
    return (
      <Row className="channel-container">
        <Col span={24}>
          <Banner backgroundImage={banner_03} title="郡县号" desc="县域民生视频引擎" />
        </Col>
        <Col span={24}>
          <CarouselMenu menus={menus} />
        </Col>
        <Col span={24} className="video-list-container">
          {this.renderVideoList()}
        </Col>
      </Row>
    );
  }
}
