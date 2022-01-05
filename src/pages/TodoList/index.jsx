import React from 'react';


import styles from './index.module.css';

console.log('styles', styles);



export default class TodoList extends React.Component{
    render(){
        return (
            <div className={styles['wrap']}>
                <div className={styles['bar']} />
                <div className={styles['content-wrap']}>
                    <h3 className={styles['title']}>任务计划列表</h3>
                    <h4 className={styles['add-title']}>添加任务：</h4>
                    <input 
                        className={styles['input']}
                        placeholder='回车添加任务'
                    />
                    <div className={styles['mid']}>
                        <div className={styles['tip']}>
                            2个任务未完成
                        </div>
                        <div className={styles['btns']}>
                            <div className={styles['btn']}>所有任务</div>
                            <div className={styles['btn']}>未完成的任务</div>
                            <div className={styles['btn']}>完成的任务</div>
                        </div>
                    </div>
                    <h4 className={styles['add-title']}>任务列表</h4>
                    <div className={styles['list']}>
                        <div className={styles['item']}>
                            <div className={styles['item-left']}>
                                ✔️
                            </div>
                            <div>学习react</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}