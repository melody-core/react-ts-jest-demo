import React, { Component, ChangeEvent, RefObject, createRef } from "react";

import Search from "./../../components/Search";

import styles from "./index.module.css";

const tabs = [
  {
    title: "a",
    content: 749,
    bg: "blue",
  },
  {
    title: "b",
    content: 967,
    bg: "green",
  },
  {
    title: "c",
    content: 1362,
    bg: "pink",
  },
  {
    title: "d",
    content: 1045,
    bg: "red",
  },
];

export class Classification extends Component {
  state = {
    // inputValue:  '受控吧宝贝'
    activeIndex: 0,
  };

  //   handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     const { value } = event.target;
  //     this.setState({
  //         inputValue: value
  //     })
  //   }
  doms: RefObject<HTMLDivElement>[] = tabs.map(() => createRef()); // {current: dom}[]

  lastLeaveindex = -1;

  observe = (dom: HTMLElement, index: number) => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      // If intersectionRatio is 0, the target is out of view
      // and we do not need to do anything.
      if ((entries[0].intersectionRatio <= 0 ) && (this.lastLeaveindex !==-1)) {
        console.log(`消失了, ${index}`);
        // this.lastLeaveindex = index;
        if(index > this.lastLeaveindex){
            this.setState({
                activeIndex: index + 1
            })
        }
        this.lastLeaveindex = index;
      } else {
        console.log(`出现了, ${index}`);
        if((index < this.lastLeaveindex) && (this.lastLeaveindex !== -1)){
            this.setState({ 
                activeIndex: index,
              });
        }
        this.lastLeaveindex === -1 && (this.lastLeaveindex = index - 1)
      }
    });
    // start observing
    intersectionObserver.observe(dom);
  };

  componentDidMount() {
    this.doms.forEach((item, index) => {
      const { current } = item;
      if (current) {
        this.observe(current, index);
      }
    });
  }

  render() {
    //   const { inputValue } = this.state;
    const { activeIndex } = this.state;
    return (
      <div className="wpt-page-container">
        <div className={styles["search-wrap"]}>
          <Search
            // value= {inputValue}
            // onChange={this.handleSearchChange}
            placeholder="嘻嘻x"
            defaultValue="猫吃鱼"
            onSearch={(v) => {
              console.log("我要基于value去做我的业务逻辑了", v);
            }}
            // onFocus={() => {
            //   console.log("wo yao luyou !");
            // }}
            // onClearClick = {()=>{this.setState({inputValue: ''})}}
          />
        </div>
        <div className={styles["page-wrap"]}>
          <div className={styles["tab-wrap"]}>
            {tabs.map((item, index) => (
              <div
                className={styles["tab-item"]}
                style={index === activeIndex ? { color: "red" } : undefined}
                key={item.title}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className={styles["content-wrap"]}>
            {tabs.map((item, index) => (
              <div
                className={styles["tab-content"]}
                style={{ background: item.bg }}
                key={item.title}
              >
                <div>{item.title}</div>
                <div style={{ height: `${item.content}px` }}>
                  <div
                    ref={this.doms[index]}
                    className={styles["observer-item"]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Classification;
