import React from 'react';
import "./error.scss";
import { useTranslation } from 'react-i18next';

const Error = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="error">
                <div className="error__box">
                    <div className="error__box-img"> <img src={process.env.PUBLIC_URL+"/img/error.png"} alt="" /></div>
                    <div className="error__box-number"> <img src={process.env.PUBLIC_URL+"/img/error-2.png"} alt="" /></div>
                    <p className="error__box-text"> {t('common.loi')} </p>
                    <p className="error__box-sub"> {t('common.dayK')} </p>
                    <p className="error__box-title"> {t('common.trangW')} </p>
                </div>
            </section>
        </>
    );
}

export default Error;