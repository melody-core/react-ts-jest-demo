import React, { Component } from "react";

import "./index.css";
/**
 * @props
 *    - imgList:  string[]
 *    - autoPlay boolean 是否开启自动轮播
 *    - autoPlayTimer number 自动轮播的间隔时间 仅在开启自动轮播时生效。
 *
 * **/

export default class Swiper extends Component {
  // 组件本身的数据层
  state = {
    currentShowImgIndex: 0,
  };
  // 这个用来记录autoPlay定时器
  autoTimer = null; 

  // 添加定时器，添加事件监听，请求初始化的数据
  componentDidMount() {
    const { autoPlay } = this.props;
    if(autoPlay){
      this.autoPlay();
    }
  }
  // 用来卸载一些定时器或者一些事件监听
  componentWillUnmount(){
    clearInterval(this.autoTimer);
  }
  // 自动轮播
  autoPlay = () => {
    const { autoPlayTimer = 1000 } = this.props;
    clearInterval(this.autoTimer);
    this.autoTimer = setInterval(() => {
      const { currentShowImgIndex } = this.state;
      this.updateShowIndex(currentShowImgIndex + 1);
    }, autoPlayTimer);
  };

  // 控制轮播到哪一张
  updateShowIndex = (nextIndex) => {
    const { imgList } = this.props;
    if (nextIndex === -1) {
      nextIndex = imgList.length - 1;
    }
    if (nextIndex === imgList.length) {
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
