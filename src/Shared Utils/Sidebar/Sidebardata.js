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
        path: 'userReview',
        icon: <SiCodereview size={20}/>,
        name:'Reviews'
    },
    {
        path: 'mapSearch',
        icon: <GiWorld size={20}/>,
        name:'Map Search'
    }
]