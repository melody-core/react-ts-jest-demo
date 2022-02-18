/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-18 15:07:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-18 15:41:14
 * @FilePath: /react-study/src/components/Search/_test/Search.test.tsx
 * @Description: update here
 */
import React,{ ReactElement } from 'react';

import Search from "../Search";
import { render, fireEvent } from "@testing-library/react";
import styles from './../index.module.css';
import renderer from 'react-test-renderer';


// beforeEach(()=>{
//     console.log('---------beforeEach-------')
// })

// beforeAll(()=>{
//     console.log('----beforeAll-----')
// })
test("Search组件渲染功能正常", ()=> {
    render(<Search />);
    const target = document.body.querySelector(`.${styles["search-wrap"]}`);
    expect(target).not.toBeNull();
})
test("Search组件className属性功能正常", ()=> {
    render(<Search className='aaa'/>);
    const target = document.body.querySelector(`.${styles["search-wrap"]}`);
    let isIncludesAAA = false;
    target?.classList.forEach((cn)=>{
        if(cn === 'aaa'){
            isIncludesAAA=true;
        }
    })
    expect(isIncludesAAA).toEqual(true);
})
test("Search组件placeholder属性功能正常", ()=> {
    render(<Search placeholder='bbbb'/>);
    const target = document.body.querySelector(`.${styles["input"]}`);
    expect(target?.getAttribute('placeholder')).toEqual('bbbb');
})

test("Search组件交互功能正常", ()=> {
    render(<Search />);
    const target = document.body.querySelector(`.${styles["input"]}`);
    if(target){
        fireEvent.input(target, {
            target: {
                value: 'aaaa'
            }
        });
        const btn = document.body.querySelector(`.${styles["btn"]}`);
        // expect( btn ).not.toBe(undefined);
        expect(btn?.innerHTML).toEqual('搜索');

    }

    // expect( target.innerHTML ).toEqual("0");
    // fireEvent.click(target);
    // fireEvent.click(target);
    // expect( target.innerHTML ).toEqual("2");
})

// test("TestB组件内置回调功能正常", ()=> {
//     const component = renderer.create(
//         <Search />
//     )
//     const instance = component.getInstance();
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//     expect(instance.state.count).toEqual(0);
//     instance.handleClick();
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//     expect(instance.state.count).toEqual(1);
// })
