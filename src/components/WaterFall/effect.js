import { useEffect, useRef, useState } from "react";

const WH_REG = /(?<=.*-W)\d+H\d+(?=\/w.*)/gi;

// 根据imgsrc获取img原本的宽高
const getWHBySrc = (src) => {
  try {
    const step0 = src.match(WH_REG)[0];
    return {
      w: step0.split("H")[0],
      h: step0.split("H")[1],
    };
  } catch (error) {
    return {};
  }
};

const getMinTarget = (set) => {
  let minIndex = 0;
  for (let i = 0; i < set.length; i++) {
    if (set[i].height < set[minIndex].height) {
      minIndex = i;
    }
  }
  return set[minIndex];
};

export const useObserver = ({ dataSource, callback, el }) => {
  useEffect(() => {
    if (callback && el) {
      const target = document.querySelector(el);
      const observer = new IntersectionObserver((entries) =>
        callback(entries, dataSource)
      );
      observer.observe(target);
      return () => {
        observer.unobserve(target);
      };
    }
  }, [dataSource]);
};

export const useDataSourceSet = (lineNo, dataSource) => {
  const fallRef = useRef();
  const [itemWidth, setItemWidth] = useState(0);
  useEffect(() => {
    setItemWidth(fallRef.current.clientWidth * (1 / lineNo - 0.01));
  }, []);
  const dataSourceSet = []; // [{ value: [], height: 0 }, {}]
  for (let i = 0; i < lineNo; i++) {
    dataSourceSet.push({
      value: [],
      height: 0,
    });
  }
  dataSource.forEach((imgObj) => {
    const { src } = imgObj || {};
    const { w, h } = getWHBySrc(src);
    const relH = (itemWidth / w) * h;
    const minTarget = getMinTarget(dataSourceSet);
    minTarget.value.push(imgObj);
    minTarget.height = minTarget.height + relH;
  });
  return { dataSourceSet, fallRef };
};
