import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";

import "./index.css";

const Swiper = (props) => {
  const [currentShowImgIndex, setCurrent] = useState(0);
  const { imgList = [] } = props;


  // callback
  // 点击左右按钮的回调
  const updateShowIndex = (index) => {
    index = (index >= imgList.length) ?  0 : index;
    index = (index <= -1) ? imgList.length - 1 : index;
    setCurrent(index);
  }


  // render-UI-imgs
  const renderImgList = () => {
    return imgList.map((url, index) => (
      <img
        className={index === currentShowImgIndex ? "show" : ""}
        key={url}
        src={url}
        alt=""
      />
    ));
  };
  // render
  const imgs = renderImgList();
  return (
    <div className="swiper-wrap">
      <button
        className="left"
        onClick={() => updateShowIndex(currentShowImgIndex - 1)}
      >
        &lt;
      </button>
      <button
        className="right"
        onClick={() => updateShowIndex(currentShowImgIndex + 1)}
      >
        &gt;
      </button>
      {imgs}
    </div>
  );
};

export default Swiper;
