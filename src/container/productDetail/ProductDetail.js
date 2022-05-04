import React,{useEffect} from 'react';
import { useLocation,useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import "./productDetail.scss";
import { FacebookProvider, Comments  } from 'react-facebook';
import { HOST } from "../../common/host";
import InforProduct from '../../component/productDetail/InforProduct';
import { fetchWine } from "../../redux";
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const  wine = useSelector(state => state.wine);
    const dispatch = useDispatch();
    const {id} =  useParams()
    useEffect(() => {
        dispatch(fetchWine(id))
        const fb= document.querySelector('.fb-comments');
        fb.setAttribute('data-width','100%')
    }, [dispatch,id]);
    return (
        <>
            <section className="poster">
                <div className="container">
                    <p className="poster__title">{t('header.menu.0')} / {t('header.menu.4')} / <span> {t('header.menu.1')}</span></p>
                </div>
            </section>
            <InforProduct location={location} wine={wine}/>
            <section className="facebook">
                <div className="container">
                <FacebookProvider  appId="2874781262637664">
                        <Comments  href={HOST+location.pathname}  />
                </FacebookProvider>
                </div>
            </section>
        </>
    );
}

export default ProductDetail;