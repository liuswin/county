import React, { Component } from 'react';
import { Carousel, List, Card, Button } from 'antd';
import './index.less';

export default class CarouselMenu extends Component {
  renderCarouselItems() {
    const { perPageCount = 6, menus = [] } = this.props;
    const totalPage = menus.length &&  Math.ceil(menus.length / perPageCount);
    if (!totalPage) return;
    let menusArr = [];
    for (let i = 0; i < totalPage; i++) {
      if (perPageCount * i >= menus.length) {
        menusArr.push(menus.slice(i * perPageCount, menus.length));
      } else {
        menusArr.push(menus.slice(i * perPageCount, (i + 1) * perPageCount));
      }
    }
    return menusArr.length ? menusArr.map((data, i) => (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card cover={<div className="menu-icon"></div>}><Button>{item.title}</Button></Card>
          </List.Item>
        )}
      >
      </List>
    )) : null;
  }
  render() {
    return (
      <Carousel>
        {this.renderCarouselItems()}
      </Carousel>
    );
  }
};
