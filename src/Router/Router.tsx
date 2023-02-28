import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
const Login = React.lazy(() => import('../components/Page/Login'));
const Register = React.lazy(() => import('../components/Page/Register'));
const Home = React.lazy(() => import('../components/Page/Home'));
const DashboardStudent = React.lazy(() => import('../view/dashboard/Student'));
const DashboardTeacher = React.lazy(() => import('../view/dashboard/Teacher'));

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Navigate replace to={'/home'} />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/home',
            element: <Home />,
            children: [
                {
                    index: true,
                    element: <h3>Home</h3>,
                },
                {
                    path: 'student',
                    element: <DashboardStudent />,
                },
                {
                    path: 'teacher',
                    element: <DashboardTeacher />,
                },
            ],
        },
        {
            path: '/register',
            element: <Register />,
        },
        {
            path: '*',
            element: <h3>Not found</h3>,
        },
    ]);

    return routes;
};

export default Router;
