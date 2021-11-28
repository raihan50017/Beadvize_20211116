
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLoginConsultant} from '../Utilities/utils'

const ConsultantPrivateRoutes = ({component: Component, ...rest}:any) => {
    return (
        <Route {...rest} render={props => (
        isLoginConsultant() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default ConsultantPrivateRoutes;