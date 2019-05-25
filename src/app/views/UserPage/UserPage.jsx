import React, { useState } from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import MainPainel from './MainPainel/MainPainel'

export default function UserPage() {
    const [isRightSideBarOpen, setIsRightSideBarOpen] = useState(false)
    const [isLeftSideBarOpen, setIsLeftSideBarOpen] = useState(true)
    return (
        <div
            className={`container-scroller sidebar-dark ${
                isLeftSideBarOpen ? '' : 'sidebar-icon-only'
            }`}
        >
            <NavBar
                isRightSideBarOpen={isRightSideBarOpen}
                setIsRightSideBarOpen={setIsRightSideBarOpen}
                isLeftSideBarOpen={isLeftSideBarOpen}
                setIsLeftSideBarOpen={setIsLeftSideBarOpen}
            />
            <div className="container-fluid page-body-wrapper">
                <SideBar
                    isRightSideBarOpen={isRightSideBarOpen}
                    isLeftSideBarOpen={isLeftSideBarOpen}
                />
                <MainPainel />
            </div>
        </div>
    )
}
