import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import AddMoney from "../Pages/AddMoney/AddMoney";
const Router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/AddMoney",
            element:<AddMoney/>
        },
        {
            path:'/UpdateMoney/:Id',
            element:<AddMoney/>
        },
    ]
)
export default Router