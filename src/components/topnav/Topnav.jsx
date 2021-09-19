import React from 'react'
import './topnav.css'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import userImage from '../../assets/images/vsk.jpg'
import userMenu from '../../assets/JsonData/user_menus.json'
import Thememenu from '../thememenu/Thememenu'

const currUser = {
    displayName: 'Mehmet Asil Kılıç',
    image: userImage
}

const renderNotificationItem = (item, index) => (
    <div className="notificationItem" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>   
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnavRightUser">
        <div className="topnavRightUserImage">
            <img src={user.image} alt="" />
        </div>
        <div className="topnavRightUserName">
            {user.displayName}
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notificationItem">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnavSearch">
                <input type="text" placeholder='Search here...' />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnavRight">
                <div className="topnavRightItem">
                    <Dropdown
                        customToggle={() => renderUserToggle(currUser)}
                        contentData={userMenu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnavRightItem">
                    <Dropdown 
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>
                <div className="topnavRightItem">
                    <Thememenu />
                </div>
            </div>
        </div>
    )
}

export default Topnav

