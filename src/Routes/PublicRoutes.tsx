
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLogin, isLoginConsultant} from '../Utilities/utils'

const PublicRoute = ({component: Component, restricted , ...rest}: any) => {
    
    let routes = (
        <Route {...rest} render={props => (
            isLogin()  && restricted ?
            <Redirect to="/dashboardClient" />
            : <Component {...props} />
        )} />
    )

        if(isLoginConsultant()) {
            routes = (
                <Route {...rest} render={props => (
                    isLogin()  && restricted ?
                    <Redirect to="/dashboardFreelance" />
                    : <Component {...props} />
                )} />
            )
        }

    return (
       routes
    );
};

export default PublicRoute;