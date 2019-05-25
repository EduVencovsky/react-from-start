import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
// import Icon from '@mdi/react'
// import { mdiChevronDown } from '@mdi/js'

function SideBarItem(props) {
    const {
        to,
        name,
        iconName,
        subLinks,
        history,
        openedItem,
        setOpenedItem,
        activeItem,
        isLeftSideBarOpen,
    } = props

    const [hoverOpen, setHoverOpen] = useState(false)

    const isActive = activeItem == to ? 'active' : ''

    const isOpen = openedItem == name

    // let icon = require('@mdi/js')[iconName]

    const onMouseMove = isOver => {
        setHoverOpen(isOver)
    }

    return (
        <li
            className={`nav-item ${isActive} ${hoverOpen ? 'hover-open' : ''}`}
            onMouseOver={() => onMouseMove(true)}
            onMouseOut={() => onMouseMove(false)}
        >
            <div
                className="nav-link"
                onClick={() => {
                    if (isLeftSideBarOpen) {
                        setOpenedItem(isOpen ? null : name)
                    }
                    if (subLinks.length < 1) {
                        history.push(to)
                    }
                }}
                style={{ cursor: 'pointer' }}
            >
                {/* <Icon
                    className="mdi mdi-view-dashboard-outline menu-icon"
                    path={icon}
                    size={0.8}
                    color="white"
                /> */}
                <span className="menu-title">{name}</span>
                {subLinks.length > 0 && (
                    <div
                        className="menu-arrow"
                        style={isOpen ? { transform: 'rotate(180deg)' } : {}}
                    >
                        {/* <Icon
                            className="menu-arrow"
                            path={mdiChevronDown}
                            size={0.8}
                            color="white"
                        /> */}
                    </div>
                )}
            </div>
            {subLinks.length > 0 && (
                <div
                    className={isOpen ? '' : 'collapse'}
                    style={{ cursor: 'pointer' }}
                >
                    <ul className="nav flex-column sub-menu">
                        {subLinks.map((item, i) => (
                            <li key={i} className="nav-item">
                                <div
                                    className="nav-link"
                                    onClick={() => {
                                        history.push(to + item.to)
                                    }}
                                >
                                    {item.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    )
}

SideBarItem.defaultProps = {
    subLinks: [],
}

SideBarItem.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    openedItem: PropTypes.string,
    activeItem: PropTypes.string,
    isLeftSideBarOpen: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    setOpenedItem: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    location: PropTypes.object,
    subLinks: PropTypes.array,
}

export default withRouter(SideBarItem)
