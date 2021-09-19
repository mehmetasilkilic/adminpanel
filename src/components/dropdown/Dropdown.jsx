import React, { useRef } from 'react'

import './dropdown.css'

const clickOutsideRef = (contentRef, toggleRef) => {
    document.addEventListener('mousedown', (e) => {
        //user click toggle
        if(toggleRef.current && toggleRef.current.contains(e.target)) {
            contentRef.current.classList.toggle('active')
        } else {
            //user click outside toggle and content
            if (contentRef.current && !contentRef.current.contains(e.target)){
                contentRef.current.classList.remove('active')
            }
        }
    })
}

const Dropdown = props => {

    const dropdownContentEl = useRef(null)
    const dropdownToggleEl = useRef(null)
    
    clickOutsideRef(dropdownContentEl, dropdownToggleEl)

    return (
        <div className="dropwon">
            <button  ref={dropdownToggleEl} className="dropdownToggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className="dropdownToggleBadge">{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdownContentEl} className="dropdownContent">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className="dropdownFooter">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Dropdown
