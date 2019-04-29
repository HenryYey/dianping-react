import React, { Component } from 'react'
import './index.less'
export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  render() {
    const data = this.state.data
    return (
      <div className="listItem">
        <img className="image" src={data.picture} alt="loading..."></img>
        <div className="info-box">
          <div className="title">{data.shop}</div>
          <div className="detail">{data.product}</div>
          <span className="price">￥ {data.currentPrice} <del>￥ {data.oldPrice}</del></span>
          <span className="sale">{data.sale}</span>
        </div>
      </div>
    )
  }
}
