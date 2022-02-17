
import { NavigatorConfigItem } from './../../config';




export type OnSearch = (item: NavigatorConfigItem, index: number) => void;

export interface NavigatorProps{
    dataSource?: NavigatorConfigItem[],
    onSearch?: OnSearch,
    isShow?: boolean,
    bgcolor?:  string, 
    current?: number,
}


export type UseSearchContrulor = (current: number, onSearch: OnSearch) => {
    currentShowIndex: number;
    handleItemSearch: (item: NavigatorConfigItem, index: number) => void;
}