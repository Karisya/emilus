import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
// import EditProfile from "../clients/editProfile/index"


const EditProfile = lazy(() => import("../clients/editProfile"));
const Clients = () => {
    const match = useRouteMatch(); 

    return (
    <Suspense fallback={<Loading cover="content"/>}>
        <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}/clientsList`} />
        
        <Route path={`${match.url}/clientsList`} component={lazy(() => import(`./clientsList/index.js`))} />
        <Route path={`${match.url}/editProfile/:id`} component={EditProfile} />
        </Switch>
    </Suspense>
    );
};

export default Clients;
