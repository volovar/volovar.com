import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Resume from './Resume'
import ContentPage from './ContentPage'
import NoRoute from './NoRoute'

const RouterComponent = () => (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/resume' component={ Resume } />
        <Route exact path='/:name' component={ ContentPage } />
        {/* <Route path='/404' component={ NoRoute } /> */}
        <Route component={ NoRoute } />
    </Switch>
)

export default RouterComponent