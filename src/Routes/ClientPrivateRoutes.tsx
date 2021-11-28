
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLoginClient} from '../Utilities/utils'

const ClientPrivateRoutes = ({component: Component, ...rest}:any) => {

    return (
        <Route {...rest} render={props => (
            isLoginClient() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default ClientPrivateRoutes;