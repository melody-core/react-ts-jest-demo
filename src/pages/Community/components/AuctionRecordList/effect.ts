/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-18 11:58:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-18 12:15:15
 * @FilePath: /react-study/src/pages/Community/components/AuctionRecordList/effect.ts
 * @Description: update here
 */
import { useState } from 'react'
import type  { DataSourceItem, UseCurrentShowList } from './type';

export const STATUS_IMG_LIST = [
    "https://cdn.weipaitang.com/static/20190917a4da3e95-0f6f-4136-96ee-a509c5ccd29d-W140H69",
    "https://cdn.weipaitang.com/static/2019091714486a72-ddae-478e-af9e-5a148d0efdf8-W140H69"
]




export const useCurrentShowList: UseCurrentShowList = (dataSource) => {
    const [currentShowList, setCurrent] = useState<DataSourceItem[]>(dataSource.slice(0, 5));


    const handleMoreClick = () => {
        setCurrent([...currentShowList, ...dataSource.slice(currentShowList.length-1, 5)])
    }

    return {
        currentShowList,
        handleMoreClick
    }
}