import React from 'react';
import { useTranslation } from 'react-i18next';

const IntroduceDashboard = ({data}) => {
    const { t } = useTranslation();
    return (
        <div className="dashboard__list">
            <div className="dashboard__introduce">
                <div className="dashboard__introduce-infor">
                    <p> {t('common.totalUser')} </p>
                    <h1>  {data.listUser.length} </h1>
                </div>
                <p className="dashboard__introduce-icon">
                    <i className="fas fa-users"></i>
                </p>
            </div>
            <div className="dashboard__introduce">
                <div className="dashboard__introduce-infor">
                    <p>{t('common.totalProducts')}</p>
                    <h1>{data.products.length}</h1>
                </div>
                <p className="dashboard__introduce-icon">
                    <i className="fas fa-wine-glass-alt"></i>
                </p>
            </div>
            <div className="dashboard__introduce">
                <div className="dashboard__introduce-infor">
                    <p>{t('common.totalOrders')}</p>
                    <h1>{data.orders.length}</h1>
                </div>
                <p className="dashboard__introduce-icon">
                    <i className="fas fa-shopping-bag"></i>
                </p>
            </div>
            <div className="dashboard__introduce">
                <div className="dashboard__introduce-infor">
                    <p>{t('common.totalMoney')}</p>
                    <h1><i className="fas fa-dollar-sign">
                        {
                            data.orders.length !==0 ? data.orders.map(x => parseInt(x.TotalPrice)).reduce( (a,b)=>(a+b)).toFixed(3):''
                        }
                    </i></h1>
                </div>
                <p className="dashboard__introduce-icon">
                    <i className="far fa-money-bill-alt"></i>
                </p>
            </div>
        </div>
    );
}

export default IntroduceDashboard;