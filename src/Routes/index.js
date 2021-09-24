import {Switch, Route} from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'


export default function Routes () {

    return(
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/home/:slug'>
                <Home />
            </Route>
        </Switch>
    )
}