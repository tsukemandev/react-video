import * as React from "react";
import App from '../../App'
import Content from '../Content'
import Test from '../Test'
import * as ReactDOM from "react-dom/client";

import {loader as SideNavLoader} from '../SideNav'
import {loader as AppLoader} from '../../App'
import {loader as OAuthRedirectLoader} from '../OAuth_Redirect'


import {
    createBrowserRouter,
} from "react-router-dom";
import Contents from "../Contents";
import Error from "../Error";
import OAuthRedirect from "../OAuth_Redirect";
import News from "../News";
import Upload from "../Upload";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        loader: AppLoader,
    },
    {
        path: "/:category",
        element: <App/>,
        children: [
            {
                path: "/:category",
                element: <Contents/>,
            },
            {
                path: "/:category/video/:id",
                element: <Content/>,
            },
        ],
        loader: SideNavLoader
    },

    {
        path: "/news",
        element: <App/>,
        children: [
            {
                path: "/news",
                element: <News/>,
            },
        ],

    },
    /*{
        path: "/upload",
        element: <App/>,
        children: [
            {
                path: "/upload",
                element: <Upload></Upload>,
            },
        ],
    },
    {
        path: "/contact",
        element: <App/>,
        children: [
            {
                path: "/contact",
                element: <h1>아직 개발되지 않은 페이지 입니다.</h1>,
            },
        ],
    },
    {
        path: "/about",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <h1>아직 개발되지 않은 페이지 입니다.</h1>,
            },
        ],
    },*/
    {
        path: "/oauth/callback/:service",
        element: <OAuthRedirect/>,
        children: [
            {
                path: "/oauth/callback/:service",
                element: <OAuthRedirect/>,
            },
        ],
        loader: OAuthRedirectLoader,
    },

    {
        path: "/:menu/:id",
        element: <Test/>,
    },
]);

export default router;