/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-14 14:59:14
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-14 16:42:35
 * @FilePath: /node-test-js-demo/Users/wxy/codeWorks/git-demos/git-test/react-study/src/test/TextA.test.js
 * @Description: update here
 */

import TextA from "./../components/TestA";
import { render } from "@testing-library/react";

test("TextA组件能够正常渲染一个div", () => {
  render(<TextA />);
  const target = document.body.querySelector(".wrap");
  expect(target).not.toBeNull();
});


test("TextA组件能够正常渲染name属性", () => {
  const name = "建行";
  render(<TextA name={name} />);
  const target = document.body.querySelector(".wrap");
  expect(target.innerHTML).toEqual(name);
});
