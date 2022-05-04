import React from 'react'
import "./footer.scss";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="container"> <img className="logo" src={process.env.PUBLIC_URL+'/img/logo.png'} />
                <div className="contact-us">
                    <div className="contact-us__item">
                        <p className="contact-us__item-title"> {t('footer.info.0')} </p><a href="#"> {t('footer.info.1')}  </a><a href="#">
                        {t('footer.info.2')} </a><a href="#"> {t('footer.info.3')}  </a><a href="#"> {t('footer.info.4')}  </a><a href="#"> {t('footer.info.5')}  </a>
                    </div>
                    <div className="contact-us__item">
                        <p className="contact-us__item-title">  {t('footer.buy.0')} </p><a href="#">{t('footer.buy.1')}</a><a href="#">
                        {t('footer.buy.2')}</a><a href="#">{t('footer.buy.3')}</a><a href="#">{t('footer.buy.4')}</a><a href="#">
                        {t('footer.buy.5')}</a>
                    </div>
                    <div className="contact-us__item">
                        <p className="contact-us__item-title">{t('footer.send.0')}</p>
                        <p>{t('footer.buy.1')}</p>
                        <div className="contact-us__item-send"><input type="text"
                                placeholder="Enter your email" /><button>{t('common.send')}</button></div>
                        <div className="contact-us__item-social"> <a href="#"><i className="fab fa-twitter"> </i></a><a href="#"><i
                                    className="fab fa-google-plus-g"></i></a><a href="#"><i className="fab fa-chrome"> </i></a><a
                                href="#"><i className="fab fa-linkedin-in"> </i></a><a href="#"><i className="fas fa-wifi"></i></a>
                        </div>
                    </div>
                    <div className="contact-us__item">
                        <p className="contact-us__item-title">{t('footer.contact.0')}</p>
                        <p> <i className="fas fa-map-marker-alt"></i><span>{t('footer.contact.1')}</span></p>
                        <p><i className="fas fa-phone-alt"></i><span>{t('footer.contact.2')}</span><span
                                className="contact-us__item-break">-</span><i className="fas fa-phone-alt"></i><span>{t('footer.contact.3')}</span></p>
                        <p><i className="fas fa-phone-alt"></i><span>{t('footer.contact.4')}</span><i
                                className="fas fa-envelope contact-us__item-envelope"></i><span
                                className="contact-us__item-email">{t('footer.contact.5')}</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}