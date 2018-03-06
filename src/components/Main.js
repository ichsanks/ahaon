import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Pages from './pages/Pages'
import Posts from './pages/Posts'

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pages' component={Pages} />
        <Route path='/posts' component={Posts} />
    </Switch>
)

export default Main