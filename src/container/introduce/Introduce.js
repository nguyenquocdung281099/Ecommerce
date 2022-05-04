import React from 'react';
import './introduce.scss';
import { useTranslation } from 'react-i18next';

const Introduce = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="poster">
                <div className="container">
                    <p className="poster__title"> {t('header.menu.0')} / <span>{t('header.menu.2')}</span></p>
                    <p className="poster__name">{t('header.menu.2')} </p><img src="img/titleleft-dark.png" alt="" />
                </div>
            </section>
            <section className="introduceP">
                <div className="container">
                    <div className="introduceP__img"> <img src="./img/bg-3.jpg" alt="" /></div>
                    <div className="introduceP__content">
                        <p className="introduceP__content-name"> {t('common.welcome')} </p>
                        <p className="introduceP__content-text"> <span> {t('common.text3')} </span></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Introduce;