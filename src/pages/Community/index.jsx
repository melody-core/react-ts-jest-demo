

import React from 'react';

import AuctionRecordList from './components/AuctionRecordList';


const mockData = [{
    user:{
        id: "xxx091",
        name: "小明",
        head: "https://cdn.weipaitang.com/skywebp/avatar/tupian/image/20220211/35be8a6a0c47456499d1e4a311ca3142-W1080H1920/w/96" 
    },
    price: 20.3,
    priceTime: Date.now(),
    status: 0
},{
    user:{
        id: "xxx091",
        name: "小明",
        head: "https://cdn.weipaitang.com/skywebp/avatar/tupian/image/20220211/35be8a6a0c47456499d1e4a311ca3142-W1080H1920/w/96" 
    },
    price: 20.3,
    priceTime:  Date.now(),
    status: 0
},{
    user:{
        id: "xxx091",
        name: "小明",
        head: "https://cdn.weipaitang.com/skywebp/avatar/tupian/image/20220211/35be8a6a0c47456499d1e4a311ca3142-W1080H1920/w/96" 
    },
    price: 20.3,
    priceTime:  Date.now(),
    status: 0
},{
    user:{
        id: "xxx091",
        name: "小明",
        head: "https://cdn.weipaitang.com/skywebp/avatar/tupian/image/20220211/35be8a6a0c47456499d1e4a311ca3142-W1080H1920/w/96" 
    },
    price: 20.3,
    priceTime:  Date.now(),
    status: 0
},{
    user:{
        id: "xxx091",
        name: "小明",
        head: "https://cdn.weipaitang.com/skywebp/avatar/tupian/image/20220211/35be8a6a0c47456499d1e4a311ca3142-W1080H1920/w/96" 
    },
    price: 20.3,
    priceTime:  Date.now(),
    status: 0
},{
    user:{
        id: "xxx091",
        name: "小明",
        head: "https://cdn.weipaitang.com/skywebp/avatar/tupian/image/20220211/35be8a6a0c47456499d1e4a311ca3142-W1080H1920/w/96" 
    },
    price: 20.3,
    priceTime:  Date.now(),
    status: 0
}]

const community = () => {
    return (
        <div>
            <AuctionRecordList  dataSource={mockData}/>
        </div>
    )
}


export default community;