import React from "react";
import Home from "./container/Home/Home";
import Introduce from "./container/introduce/Introduce";
import Login from "./container/login/Login";
import Signup from "./container/signup/Signup";
import Profile from "./container/profile/Profile";
import Product from "./container/product/Product";
import ProductDetail from "./container/productDetail/ProductDetail";
import CartDetail from "./container/cartDetail/CartDetail";
import RecentView from "./container/recentView/RecentView";
import SuggestProdut from "./container/suggestProduct/SuggestProdut";
import ConfirmInfor from "./container/confirmInfor/ConfirmInfor";
import ListOrder from "./container/listOrder/ListOrder";
import Error from "./container/error/Error";
import { Redirect } from "react-router-dom";

const router = (status) =>{
    return [
        {
            path:"/",
            exact:true,
            main : () => <Home/>
        },
        {
            path:"/introduce",
            main : () => <Introduce/>
        },
        {
            path:"/login",
            main : () => status ? <Redirect to="/" />:<Login/>
        },
        {
            path:"/signup",
            main : () => <Signup/>
        },
        {
            path:"/profile",
            main : () => status ?  <Profile/> : <Redirect to="/login" />
        },
        {
            path:"/product/:page",
            main : () => <Product/>
        },
        {
            path:"/productDetail/:id",
            main : () => <ProductDetail/>
        },
        ,
        {
            path:"/cartDetail",
            main : () => status ? <CartDetail/> : <Redirect to="/login" />
        },
        {
            path:"/recentView",
            main : () => status ? <RecentView/> : <Redirect to="/login" />
        },
        {
            path:"/suggestProduct",
            main : () => <SuggestProdut/>
        },
        {
            path:"/confirmInfor/:totalPrice",
            main : () => status ? <ConfirmInfor/> :<Redirect to="/login" />
        },
        {
            path:"/listOrder",
            main : () => status ? <ListOrder/> : <Redirect to="/login" />
        },
        {
            path:"*",
            main : () => <Error/>
        },
    ]

}

export default router;