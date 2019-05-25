import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import UserPage from './views/UserPage/UserPage'

import './styles/styles.css'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={UserPage} />
            </Switch>
        </BrowserRouter>
    )
}
