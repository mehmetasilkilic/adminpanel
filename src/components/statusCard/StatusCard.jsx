import React from 'react'

import './statusCard.css'

const StatusCard = props => {
    return (
        <div className='statusCard'>
            <div className="statusCardIcon">
                <i className={props.icon}></i>
            </div>
            <div className="statusCardInfo">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCard
