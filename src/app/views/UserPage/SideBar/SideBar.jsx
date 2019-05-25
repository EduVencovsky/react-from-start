import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import SideBarItem from './SideBarItem/SideBarItem'

const menuItems = [
    {
        name: 'Alunos',
        to: '/Alunos',
        iconName: 'mdiAccountOutline',
        subLinks: [
            {
                name: 'Lista Alunos',
                to: '/',
            }
        ],
    },
    {
        name: 'Funcionários',
        to: '/Funcionarios',
        iconName: 'mdiAccountCardDetailsOutline',
        subLinks: [
            {
                name: 'Lista Funcionários',
                to: '/',
            },
            {
                name: 'Cadastro Funcionários',
                to: '/New',
            }
        ],
    },
    {
        name: 'Ocorrências',
        to: '/Ocorrencias',
        iconName: 'mdiAlertCircleOutline',
        subLinks: [
            {
                name: 'Lista Ocorrências',
                to: '/',
            },
            {
                name: 'Cadastro Ocorrências',
                to: '/New',
            }
        ],
    }
]

function SideBar(props) {
    const { isRightSideBarOpen, isLeftSideBarOpen, location } = props
    const [openedItem, setOpenedItem] = useState(null)
    const [activeItem, setActiveItem] = useState(null)

    useEffect(() => {
        let activeItem = location.pathname.split('/')[1]
        setActiveItem('/' + activeItem)
    }, [location.pathname])

    useEffect(() => {
        if (!isLeftSideBarOpen) {
            setOpenedItem(null)
        }
    }, [isLeftSideBarOpen, setOpenedItem])

    return (
        <nav
            className={`sidebar sidebar-offcanvas ${
                isRightSideBarOpen ? 'active' : ''
            }`}
        >
            <ul className="nav">
                {menuItems.map((item, i) => (
                    <SideBarItem
                        key={i}
                        openedItem={openedItem}
                        setOpenedItem={setOpenedItem}
                        activeItem={activeItem}
                        isLeftSideBarOpen={isLeftSideBarOpen}
                        name={item.name}
                        to={item.to}
                        iconName={item.iconName}
                        subLinks={item.subLinks || []}
                    />
                ))}
            </ul>
        </nav>
    )
}
SideBar.propTypes = {
    isRightSideBarOpen: PropTypes.bool.isRequired,
    isLeftSideBarOpen: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
}

const SideBarMemo = React.memo(props => <SideBar {...props} />)

export default withRouter(SideBarMemo)
