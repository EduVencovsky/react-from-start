import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'

function MainPainel() {
    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={HomePage} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

MainPainel.propTypes = {
    match: PropTypes.object.isRequired,
}

export default withRouter(MainPainel)
