import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavLink} from 'react-router-dom';
import {login} from './actions';
class Login extends React.Component{
    render(){
        return(
            <div>Login component <NavLink to ="/admin">Admin</NavLink></div>
        )
    }
}



function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        login
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);