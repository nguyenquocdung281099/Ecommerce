import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SubMenu = ({user}) => {
    const { t } = useTranslation();
    const checkStatus = ()=>{
        if(user.status){
            return <p className='submenu__name'>{`Hello : ${user.data.FirstName} ${user.data.LastName}`}</p>
        }
        return (
            <>
                <p><Link to="/login"> {t('header.sub.0')} </Link></p><span>-</span>
                <p><Link to="/signup">{t('header.sub.1')}</Link></p>
            </>
        )
    }
    return (
        <div className="contact-menu">
            <div id="slide">
                <img src={process.env.PUBLIC_URL+'/img/slide-1.jpg'} alt="" />
                <div className="container -letter">
                </div>
                <p className="contact-menu__name">{t('header.sub.3')}</p>
                <p className="contact-menu__sub">{t('header.sub.4')}</p>
                <p className="contact-menu__time">{t('header.sub.5')}</p>
            </div>
            <div className="container ">
                    <div className="submenu">
                        {checkStatus()}
                    </div>
                    <div className="contact-menu__search"><input type="text" placeholder="Tìm kiếm ở đây ..." /><i
                            className="fas fa-search"></i></div>
            </div>
        </div>
    );
}

export default SubMenu;