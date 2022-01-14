import React, { useState } from "react";

import ImgCard from "./../../components/ImgCard";
import WaterFall from "./../../components/WaterFall";

import styles from './index.module.css';

const createMockImgs = () => {
    const res = [];
    for(let i=0; i<10; i++){
        const isBig =  (Math.random()>0.5);
        if(isBig){
            res.push({
                src: 'https://cdn.weipaitang.com/imgwebp/20201224ge2caqof-lrgg-oqtg-22vt-0ecah5hf4id0-W1125H2000/w/320',
                title: '大'
            });
        }else{
            res.push({
                src: 'https://cdn.weipaitang.com/skywebp/fapai/tupian/image/20211026/cb63efc70eae4fcf90758de5d3a6f860-W800H800/w/320',
                title: '小'
            })
        }
        
    }
    return res;
}


const Home = () => {
  const [imgList, setImgList] = useState(createMockImgs());

  const handleLoadImgs = (entries, dataSource) => {
    if(entries[0].isIntersecting){
        const  newImgList  = [...dataSource, ...createMockImgs()];
        setImgList(newImgList);
    }
  }
  return (
    <div className={styles['page-home']}>
      <WaterFall
         lineNo={3}
         el="#observer-target-el"
         callback={handleLoadImgs}
         dataSource = {imgList}
      />
      <div id="observer-target-el">别拉了，我是有底线的。</div>
    </div>
  );
};

export default Home;
