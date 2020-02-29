import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkGroup from '../LinkGroup';
import { friendlyLink, mediaPartners } from './linkData';
import Copyright from '../Copyright';
import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div class='footer-menu'>
          <Link to='http://baidu.com'>关于我们</Link>
        </div>
        <LinkGroup title={friendlyLink.groupName} links={friendlyLink.sites} />
        <LinkGroup title={mediaPartners.groupName} links={mediaPartners.sites} />
        <Copyright />
      </div>
    );
  }
}
