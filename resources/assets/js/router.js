import React from 'react';
import {Provider} from 'react-redux';
import Loadable from 'react-loadable';
// import AdminComponent from './admin/adminComponent';
import LoginComponent from './Login/LoginComponent';
import {
    BrowserRouter,
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

const AdminComponent = Loadable({
    loader:() => import('./admin/AdminComponent'),
    loading(){
        return <div>Loading..</div>
    }
});

const Root = () =>{
    return (
       <LoginComponent/>
    )
}

const Router = (props) =>{    
    return (
        <Provider store={props.store}>
            <HashRouter>
                <div>                                      
                    <Switch>
                        <Route path="/" exact component={Root}/>
                        <Route path="/admin" name="admin" component={AdminComponent}/>
                    </Switch>
                </div>
            </HashRouter>
        </Provider>
    )
}

export default Router;
