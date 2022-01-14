import React, { useState, useEffect, useRef } from "react";
import ImgCard from "./../ImgCard";

import { useObserver, useDataSourceSet } from "./effect";

import styles from "./index.module.css";



/**
 *
 * @param {*} props
 *      -@dataSource   {src:string, title:string}[]
 *      -@el   选择器
 *      -@CALLBACK
 *      -@lineNo
 *  @returns
 */
export const WaterFall = ({ dataSource = [], callback, el, lineNo=2 }) => {
  useObserver({ dataSource, callback, el });
 
  // 真正渲染的多列图片数组
  const { dataSourceSet, fallRef} = useDataSourceSet(lineNo, dataSource);
  

  // 渲染UI
  const renderUI = () => {
    return dataSourceSet.map((target, index) => {
      const { value = [] } = target;
      return (
        <div
          className={styles["line-wrap"]}
          style={{ width: `${(1 / lineNo - 0.01) * 100}%` }}
          key={index}
        >
          {value.map((item, keyIndex) => (
            <div key={keyIndex} style={{width: '100%'}}>
              <ImgCard {...item} />
            </div>
          ))}
        </div>
      );
    });
  };

  const fall = renderUI();
  return (
    <div className={styles["water-fall"]} ref={fallRef}>
      {fall}
    </div>
  );
};

export default WaterFall;
