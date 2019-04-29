import React, { Component } from "react";
import './index.less'

class Banner extends Component {
  render() {
    return (  
      <div className="wrapper">
        <div className="banner-title-box">
          <img className="icon" alt=""></img>
          <span className="banner-info">吃喝玩乐，找优惠</span>
        </div>
        <div className="buttons">
          <button className="button_first">打开大众点评</button>
          <button className="button_second">下载APP享特价</button>
        </div>
      </div>
    )
  } 
 
  
}

export default Banner;