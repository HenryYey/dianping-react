import React, { Component } from 'react';
import "./index.less"

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-img"/>
        <span>正在加载...</span>
      </div>
    );
  }
}

export default Loading;