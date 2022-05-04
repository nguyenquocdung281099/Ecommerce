import React, {useRef} from "react";
import "./header.scss";
import SubMenu from "./SubMenu";
import HeaderUser from "./HeaderUser";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const toggleMenu = useRef(null);
    const user =useSelector(state => state.user);
    const carts =useSelector(state => state.carts);
    const { t } = useTranslation();
    const showMenu = () =>{
        toggleMenu.current.classList.toggle("menuToggle");
    }
return (
    <header>
    <SubMenu user={user}/>
    <nav className="header">
        <div className="container">
        <div className="header__menu">
            <div className="brand">
                <img className="brand__background" src="../img/brand.png" alt="" />
                <p className="brand__name"> {t('common.wineHourse')} </p>
                <p className="brand__sub">{t('common.since1980')} </p>
                <img className="brand__deer" src="../img/deer.png" alt="" />
            </div>
            <div className="menu" ref={toggleMenu}>
                <NavLink exact to="/" activeClassName="activeMenu" >
                    <span>{t('header.menu.0')}</span>
                </NavLink>
                <NavLink to="/product/1" activeClassName="activeMenu">
                    <span>{t('header.menu.1')}</span>
                </NavLink>
                <NavLink to="/introduce" activeClassName="activeMenu">
                    <span>{t('header.menu.2')}</span>
                </NavLink>
                <NavLink to="/suggestProduct" activeClassName="activeMenu">
                    <span>{t('common.yourSussgest')}</span>
                </NavLink>
            </div>
            <HeaderUser user={user} carts={carts}/>
            <button className="header__menu-btn" onClick = {showMenu}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
        </div>
    </nav>
    </header>
);
};

export default Header;