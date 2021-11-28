import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLogin} from '../Utilities/utils'

const PrivateRoutes = ({component: Component, ...rest}:any) => {

    

    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoutes;