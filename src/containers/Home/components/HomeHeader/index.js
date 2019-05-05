import React, { Component } from "react";
import './index.less'

class Banner extends Component {
  render() {
    return (  
      <div className="header">
        <div className="local">深圳</div>
        <div className ="search-icon"></div>
        <input className="search-box" placeholder="输入商户名、地点"></input>
        <a href="/me"><div className="self"></div></a>
      </div>
    )
  } 
}

export default Banner;