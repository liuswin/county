import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Timeline, Button, Card, List, Form, Select, Breadcrumb } from 'antd';
import moment from 'moment';
import EventCard from '../../component/EventCard';
import QuickEntry from '../../component/QuickEntry';
import Banner from '../../component/Banner';
import './index.less';
import banner_02 from '../../assets/images/banner_02.png';
import entry_01 from '../../assets/images/entry_01.png';
import entry_02 from '../../assets/images/entry_02.png';
import entry_03 from '../../assets/images/entry_03.png';
import icon_notices from '../../assets/images/icon_notices.png';
import icon_news from '../../assets/images/icon_news.png';
import icon_reports from '../../assets/images/icon_reports.png';
import icon_sponsers from '../../assets/images/icon_sponsers.png';
import { eventTimeLine as events } from './eventTimeLine';
import { notices, news, reports, sponsers } from './listData';
import { navMenu } from './linkData';

const TimeLineItem = Timeline.Item;
const { Option } = Select;
const BreadcrumbItem = Breadcrumb.Item;

const Colors = {
  voted: '#1B63DA',
  voting: '#DF5C5C',
  undetermined: '#E5E6EB',
};

const textColors = {
  voted: '#FFFFFF',
  voting: '#FFFFFF',
  undetermined: '#ABABAB',
};

class HundredCounty extends Component {
  renderTimeLine() {
    return (
      <Card className="timeline-container">
        <Timeline mode="alternate">
          {events.map((event, i) => (
            <TimeLineItem
              key={event.id}
              color={Colors[event.process]}
              // dot={
              //   <span style={{backgroundColor: 'red'}}></span>
              // }
            >
              <EventCard primaryColor={Colors[event.process]} textColor={textColors[event.process]} event={event} />
            </TimeLineItem>
          ))}
        </Timeline>
      </Card>
    );
  }
  renderSearchList() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="榜单">
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Select placeholder="选择县域" onChange={this.handleSelectChange}>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="县域">
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select placeholder="选择榜单" onChange={this.handleSelectChange}>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  }
  render() {
    return (
      <Row className="hundred-county-container">
        <Col span={24}>
          <Banner backgroundImage={banner_02} title="百县榜" desc="中国县域发展榜" />
        </Col>
        <Col className="nav-container" span={24}>
          <Breadcrumb separator='>'>
            <BreadcrumbItem>
              <Link to="/">首页</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="#">中国县域发展榜</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Button.Group>
            {navMenu.map(item => (
              <Button key={item.id} href={item.address}>{item.name}</Button>
            ))}
          </Button.Group>
        </Col>
        <Row gutter={20}>
          <Col xs={24} xl={10}>
            {this.renderTimeLine()}
            <QuickEntry entryDesc="2020中国县域发展榜" entryName="榜单发布总表" background={entry_01} />
            <QuickEntry entryDesc="2020中国县域发展榜" entryName="参榜申报专区" background={entry_02} />
            <QuickEntry entryDesc="2020中国县域发展榜" entryName="课题组" background={entry_03} />
          </Col>
          <Col xs={24} xl={14}>
            <Card
              className="list-card"
              title="榜单查询"
              extra={
                <Button type="link" href="https://www.clgnews.com/bang/cclist" target="_blank">
                  全部榜单
                </Button>
              }
            >
              {this.renderSearchList()}
            </Card>
            <Card
              className="list-card"
              title={<span><span className='icon'><img src={icon_notices} alt="" /></span>榜单公告</span>}
              extra={<Button type="link">更多</Button>}>
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={notices}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
              className="list-card"
              title={<span><span className='icon'><img src={icon_news} alt="" /></span>榜单新闻</span>}
              extra={<Button type="link">更多</Button>}>
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={news}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
              className="list-card"
              title={<span><span className='icon'><img src={icon_reports} alt="" /></span>榜单报告</span>}
              extra={<Button type="link">更多</Button>}>
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={reports}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card
              className="list-card"
              title={<span><span className='icon'><img src={icon_sponsers} alt="" /></span>榜单冠名</span>}
              extra={<Button type="link">更多</Button>}>
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={sponsers}
                renderItem={item => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>{moment(item.time).format('YYYY-MM-DD')}</span>
                  </List.Item>
                )}
              ></List>
            </Card>
          </Col>
        </Row>
      </Row>
    );
  }
}

const HundredCountyF = Form.create()(HundredCounty);

export default HundredCountyF;
