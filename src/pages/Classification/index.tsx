import React, { Component, RefObject, createRef } from "react";

import Search from "./../../components/Search";

import { getTabsDataSource } from './sevice';

import styles from "./index.module.css";


export class Classification extends Component {
  state = {
    activeIndex: 0,
    tabs: [],
  };

  doms: RefObject<HTMLDivElement>[] = []; // {current: dom}[]

  lastIndex = -1;

  observe = (dom: HTMLElement, index: number) => {
    console.log('observe', index)
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(this.lastIndex === -1){
        return ;
      }
      if (entries[0].intersectionRatio > 0){
        console.log(`出现了, ${index}, last: ${this.lastIndex}`);
        this.setState({ 
            activeIndex: index,
          });
        this.lastIndex = index
    
      }
    });
    // start observing
    intersectionObserver.observe(dom);
  };

  // 初始化tabs的数据, 设置交叉观察器
  initTabsData = () => {
    getTabsDataSource()
    .then(res=> {
      const { categoryList = [] } = res.data;
      this.doms = categoryList.map(() => createRef())
      this.setState({
        tabs: categoryList
      })
      setTimeout(()=>{
        this.lastIndex = 0;
      }, 500)
      this.doms.forEach((item, index) => {
        const { current } = item;
        if (current) {
          this.observe(current, index);
        }
      });
     
    })
  }

  componentDidMount(){
    this.initTabsData();
  }

  handleChangeTab = (index: number) => {
    this.lastIndex = -1;
    const dom = document.querySelector(`#tab-item-${index}`);
    this.setState({
      activeIndex: index
    })
    dom?.scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(()=>{
      this.lastIndex = index
    }, 700)
  }

  render() {
    //   const { inputValue } = this.state;
    const { activeIndex, tabs } = this.state;
    return (
      <div className="wpt-page-container">
        <div className={styles["search-wrap"]}>
          <Search
            placeholder="嘻嘻x"
            defaultValue="猫吃鱼"
            onSearch={(v) => {
              console.log("我要基于value去做我的业务逻辑了", v);
            }}
          />
        </div>
        <div className={styles["page-wrap"]}>
          <div className={styles["tab-wrap"]}>
            {tabs.map((item, index) =>{
              const { cateId, cateName } = item || {};
              return (
                <div
                  className={styles["tab-item"]}
                  onClick = { () => this.handleChangeTab (index)}
                  style={index === activeIndex ? { color: "red" } : undefined}
                  key={cateId}
                >
                  {cateName}
                </div>
              )
            } )}
          </div>
          <div className={styles["content-wrap"]}>
            {tabs.map((item, index) => {
              const {cateId, cateName, secCategory = []} = item || {};
              return (
                <div
                  className={styles["tab-content"]}
                  key={cateId}
                >
                  <div id={`tab-item-${index}`} >{cateName}</div>
                  <div className={styles['p-r']}>
                    <div
                      ref={this.doms[index]}
                      className={styles["observer-item"]}
                    />
                    {secCategory.map((item, index)=>{
                      const {icon, secCateName} = item ||{}
                      return (
                        <div key={index}>
                          <img  src={icon}/>
                          <div>{secCateName}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            } )}
          </div>
        </div>
      </div>
    );
  }
}

export default Classification;
