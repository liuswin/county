import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Menus from '../../router/routerConfig';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class AppMenu extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    if (e.key.indexOf('foregin') < 0) {
      this.setState({
        current: e.key,
      });
    }
  };

  render() {
    return (
      <Menu className='menu-container' onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        {Menus
          // .filter(d => this.checkModuleP(appReducer.config.auth, d))
          .map((route, i) => {
            if (route.path === '/') return; // 首页菜单不添加
            if (route.routes && route.routes.length > 0) {
              return (
                <SubMenu
                  key={route.path}
                  title={
                    <span>
                      <Icon type={route.icon} />
                      <span>{route.name}</span>
                    </span>
                  }
                >
                  {route.routes
                    // .filter(d => checkModule(appReducer.config.auth, d.id)) 过滤有权限的菜单
                    .map(d => (
                      <Menu.Item key={d.path}>
                        <NavLink
                          to={{
                            pathname: [route.path, d.path].join('/'),
                            state: { refresh: true },
                          }}
                        >
                          {d.icon && <Icon type={d.icon} />}
                          <span>{d.name}</span>
                        </NavLink>
                      </Menu.Item>
                    ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={route.path}>
                  {
                    route.foreignSite
                      ? (
                        <a href={route.foreignSite.path} target='_blank'>{route.name}</a>
                      )
                      : (
                        <NavLink to={{ pathname: route.path, state: { refresh: true } }}>
                          {route.icon && <Icon type={route.icon} />} <span>{route.name}</span>
                        </NavLink>
                      )
                  }
                </Menu.Item>
              );
            }
          })}
      </Menu>
    );
  }
}
