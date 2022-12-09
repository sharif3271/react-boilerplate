import React from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { RoutesModel, } from 'src/models';
import {
    NotFound, Home
} from 'src/components';
import { PrivateRoute } from './PrivateRoutes';

export function AppRoutes() {
    return (
        <Routes>
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>

                {/* Redirect Root to Home */}
                <Route path='/' element={ <Navigate to={RoutesModel.home} />}/>

                {/* Home */}
                <Route path={RoutesModel.home} element={<Home />} />
            </Route>

            {/* no match (404) */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    );
}
