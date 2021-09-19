import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/customers' component={Customers} />
            </Switch>
        </div>
    )
}

export default Routes
