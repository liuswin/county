import React, { Component } from 'react';
import { Row, Col, List, Input } from 'antd';
import moment from 'moment';
import Banner from '../../component/Banner';
import CarouselMenu from '../../component/CarouselMenu';
import banner_03 from '../../assets/images/banner_03.png';
import './index.less';
import { menus } from './menus';
import { videos } from './videos';

const { Search } = Input;
let playTimer = null;

export default class Channel extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   play
    // }
  }
  handleMouseEnter(ev) {
    var videoItem = ev.currentTarget;
    videoItem.childNodes[1].childNodes[0].play();
  }
  handleMouseLeave(ev) {
    var videoItem = ev.currentTarget;
    videoItem.childNodes[1].childNodes[0].pause();
  }
  renderVideoList() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        dataSource={videos}
        renderItem={item => (
          <List.Item
            key={item.id}
            onMouseEnter={(ev) => this.handleMouseEnter(ev)}
            onMouseLeave={(ev) => this.handleMouseLeave(ev)}
            extra={
              <video
                className="video-component"
                controls
                controlsList="noremote footbar nodownload noremoteplayback"
                disablePictureInPicture={true}
                onClick={() => console.log('a')}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            }
          >
            <List.Item.Meta title={item.title} description={item.desc} />
            <span className="release-time">发布时间：{moment(item.time).format('YYYY-MM-DD')}</span>
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
          <Search placeholder="关键词搜索" onSearch={value => console.log(value)} enterButton size="large" />
        </Col>
        <Col span={24} className="video-list-container">
          {this.renderVideoList()}
        </Col>
      </Row>
    );
  }
}
