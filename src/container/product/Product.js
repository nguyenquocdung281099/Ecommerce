import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import  "./product.scss";
import WineP from '../../component/wine/WineP';
import { fetchProduct,getPageAmount } from "../../redux";
import Pagination from '../../component/product/Pagination';
import ProductType from '../../component/product/ProductType';
import ProductColor from '../../component/product/ProductColor';
import ProductRate from '../../component/product/ProductRate';
import ProductSort from '../../component/product/ProductSort';
import { useTranslation } from 'react-i18next';

const Product = () => {
    const { t } = useTranslation();
    const [number, setNumber] = useState(0);
    const [page,setPage] = useState(0);
    const [type,setType] = useState('');
    const [color,setColor] = useState('');
    const [rate,setRate] = useState(0);
    const [sort,setSort] = useState(0);
    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector( state => state.product);
    useEffect(() => {
        dispatch(fetchProduct(params.page,type,color,rate))
        getNumber(type,color,rate);
        setPage(Number(params.page));
    }, [params,type,color,rate]);
    const getNumber  = async (x,y,z) =>{
        const result = await  getPageAmount(x,y,z);
        setNumber(result);
    }
    return (
        <>
            <section className="poster">
                <div className="container">
                    <p className="poster__title">{t('header.menu.0')} / {t('header.menu.4')} / <span> {t('header.menu.1')} </span></p>
                    <div className="poster__img -product"><img src={process.env.PUBLIC_URL+'/img/slide-3.jpg'} alt="" /></div>
                </div>
            </section>
            <section className="product">
                <div className="container">
                    <div className="product__option">
                        <div className="product__select">
                            <p className="product__title"> {t('common.productP')} </p>
                            <div className="product__icon"><img src={process.env.PUBLIC_URL+'/img/titleleft-dark.png'} alt="" /></div>
                            <ProductType  type={type} setType={setType}/>
                        </div>
                        <ProductColor color={color} setColor={setColor} />
                        <ProductRate rate={rate} setRate={setRate}/>
                        <div className="product__advertisement">
                            <div className="product__advertisement-img">
                                <img src={process.env.PUBLIC_URL+'/img/lf-1.jpg'} alt="" />
                                <img className="product__advertisement-under" src={process.env.PUBLIC_URL+'/img/bg-4.jpg'} alt="" />
                                <div className="product__advertisement-name"> {t('common.ruouVang')} </div>
                                <div className="product__advertisement-type">  {t('common.do')} </div>
                                <div className="product__advertisement-time"> {t('common.1980')} </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__display">
                        <div className="product__box">
                            <ProductSort sort={sort} setSort={setSort}/>
                            <Pagination page={page} number={number}/>
                        </div>
                        <div className="product__display-list">
                            <WineP
                                products={
                                    sort === 0 ? products :sort === 1 ?  [...products].sort((a,b)=> b.Price - a.Price):[...products].sort((a,b)=> a.Price - b.Price)
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;