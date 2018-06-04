import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import DefaultHeader from './layout/DefaultHeader';
import DefaultFooter from './layout/DefaultFooter';
import navigation from './shared/_nav';
import routes from './shared/routes'
import './admin.scss';
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';

const AdminComponent = (props) =>{
    return (
        <div className="app">
            <AppHeader fixed>
                {/* <DefaultHeader/> */}
            </AppHeader>
            <div className="app-body">
                <AppSidebar fixed display="lg">
                    <AppSidebarHeader />
                    <AppSidebarForm />
                    <AppSidebarNav navConfig={navigation} {...props} />
                    <AppSidebarFooter />
                    <AppSidebarMinimizer />
                </AppSidebar>
                <div className="main">
                    <AppBreadcrumb appRoutes={routes}/>
                    <Container fluid>
                        <Switch>
                            {routes.map((route,idx)=>{
                                return route.component ? (
                                    <Route key={idx} path={route.path} exact ={route.exact} 
                                    name={route.name} render={props =>(
                                        <route.component {...props}/>
                                    )}/>):(null);                          
                            })}  
                            <Redirect from="/admin" to="/admin/dashboard" />                     
                        </Switch>
                      
                    </Container>                  
                </div>
            </div>
            <AppFooter>
               {/* <DefaultFooter/> */}
            </AppFooter>
        </div>
    )
}

export default AdminComponent;