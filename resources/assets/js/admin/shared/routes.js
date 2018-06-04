import React from 'react';
import Loadable from 'react-loadable';
import DashBoardContainer from '../dashboard/DashboardContainer';
import PermissionContainer from '../permission/PermissionContainer';
import OrganizationContainer from '../organization/OrganizationContainer';
import AdminComponent  from '../AdminComponent.js';
const routes = [
    {
        path:'/admin',
        exact:true,
        name:'Home',
        component:AdminComponent
    },
    {
        path:'/admin/dashboard',
        name:'Dashboard',
        component:DashBoardContainer
    },
    {
        path:'/admin/permission',
        name:'Permission',
        component:PermissionContainer
    },
    {
        path:'/admin/organization',
        name:'Organization',
        component:OrganizationContainer
    }
]

export default routes;