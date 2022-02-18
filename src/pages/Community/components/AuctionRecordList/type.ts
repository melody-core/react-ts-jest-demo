/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-18 11:17:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-18 12:15:03
 * @FilePath: /react-study/src/pages/Community/components/AuctionRecordList/type.ts
 * @Description: update here
 */



export interface DataSourceItem{
    user: {
        id: string;
        name: string;
        head: string;
    };
    price: number;
    priceTime: number;
    status: 0 | 1;
}
export interface AuctionRecordListProps{
    dataSource: DataSourceItem[]
}


export interface UseCurrentShowList{
    (dataSource: DataSourceItem[]): {
        currentShowList:  DataSourceItem[]
        handleMoreClick: () => void
    }
}