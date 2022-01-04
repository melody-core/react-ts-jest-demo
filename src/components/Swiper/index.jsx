import React, { Component } from "react";

import "./index.css";
/**
 * @props
 *    - imgList:  string[]
 *
 *
 *
 *
 *
 *
 *
 * **/

export default class Swiper extends Component {
  // 组件本身的数据层
  state = {
    currentShowImgIndex: 0,
  };

  //
  updateShowIndex = (nextIndex) => {
      const { imgList } = this.props;
     if(nextIndex === -1){
        nextIndex = imgList.length-1;
     } 
     if(nextIndex ===  imgList.length){
        nextIndex = 0;
     }
    this.setState({
      currentShowImgIndex: nextIndex,
    });
  };

  // 渲染图片列表的方法
  renderImgList = () => {
    const { imgList = [] } = this.props;
    const { currentShowImgIndex } = this.state;
    return imgList.map((url, index) => (
      <img
        className={index === currentShowImgIndex ? "show" : ""}
        key={url}
        src={url}
        alt=""
      />
    ));
  };

  render() {
    const imgs = this.renderImgList();
    const { currentShowImgIndex } = this.state;
    return (
      <div className="swiper-wrap">
        <button
          className="left"
          onClick={() => this.updateShowIndex(currentShowImgIndex - 1)}
        >
          &lt;
        </button>
        <button
          className="right"
          onClick={() => this.updateShowIndex(currentShowImgIndex + 1)}
        >
          &gt;
        </button>
        {imgs}
      </div>
    );
  }
}
