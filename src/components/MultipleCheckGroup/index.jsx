/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-15 14:49:43
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-15 15:41:23
 * @FilePath: /study-babel/Users/wxy/codeWorks/git-demos/git-test/react-study/src/components/MultipleCheckGroup/index.jsx
 * @Description: update here
 */

import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

/**
 * @props
 *  - @dataSource  {label:string, value: any}[] 所有选项的数据来源 必传
 *  - @defaultValues value[] 默认被选中项的集合
 *  @events
 *  - @onChange  (currentSelectedValues) => void 选中项改变的时候会触发这个回调 currentSelectedValues: 当前被选中的项的value组成的数组
 *
 **/
class MultipleCheckGroup extends Component {
  // 运行时的props类型检测
  static propTypes = {
    dataSource: PropTypes.array,
    onChange: PropTypes.func,
    defaultValues: PropTypes.array
  };
  constructor(props){
      super(props);
      console.log(props);
      this.state = {
        currentSelectedValues: props.defaultValues || [],
      };
  }
  
  handleItemChange = (value) => {
    const { currentSelectedValues = [] } = this.state;
    const findIndex = currentSelectedValues.findIndex((item) => item === value);
    if (findIndex === -1) {
      currentSelectedValues.push(value);
    } else {
      currentSelectedValues.splice(findIndex, 1);
    }
    this.setState({
      currentSelectedValues: [...currentSelectedValues],
    });
    this.props.onChange && this.props.onChange(currentSelectedValues);
  };

  handleSelectAll = () => {
    const { currentSelectedValues = [] } = this.state;
    const { dataSource = [] } = this.props;
    let newCurrent = [];
    if (currentSelectedValues.length !== dataSource.length) {
      newCurrent = dataSource.map((item) => item.value);
    }
    this.setState({
      currentSelectedValues: newCurrent,
    });
    this.props.onChange(newCurrent);
  };

  renderItems = () => {
    const { dataSource = [] } = this.props;
    const { currentSelectedValues = [] } = this.state;
    return dataSource.map((item) => {
      const { label, value } = item || {};
      return (
        <div key={value} className={styles.itemWrap}>
          <input
            type="checkbox"
            checked={currentSelectedValues.includes(value)}
            onChange={() => this.handleItemChange(value)}
          />
          <div>{label}</div>
        </div>
      );
    });
  };

  render() {
    const items = this.renderItems();
    const { currentSelectedValues } = this.state;
    const { dataSource } = this.props;
    return (
      <div className={styles.wrap}>
        <div className={styles.itemWrap}>
          <input
            checked={currentSelectedValues.length === dataSource.length}
            type="checkbox"
            onChange={this.handleSelectAll}
          />
          <div>全部</div>
        </div>
        {items}
      </div>
    );
  }
}

export default MultipleCheckGroup;
