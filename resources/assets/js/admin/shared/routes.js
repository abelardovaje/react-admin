import React from 'react';
import Loadable from 'react-loadable';
import DashBoardComponent from '../dashboard/DashboardComponent';
import PermissionContainer from '../permission/PermissionComtainer';
const routes = [
    {
        path:'/admin',
        exact:true,
        name:'Home',
        component:DashBoardComponent
    },
    {
        path:'/admin/permission',
        name:'permission',
        component:PermissionContainer
    }
]

export default routes;