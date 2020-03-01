import React, { Component } from 'react';
import { Card, Button } from 'antd';
import './index.less';

export default class QuickEntry extends Component {
  render() {
    const { entryDesc, entryName, entryType, background } = this.props;
    const cardStyle = {
      background: `url(${background}) center no-repeat`,
      backgroundSize: 'cover'
    }
    return (
      <Card className='quick-entry-container' style={cardStyle}>
        <p>{entryDesc}</p>
        <Button type='primary'>{entryName}</Button>
      </Card>
    )
  }
};
