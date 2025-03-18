import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Clients = () => {
  const match = useRouteMatch(); // Get the match object for nested routes

    return (
    <Suspense fallback={<Loading cover="content"/>}>
        <Switch>
        {/* Redirect from /clients to /clients/profile */}
        <Redirect exact from={`${match.url}`} to={`${match.url}/clientsList`} />
        
        {/* Lazy load the clientsList route */}
        <Route path={`${match.url}/clientsList`} component={lazy(() => import(`./clientsList/index.js`))} />
        </Switch>
    </Suspense>
    );
};

export default Clients;
