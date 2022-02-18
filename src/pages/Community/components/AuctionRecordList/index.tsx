/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-18 11:17:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-18 12:15:32
 * @FilePath: /react-study/src/pages/Community/components/AuctionRecordList/index.tsx
 * @Description: update here
 */



import React, { FC } from 'react';


import { AuctionRecordListProps, DataSourceItem } from './type';

import { STATUS_IMG_LIST, useCurrentShowList }  from './effect';

import styles from './index.module.css';


/**
 * @props
 *  -@dataSrouce  {}[] 列表渲染总数据源
 * 
 * @returns 
 */
export const AuctionRecordList: FC<AuctionRecordListProps> = ({ dataSource = []})=> {


    const { currentShowList, handleMoreClick } = useCurrentShowList(dataSource);

    const listUI = currentShowList.map((item, index) => {
        const  { user: { head, name }, price, priceTime, status } = item ;
        return (
            <div className={styles['item-wrap']} key={index}>
                <div className={styles['item-img']} style={{backgroundImage: `url(${head})`}}/>
                <div className={styles['price-wrap']}> 
                    <div className={styles['price-box']}>
                        <div className={styles['name']}>{name}</div>
                        <div className={styles['status']} style={{backgroundImage: `url(${STATUS_IMG_LIST[status]})`}}/>
                    </div>
                    <div className={styles['price-box']}>
                        <div className={styles['price']}>{price}</div>
                        <div className={styles['time']}> {priceTime}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={styles['wrap']}>
            {listUI}
            {currentShowList.length < dataSource.length && (<div onClick={handleMoreClick}>查看更多</div>)}
        </div>
    )
}


export default AuctionRecordList
