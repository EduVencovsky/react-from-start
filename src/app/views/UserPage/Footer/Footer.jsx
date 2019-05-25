import React from 'react'
// import Icon from '@mdi/react'
// import { mdiHeart } from '@mdi/js'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Copyright © 2018
                    <a href="https://www.urbanui.com/" target="_blank">
                        Urbanui
                    </a>
                    . All rights reserved.
                </span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                    Hand-crafted & made with
                    {/* <Icon
                        path={mdiHeart}
                        size={0.8}
                        color="red"
                    /> */}
                    <i className="mdi mdi-heart text-danger" />
                </span>
            </div>
        </footer>
    )
}
