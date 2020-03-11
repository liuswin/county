import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel, List, Card, Button } from 'antd';
import './index.less';

export default class CarouselMenu extends Component {
  state = {
    currentIdx: 0,
    totalPageNum: 0,
  };
  componentDidMount() {
    const { perPageCount = 6, menus = [] } = this.props;
    this.setState({
      totalPageNum: menus.length && Math.ceil(menus.length / perPageCount),
    });
  }
  handleSwitch(type) {
    if (type === 'prev') {
      this.refs.navCarousel.prev();
    } else {
      this.refs.navCarousel.next();
    }
    this.setState({
      currentIdx: this.refs.navCarousel.current,
    });
  }
  handleChange(current) {
    this.setState({
      currentIdx: current,
    });
  }
  renderCarouselItems() {
    const { perPageCount = 6, menus = [] } = this.props;
    const totalPageNum = menus.length && Math.ceil(menus.length / perPageCount);
    if (!totalPageNum) return;
    let menusArr = [];
    for (let i = 0; i < totalPageNum; i++) {
      if (perPageCount * i >= menus.length) {
        menusArr.push(menus.slice(i * perPageCount, menus.length));
      } else {
        menusArr.push(menus.slice(i * perPageCount, (i + 1) * perPageCount));
      }
    }
    // this.setState({totalPageNum});
    return menusArr.length
      ? menusArr.map((data, i) => (
          <List
            key={i}
            itemLayout="horizontal"
            grid={{ gutter: 16, column: perPageCount }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card hoverable cover={<div className="cover-image" style={{ backgroundImage: `url(${item.icon})` }}></div>}>
                  {/* {item.path ? (
                    <NavLink to={item.path}>
                      <Button className="nav-menu-btn">{item.title}</Button>
                    </NavLink>
                  ) : (
                    <Button className="nav-menu-btn">{item.title}</Button>
                  )} */}
                  <NavLink to={`/pass/platform/${item.id}`}>
                    <Button className="nav-menu-btn">{item.title}</Button>
                  </NavLink>
                </Card>
              </List.Item>
            )}
          ></List>
        ))
      : null;
  }
  render() {
    const { currentIdx, totalPageNum } = this.state;
    console.log(totalPageNum);
    return (
      <div className="nav-menu-container">
        <Button
          className="switch-btn"
          shape="circle"
          icon="left"
          ghost
          style={{ visibility: currentIdx === 0 ? 'hidden' : 'visible' }}
          onClick={() => this.handleSwitch('prev')}
        ></Button>
        <Button
          className="switch-btn"
          shape="circle"
          icon="right"
          ghost
          style={{ visibility: currentIdx === totalPageNum - 1 ? 'hidden' : 'visible' }}
          onClick={() => this.handleSwitch('next')}
        ></Button>
        <Carousel className="carousel-menu-container" ref="navCarousel" dots={false} afterChange={current => this.handleChange(current)}>
          {this.renderCarouselItems()}
        </Carousel>
      </div>
    );
  }
}
