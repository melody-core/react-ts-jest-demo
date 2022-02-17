/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-11 11:49:45
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-11 16:46:45
 * @FilePath: /react-study/src/components/DatePicker/index.js
 * @Description: update here
 */

import React, { Component } from "react";

import "./index.css";

const DAYS = ["一", "二", "三", "四", "五", "六", "日"];

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedTime: [...props.defaultValue],
    };
  }

  // 控制年份变化
  changeYear = (newYear) => {
    const [_, month, day] = this.state.currentSelectedTime;
    this.setState({
      currentSelectedTime: [newYear, month, day],
    });
  };
  // indexType: 0=> year 1=>month 2=>day
  changeSelectedTime = (indexType, value) => {
    const { currentSelectedTime } = this.state;
    if (value <= 0) {
      return;
    }
    if (indexType === 1 && value > 12) {
      return;
    }
    currentSelectedTime[indexType] = value;
    this.setState({
      currentSelectedTime,
    });
  };

  // 获取body数据源的方法
  getBodyDataSource = () => {
    const [year, month] = this.state.currentSelectedTime;
    // 这个月一共多少天
    const currentMonthDays = new Date(year, month, 0).getDate();
    // 这个月第一天是星期几
    const currentMonthOneday = new Date(year, month, 1).getDay();
    // 上个月一共多少天
    const preMonthDays = new Date(year, month - 1, 0).getDate();
    let onedayIndex = currentMonthOneday === 0 ? 6 : currentMonthOneday - 1;
    const preList = [];
    const currentList = [];
    const nextList = [];
    if (onedayIndex !== 0) {
      for (let i = onedayIndex - 1; i >= 0; i--) {
        preList.unshift(preMonthDays - (onedayIndex - 1 - i));
      }
    }
    for (let i = 1; i < currentMonthDays + 1; i++) {
      currentList.push(i);
    }
    for (
      let i = 1;
      preList.length + currentList.length + nextList.length < 42;
      i++
    ) {
      nextList.push(i);
    }
    return [preList, currentList, nextList];
  };

  // 获取今天的时间
  getTodyTime = () => {
    const tody = new Date();
    const todyTime = [tody.getFullYear(), tody.getMonth() + 1, tody.getDate()];
    this.setState({
      currentSelectedTime: todyTime,
    });
  };
  // 点击日期，选择日期。
  handleDayChange = (day) => {
    const { currentSelectedTime } = this.state;
    currentSelectedTime[2] = day;
    this.setState({
      currentSelectedTime,
    });
  };
  renderPickerHead = () => {
    const [year, month] = this.state.currentSelectedTime;
    return (
      <div className="picker-head">
        <div className="head-left">
          <div
            className="m-r-20"
            onClick={() => this.changeSelectedTime(0, year - 1)}
          >
            《
          </div>
          <div onClick={() => this.changeSelectedTime(1, month - 1)}>-</div>
        </div>
        <div className="head-mid">
          <div className="m-r-20">{year}年</div>
          <div>{month}月</div>
        </div>
        <div className="head-right">
          <div
            className="m-r-20"
            onClick={() => this.changeSelectedTime(1, month + 1)}
          >
            +
          </div>
          <div onClick={() => this.changeSelectedTime(0, year + 1)}>》</div>
        </div>
      </div>
    );
  };

  renderBodyDayItem = (day, isCurrent) => {
    const { currentSelectedTime } = this.state;
    return (
      <div
        className={isCurrent ? "picker-box" : "picker-box color-gray"}
        key={`pre-${day}`}
        style={
          currentSelectedTime[2] === day && isCurrent
            ? { background: "blue" }
            : null
        }
        onClick={() => this.handleDayChange(day)}
      >
        {day}
      </div>
    );
  };
  renderPickerBody = () => {
    const [preList, currentList, nextList] = this.getBodyDataSource();
    const columns = DAYS.map((day) => (
      <div className="picker-box" key={day}>
        {day}
      </div>
    ));
    // const style =  ? { backgroundColor: "blue" } : null;
    const preDays = preList.map((day) => this.renderBodyDayItem(day));
    const currentDays = currentList.map((day) =>
      this.renderBodyDayItem(day, true)
    );
    const nextDays = nextList.map((day) => this.renderBodyDayItem(day));
    return (
      <div className="picker-body">
        <div className="flex-center-wrap">{columns}</div>
        <div className="flex-wrap-wrap">
          {preDays}
          {currentDays}
          {nextDays}
        </div>
        <div className="body-body"></div>
      </div>
    );
  };
  renderPickerFooter = () => {
    return (
      <div className="picker-footer" onClick={this.getTodyTime}>
        <div>今天</div>
        <div
          className="enter-btn"
          onClick={() =>
            this.props.handleEnterClick(this.state.currentSelectedTime)
          }
        >
          确定
        </div>
      </div>
    );
  };

  render() {
    const head = this.renderPickerHead();
    const body = this.renderPickerBody();
    const footer = this.renderPickerFooter();
    return (
      <div >
        {head}
        {body}
        {footer}
      </div>
    );
  }
}

export default DatePicker;
