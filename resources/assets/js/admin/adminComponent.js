import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import DefaultHeader from './layout/DefaultHeader';
import DefaultFooter from './layout/DefaultFooter';
import navigation from './_nav';
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
                <DefaultHeader/>
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
                    Body
                </div>
            </div>
            <AppFooter>
               <DefaultFooter/>
            </AppFooter>
        </div>
    )
}

export default AdminComponent;