import React from 'react';
import {Provider} from 'react-redux';
import Loadable from 'react-loadable';
// import AdminComponent from './admin/adminComponent';
import Login from './login';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

const AdminComponent = Loadable({
    loader:() => import('./admin/adminComponent'),
    loading(){
        return <div>Loading..</div>
    }
});

const Root = () =>{
    return (
       <Login/>
    )
}

const Router = (props) =>{
    return (
        <Provider store={props.store}>
            <BrowserRouter>
                <div>                                      
                    <Switch>
                        <Route path="/" exact component={Root}/>
                        <Route path="/admin" name="admin" exact component={AdminComponent}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default Router;
