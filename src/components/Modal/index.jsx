import React, { Component, PureComponent } from "react";

import "./index.css";

/**
 * @props
 *  - title: 弹窗内容的标题
 *  - isShow: 控制弹窗的隐藏和显示
 *  - children: 内容插槽
 *  - onOk : fn
 *  - onCancel: fn
 */

// export default function Modal (props){
//     console.log('render')
//     const { title, children, isShow, onOk, onCancel } = props;
//     return (
//         <div className={`modal-wrap ${isShow ? "" : "un-show"}`}>
//         <div className="modal-content-wrap">
//           <div className="content-top">
//             {title}
//             <div className="cancel-icon" onClick={onCancel}>
//               X
//             </div>
//           </div>
//           <div className="content-mid">{children}</div>
//           <div className="content-bottom">
//             <div onClick={onCancel}>取消</div>
//             <div onClick={onOk}>确定</div>
//           </div>
//         </div>
//       </div>
//     )
// }

export default class Modal extends PureComponent {
  render() {
    console.log("render-modal");
    const { title, children, isShow, onOk, onCancel, countObj } = this.props;
    // console.log(this.props)
    return (
      <div className={`modal-wrap ${isShow ? "" : "un-show"}`}>
        <div className="modal-content-wrap">
          <div className="content-top">
            {title}
            <div className="cancel-icon" onClick={onCancel}>
              X
            </div>
          </div>
          <div className="content-mid">
            <div>{countObj.count}</div>
            {children}
          </div>
          <div className="content-bottom">
            <div onClick={onCancel}>取消</div>
            <div onClick={onOk}>确定</div>
          </div>
        </div>
      </div>
    );
  }
}
