/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-14 15:37:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-15 09:14:25
 * @FilePath: /debugger/Users/wxy/codeWorks/git-demos/git-test/react-study/src/test/TestB.test.js
 * @Description: update here
 */

import TestB from "../components/TestB";
import { render, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';


beforeEach(()=>{
    console.log('---------beforeEach-------')
})

beforeAll(()=>{
    console.log('----beforeAll-----')
})
test("TestB组件渲染功能正常", ()=> {
    render(<TestB />);
    const target = document.body.querySelector(".count-wrap");
    expect(target).not.toBeNull();
})

test("TestB组件交互功能正常", ()=> {
    render(<TestB />);
    const target = document.body.querySelector(".count-wrap");
    expect( target.innerHTML ).toEqual("0");
    fireEvent.click(target);
    fireEvent.click(target);
    expect( target.innerHTML ).toEqual("2");
})

test("TestB组件内置回调功能正常", ()=> {
    const component = renderer.create(
        <TestB />
    )
    const instance = component.getInstance();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(instance.state.count).toEqual(0);
    instance.handleClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(instance.state.count).toEqual(1);
})
