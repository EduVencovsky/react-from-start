import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
// import Icon from '@mdi/react'
// import { mdiMenu, mdiSettings, mdiLogout } from '@mdi/js'

function NavBar(props) {
    const {
        isRightSideBarOpen,
        setIsRightSideBarOpen,
        isLeftSideBarOpen,
        setIsLeftSideBarOpen,
        history,
    } = props

    const [isNavDropDownOpen, setIsNavDropDownOpen] = useState(false)

    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a
                    className="navbar-brand brand-logo pointer-cursor"
                    onClick={() => history.push('/')}
                >
                    <img src="https://via.placeholder.com/100x30" alt="logo" />
                </a>
                <a
                    className="navbar-brand brand-logo-mini pointer-cursor"
                    onClick={() => history.push('/')}
                >
                    <img src="https://via.placeholder.com/30x30" alt="logo" />
                </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button
                    onClick={() => setIsLeftSideBarOpen(!isLeftSideBarOpen)}
                    className="navbar-toggler navbar-toggler align-self-center"
                    type="button"
                >
                    {/* <Icon path={mdiMenu} size={1} color="gray" /> */}
                </button>
                <ul className="navbar-nav navbar-nav-right">
                    <li
                        onClick={() => setIsNavDropDownOpen(!isNavDropDownOpen)}
                        className="nav-item nav-profile dropdown"
                    >
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            id="profileDropdown"
                        >
                            <img
                                src="https://via.placeholder.com/30x30"
                                alt="profile"
                            />
                        </a>
                        <div
                            className={`dropdown-menu dropdown-menu-right navbar-dropdown ${
                                isNavDropDownOpen ? 'd-block' : ''
                            }`}
                            aria-labelledby="profileDropdown"
                        >
                            <a className="dropdown-item">
                                {/* <Icon
                                    path={mdiSettings}
                                    size={1}
                                    color="gray"
                                /> */}
                                Settings
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item">
                                {/* <Icon path={mdiLogout} size={1} color="gray" /> */}
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
                <button
                    onClick={() => setIsRightSideBarOpen(!isRightSideBarOpen)}
                    className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                    type="button"
                >
                    {/* <Icon
                        className="mdi mdi-menu"
                        path={mdiMenu}
                        size={0.8}
                        color="gray"
                    /> */}
                </button>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    isRightSideBarOpen: PropTypes.bool.isRequired,
    setIsRightSideBarOpen: PropTypes.func.isRequired,
    isLeftSideBarOpen: PropTypes.bool.isRequired,
    setIsLeftSideBarOpen: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
}

export default withRouter(NavBar)
