import React,{useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import "./home.scss";
import Wine from '../../component/wine/Wine';
import { fetchHotTrendWine,fetchNewWine } from "../../redux";
import ScrollToTop from "../App/ScrollToTop";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const listWine = useSelector(state=>state.newWine);
    const hotTrendWine = useSelector(state=>state.hotWine);
    const user = useSelector(state => state.user.data)
    const dispatch= useDispatch();
    const { t } = useTranslation();
    useEffect(() => {
        if( user.Type !== 'admin'){
            dispatch(fetchHotTrendWine());
            dispatch(fetchNewWine())
        if(window.innerWidth >=1092){
            addSlide();
        }
        var x = window.matchMedia("(min-width: 992px)")
        x.addListener(screenTest)
        return () => {
            removeSlide();
            x.removeListener(screenTest);
        };
        }
    }, []);
    const screenTest = item =>{
        if (item.matches) {
            addSlide();
        } else {
            removeSlide();
        }
    }
    const addSlide = ()=>{
        document.getElementById("slide").style.cssText  = "display: block;position: relative;overflow: hidden;width: 100%;height: 100%;";
        document.querySelector("#slide + .container").classList.add("-sub");
    }
    const removeSlide = () =>{
            document.getElementById("slide").style.cssText="";
            document.querySelector("#slide + .container").classList.remove("-sub");
    }
    return (
        <>
            <ScrollToTop/>
            <section className="introduce">
                <div className="introduce__img"><img src="img/bg-1.jpg" /></div>
                <div className="introduce__img -right"><img src="img/bg-2.png" /></div>
                <div className="container">
                    <p className="introduce__title"> {t('header.menu.2')} </p><img className="introduce__sub" src="img/title-dark.png" />
                    <p className="introduce__detail"> {t('common.text5')}
                    </p><button className="introduce__btn">
                        <p> {t('common.readMore')} </p>
                    </button>
                </div>
            </section>
            <section className="productH">
                <div className="container">
                    <div className="productH__background"><img src="./img/bg-3.jpg" /></div>
                    <div className="productH__detail">
                        <div className="productH__img"> <img src="./img/14.jpg" />
                            <div className="productH__img-type">
                                <p> {t('common.new')} </p>
                            </div>
                        </div>
                        <div className="productH__info">
                            <p className="productH__info-title"> {t('common.ruouNho')} </p>
                            <div className="productH__info-img"><img src="./img/titleleft-dark.png" /></div>
                            <p className="productH__info-price"> {t('common.330')} <span>{t('common.d')} </span></p><button className="productH__info-btn">
                                {t('common.addToCart')} </button>
                            <p className="productH__info-desc"> {t('common.text6')} </p>
                            <div className="productH__info-time">
                                <div className="productH__info-time-date">
                                    <p> {t('common.334')} </p>
                                    <p> {t('common.days')} </p>
                                </div>
                                <div className="productH__info-time-date">
                                    <p> {t('common.26')} </p>
                                    <p> {t('common.hours')} </p>
                                </div>
                                <div className="productH__info-time-date">
                                    <p> {t('common.60')} </p>
                                    <p> {t('common.minutes')} </p>
                                </div>
                                <div className="productH__info-time-date">
                                    <p> {t('common.15')} </p>
                                    <p> {t('common.second')} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Wine listWine={listWine} title="san phẩm mới" />
            <section className="gallery">
                <div className="gallery__list">
                    <div className="gallery__img"> <img src="img/gl-1.jpg" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time"> {t('common.1987')} </p>
                            <p className="gallery__brand-name"> {t('common.ruou')} </p>
                        </div>
                    </div>
                    <div className="gallery__img"> <img src="img/gl-2.jpg" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time">{t('common.1987')}</p>
                            <p className="gallery__brand-name">{t('common.ruou')}</p>
                        </div>
                    </div>
                    <div className="gallery__img"> <img src="img/gl-3.png" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time">{t('common.1987')}</p>
                            <p className="gallery__brand-name">{t('common.ruou')}</p>
                        </div>
                    </div>
                    <div className="gallery__img"> <img src="img/gl-4.png" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time">{t('common.1987')}</p>
                            <p className="gallery__brand-name">{t('common.ruou')}</p>
                        </div>
                    </div>
                    <div className="gallery__img"> <img src="img/gl-5.png" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time">{t('common.1987')}</p>
                            <p className="gallery__brand-name">{t('common.ruou')}</p>
                        </div>
                    </div>
                    <div className="gallery__img"> <img src="img/gl-6.jpg" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time">{t('common.1987')}</p>
                            <p className="gallery__brand-name">{t('common.ruou')}</p>
                        </div>
                    </div>
                    <div className="gallery__img"> <img src="img/gl-7.png" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time">{t('common.1987')}</p>
                            <p className="gallery__brand-name">{t('common.ruou')}</p>
                        </div>
                    </div>
                    <div className="gallery__img"> <img src="img/gl-8.png" />
                        <div className="gallery__brand">
                            <p className="gallery__brand-time">{t('common.1987')}</p>
                            <p className="gallery__brand-name">{t('common.ruou')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Wine listWine={hotTrendWine} title="san phẩm xu hướng"/>
            <section className="block">
                <div className="container">
                    <div className="blog">
                        <p className="introduce__title"> {t('common.newAndBlog')} </p><img className="introduce__sub" src="img/title-dark.png" />
                        <div className="blog__list">
                            <div className="blog__item">
                                <div className="blog__item-img"> <img src="img/bl-1.jpg" />
                                    <p><i className="fas fa-link"></i></p>
                                </div>
                                <p className="blog__item-name"> {t('common.vangThang')} </p>
                                <div className="blog__item-sub"> <span className="blog__item-author"> {t('common.postBy')} {t('common.Giangle')} </span><span
                                        className="blog__item-time"> {t('common.30062015')} </span><span className="blog__item-comment">{t('common.60comment')}
                                    </span></div>
                                <p className="blog__item-content"> {t('common.text1')} </p><a
                                    className="blog__item-btn" href="#"> {t('common.readMore')} </a>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item-img"> <img src="img/bl-2.jpg" />
                                    <p><i className="fas fa-link"></i></p>
                                </div>
                                <p className="blog__item-name"> {t('common.vangThang')} </p>
                                <div className="blog__item-sub"> <span className="blog__item-author"> {t('common.postBy')} {t('common.Giangle')} </span><span
                                        className="blog__item-time"> {t('common.30062015')} </span><span className="blog__item-comment">{t('common.60comment')}
                                    </span></div>
                                <p className="blog__item-content"> {t('common.text1')} </p><a
                                    className="blog__item-btn" href="#"> {t('common.readMore')} </a>
                            </div>
                        </div>
                    </div>
                    <div className="customer">
                        <p className="introduce__title"> {t('common.customer')} </p><img className="introduce__sub" src="img/title-dark.png" />
                        <p className="customer__icon"> <i className="fas fa-quote-right"> </i></p>
                        <div className="customer__img"> <img src="./img/timthumb (2).jpg" /></div>
                        <p className="customer__name"> {t('common.Giangle')} </p>
                        <p className="customer__sub"> {t('common.graphicD')} </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;