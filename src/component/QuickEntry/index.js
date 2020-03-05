import React, { Component } from 'react';
import { Card, Button } from 'antd';
import './index.less';

export default class QuickEntry extends Component {
  render() {
    const { entryDesc, entryName, entryType, background, styleConfig } = this.props;
    const cardStyle = {
      background: `url(${background}) center no-repeat`,
      backgroundSize: 'cover'
    }
    return (
      <Card className='quick-entry-container' style={cardStyle}>
        <p style={{color: styleConfig.color}}>{entryDesc}</p>
        <Button type='primary' style={{color: styleConfig.btnColor, background: styleConfig.btnBackground}}>{entryName}</Button>
      </Card>
    )
  }
};
