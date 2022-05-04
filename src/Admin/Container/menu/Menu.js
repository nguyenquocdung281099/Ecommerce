import React,{useRef,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import './menu.scss';
import { fetchAllOrder,fetchAllProduct,fetchAllUser,fetchListOrder } from "../../../redux";
import { useTranslation } from 'react-i18next';

const Menu = ({children}) => {
    const { t } = useTranslation();
    const toggle =useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllOrder());
        dispatch(fetchAllProduct());
        dispatch(fetchAllUser());
        dispatch(fetchListOrder());
    }, []);
    const onHandleClick = event  =>{
        toggle.current.classList.toggle('menuToggle')
    }
    const onHandleLogOut = event =>{
        event.preventDefault();
        localStorage.setItem('user','');
        window.location.href="/"
    }
    return (
        <>
            <div className="admin-header__brand">
                <h1> {t('common.admin')} </h1>
                <i className="fa fa-bars" onClick={onHandleClick}></i>
            </div>
            <div className="admin-header__menu">
                <ul ref={toggle} >
                    <li>
                        <NavLink to = "/admin" activeClassName="admActive">
                            <i className="fas fa-th-list"></i>
                            {t('common.dashboard')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/user" activeClassName="admActive">
                            <i className="fas fa-users"></i>
                            {t('common.user')}
                        </NavLink></li>
                    <li>
                        <NavLink to = "/product" activeClassName="admActive">
                            <i className="fas fa-wine-glass-alt"></i>
                            {t('header.menu.4')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/order" activeClassName="admActive">
                            <i className="fas fa-pen-square"></i>
                            {t('header.menu.5')}
                        </NavLink></li>
                    <li>
                        <NavLink to = "/admin" onClick={onHandleLogOut}  >
                            <i className="fas fa-sign-out-alt"></i>
                            {t('header.sub.6')}
                        </NavLink></li>
                </ul>
                <div className="admin-header__content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Menu;