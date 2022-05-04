import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  logout,fetchCart } from "../../redux";
import HeaderCartItem from './HeaderCartItem';
import { useTranslation } from 'react-i18next';

const HeaderUser = ({user,carts}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const handleLogout =  () =>{
        dispatch(logout())
        window.location.href="/"
    }
    useEffect(() => {
        if(user.status){
            dispatch(fetchCart(user.data.Cart))
        }
    }, [user,dispatch]);
    const showUser = () => {
        if(user.status){
            return (
                <>
                    <div className="header__user"  >
                        <img src ={process.env.PUBLIC_URL+"/img/user.png"} alt=""/>
                        <ul>
                            <li> <Link to="/profile"> {t('common.personalInformation')} </Link></li>
                            <li> <Link to="/recentView">{t('common.recentView')}</Link></li>
                            <li> <Link to="/listOrder">{t('common.transactionHistory')}</Link></li>
                            <li> <button onClick={handleLogout}> {t('header.sub.6')} </button></li>
                        </ul>
                    </div>
                    <div className="header__cart">
                        <i className="fas fa-shopping-cart"></i>
                        <p>
                            <span>
                                {
                                    carts.length !== 0 ? carts.map(x => x.amount).reduce((a,b)=>a+b) :0
                                }
                            </span></p>
                        <div className="header__bag">
                            <p className="header__bag-title">{t('common.bag')}</p>
                            <div className="header__list">
                                {
                                    carts.length !==0 ? carts.map( cart => <HeaderCartItem key={cart.id} cart={cart} />) : <img className='header__list-subimg' src={process.env.PUBLIC_URL+'/img/not.png'}/>
                                }
                            </div>
                            {
                                carts.length !==0 ? <Link to="/cartDetail"> {t('common.viewBag')} </Link> : <p className="header__bag-title">{t('common.noProduct')}</p>
                            }
                        </div>
                    </div>
                </>
            )
        }
        return <div> </div>
    }
    return (
        <>
            {showUser()}
        </>
    );
}

export default HeaderUser;