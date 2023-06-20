import {FaUserAlt} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {SiCodereview} from 'react-icons/si'
import {GiWorld} from 'react-icons/gi'
export const data = [
    {
        path: '',
        icon: <AiFillHome size={21}/>,
        name:'Home'
    },
    {
        path: 'editProfile',
        icon: <FaUserAlt size={20}/>,
        name:'Profile'
    },
    {
        path: 'review',
        icon: <SiCodereview size={20}/>,
        name:'Reviews'
    },
    {
        path: 'mapSearch',
        icon: <GiWorld size={20}/>,
        name:'Map Search'
    }
]

export const artisanData = [
    {
        path: '',
        icon: <FaUserAlt size={20}/>,
        name:'Profile'
    },
    {
        path: '',
        icon: <SiCodereview size={20}/>,
        name:'Reviews'
    },
    {
        path: 'mapSearch',
        icon: <GiWorld size={20}/>,
        name:'Map Search'
    },
    {
        path: '',
        icon: <GiWorld size={20}/>,
        name:'Payments'
    }
 
]

export const adminData = [
    {
        path: '',
        icon: <AiFillHome size={21}/>,
        name:'Dashboard'
    },
    {
        path: '',
        icon: <FaUserAlt size={20}/>,
        name:'Artisan Management'
    },
    {
        path: 'userReview',
        icon: <SiCodereview size={20}/>,
        name:'User Management'
    },
    {
        path: 'userReview',
        icon: <SiCodereview size={20}/>,
        name:'User Management'
    }
]
