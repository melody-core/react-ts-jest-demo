import React, { forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { useSearchContrulor } from "./effect";

import styles from "./index.module.css";

/**
 *
 * @param {*} props
 *  - @dataSource  {icon: string, activeIcon: strirng, titile: string, name: string}[] 所有选项
 *  - @onSearch  fn (item, index)=>{}  选择某一项后的回调
 *  - @isShow boolean 控制是否展示 默认为true
 *  - @bgcolor string 背景色
 *  - @current 当前被展示的那个index，如果不传的话，由state控制。
 * @returns
 */
export const Navigator = ({
  dataSource = [],
  onSearch,
  isShow = true,
  bgcolor,
  current,
}, ref) => {
  const { currentShowIndex, handleItemSearch } = useSearchContrulor(
    current,
    onSearch
  );
  
  // ref转发
  ref = useImperativeHandle(ref, ()=>({
    current
  }))
  
  // 控制是否展示
  if (!isShow) {
    return null;
  }

  // 列表渲染所有选项
  const items = dataSource.map((item, index) => {
    const { icon, title, name, activeIcon } = item;
    return (
      <div
        key={name}
        className={styles["item-wrap"]}
        onClick={() => handleItemSearch(item, index)}
      >
        <div
          className={styles["item-icon"]}
          style={{
            backgroundImage:
              index === currentShowIndex
                ? `url(${activeIcon})`
                : `url(${icon})`,
          }}
        />
        <div
          className={styles["item-title"]}
          style={{
            color: index === currentShowIndex ? "red" : "",
          }}
        >
          {title}
        </div>
      </div>
    );
  });
  return (
    <div
      className={styles["navigator-wrap"]}
      style={bgcolor ? { backgroundColor: bgcolor } : null}
    >
      {items}
    </div>
  );
};

export default forwardRef(Navigator);

Navigator.propTypes = {
  dataSource: PropTypes.array,
  onSearch: PropTypes.func,
  isShow: PropTypes.bool,
};
