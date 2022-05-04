import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "./Admin/Container/dashboard/Dashboard";
import Product from "./Admin/Container/product/Product";
import ProductDetail from "./Admin/Container/product/ProductDetail";
import Order from "./Admin/Container/order/Order";
import User from "./Admin/Container/user/User";
import UserDetail from "./Admin/Container/user/UserDetail";

    const router = [
        {
            path:"/",
            exact:true,
            main : () => <Dashboard/>
        },
        {
            path:"/admin",
            main : () => <Dashboard/>
        },
        {
            path:"/product",
            exact:true,
            main : () => <Product/>
        },
        {
            path:"/product/:id/",
            main : () => <ProductDetail/>
        },
        {
            path:"/order",
            main : () => <Order/>
        },
        {
            path:"/user",
            exact:true,
            main : () => <User/>
        },
        {
            path:"/user/:id",
            main : () => <UserDetail/>
        },
        {
            path:"*",
            main : () => <h1>nothing</h1>
        },
    ]

export default router;