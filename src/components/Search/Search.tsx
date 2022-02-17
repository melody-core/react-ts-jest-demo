/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-17 15:05:13
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-17 16:56:34
 * @FilePath: /react-study/src/components/Search/Search.tsx
 * @Description: update here
 */

import React, { Component, ChangeEvent, FocusEvent } from "react";

import type { SearchProps, SearchState } from "./type";

import styles from "./index.module.css";

/**
 * @props
 *  - @defaultValue ? - 同defaultValue
 *  - @placeholder ? -同placeholder
 *  - @value ?  - 同value
 *  - @className ? - 同classname
 *  - @style ? - 同style
 *
 * @events
 *   -@onFocus ? 同onFocus
 *   -@onSearch ? 点击搜索或者回车的回调
 *   -@onChange ? 同onChange
 *   -@onCancel ? 点击取消按钮的回调
 *   -@onClearClick ? 点击小x的回调
 */
export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const { defaultValue, value } = props;
    this.state = {
      showBtn: !!value || !!defaultValue,
      sValue: defaultValue || "",
    };
  }

  handleInputFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    const { onFocus } = this.props;
    this.setState({
      showBtn: true,
    });
    onFocus && onFocus(event);
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { value } = event.target;
    this.setState({
        sValue: value,
    });

    onChange && onChange(event);
  };

  handleCancelIconClick = () => {
    const { onClearClick } = this.props;
    this.setState({
      sValue: "",
    });
    onClearClick && onClearClick();
  };

  handleBtnClick = () => {
    const { onSearch, onCancel, value } = this.props;
    const { sValue } = this.state;
    const currentValue = (value !==undefined ) ? value : sValue
    if (sValue) {
      onSearch && onSearch(currentValue);
    } else {
      onCancel && onCancel();
    }
  };

  render() {
    const { placeholder, className, style, value } = this.props;
    const { showBtn, sValue } = this.state;
    const currentValue = (value !==undefined ) ? value : sValue
    return (
      <div
        className={`${styles["search-wrap"]} ${className || ""}`}
        style={style}
      >
        <div className={styles["input-wrap"]}>
          <div className={styles["icon-box"]}></div>
          <input
            type="text"
            onFocus={this.handleInputFocus}
            onChange={this.handleChange}
            className={styles["input"]}
            placeholder={placeholder}
            value={currentValue}
          />
          {currentValue && (
            <div
              onClick={this.handleCancelIconClick}
              className={styles["cancel-icon"]}
            >
              x
            </div>
          )}
        </div>
        {showBtn && (
          <div onClick={this.handleBtnClick} className={styles["btn"]}>
            {currentValue ? "搜索" : "取消"}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
