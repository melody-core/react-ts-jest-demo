

import EchartsPage  from './../pages/EchartsPage'
import Home from './../pages/Home';
import Community from '../pages/Community';
import Classification from './../pages/Classification';
import Mine from './../pages/Mine';


export default  [ {
    path: '/',
    Component: Home
}, {
    path: '/community',
    Component: Community
}, {
    path: '/classification',
    Component: Classification
}, {
    path: '/mine',
    Component: Mine
}]