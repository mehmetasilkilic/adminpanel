import React, { useEffect, useRef, useState } from 'react'
import './thememenu.css'
import { useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

const modeSettings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
]

const colorSettings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]

const clickOutsideRef = (contentRef, toggleRef) => {
    document.addEventListener('mousedown', (e) => {
        if(toggleRef.current && toggleRef.current.contains(e.target)) {
            contentRef.current.classList.toggle('active')
        } else {
            if (contentRef.current && !contentRef.current.contains(e.target)){
                contentRef.current.classList.remove('active')
            }
        }
    })
}

const Thememenu = () => {

    const menuRef = useRef(null)
    const menuToggleRef = useRef(null)

    clickOutsideRef(menuRef, menuToggleRef)

    const setActiveMenu = () => menuRef.current.classList.add('active')

    const closeMenu = () => menuRef.current.classList.remove('active')

    const [currMode, setcurrMode] = useState('light')

    const [currColor, setcurrColor] = useState('blue')

    const dispatch = useDispatch()

    const setMode = mode => {
        setcurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeAction.setMode(mode.class))
    }

    const setColor = color => {
        setcurrColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))
    }

    useEffect(() => {
        const themeClass = modeSettings.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'))

        const colorClass = colorSettings.find(e => e.class === localStorage.getItem('colorMode', 'theme-mode-light'))

        if (themeClass !== undefined) setcurrMode(themeClass.id)

        if (colorClass !== undefined) setcurrColor(colorClass.id)
        
    }, [])

    return (
        <div>
            <button ref={menuToggleRef} className="dropdownToggle" onClick={() => setActiveMenu()}>
                <i className="bx bx-palette"></i>
            </button>
            <div ref={menuRef} className="themeMenu">
                <h4>Theme settings</h4>
                <button className="themeMenuClose" onClick={() => closeMenu()}>
                    <i className="bx bx-x"></i>
                </button>
                <div className="themeMenuSelect">
                    <span>Choose mode</span>
                    <ul className="modeList">
                        {
                            modeSettings.map((item, index) => (
                                <li key={index} onClick={() => setMode(item)}>
                                    <div className={`modeListColor ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="themeMenuSelect">
                    <span>Choose color</span>
                    <ul className="modeList">
                        {
                            colorSettings.map((item, index) => (
                                <li key={index} onClick={() => setColor(item)}>
                                    <div className={`modeListColor ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Thememenu
