import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { FacebookProvider, ShareButton  } from 'react-facebook';
import { HOST } from "../../common/host";
import Rating from "../../component/rating/Rating";
import RatingN from "../../component/rating/RattingN";
import { showLoginNowModal } from "../../modal/loginNowModal/LoginNowModal";
import { addToCart } from "../../common/mixin";
import { rattingOfUser,rattingProduct } from "../../redux";
import { useTranslation } from 'react-i18next';

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [max,setMax] = useState(0)
    const onIncrease = () => count === max ? setCount(max) : setCount(count + 1);
    const onDecrease = () => count <= 1 ? setCount(1) : setCount(count - 1);
    return [ count, onIncrease, onDecrease,setCount, setMax ];
};

const InforProduct = ({location,wine}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {status,data} = useSelector(state=> state.user)
    const [score, setScore] = useState(0);
    const [ count, onIncrease, onDecrease,setCount,setMax ] = useCounter();
    useEffect(() => {
        if(wine.NumberOfProducts){
            setMax(wine.NumberOfProducts)
        }
    }, [wine])
    useEffect(() => {
        if(score !== 0){
            dispatch(rattingOfUser({
                idWine:wine.id,
                score
            }))
            dispatch(rattingProduct({
                idUser:data.id,
                score
            }))
        }
    }, [score]);
    const onHandleRating = value =>{
        if(!status){
            showLoginNowModal();
        }else{
            setScore(value)
        }
    }
    const onHandleClick = () =>{
        addToCart(status,dispatch,wine.id,count)
    }
    return (
        <section className="detail">
            <div className="container">
                <div className="detail__box">
                    <div className="detail__img"> <img src={process.env.PUBLIC_URL+wine.Img} alt="" /></div>
                </div>
                <div className="detail__info">
                    <p className="detail__info-name">{wine.Name} </p><img src="./img/titleleft-dark.png" />
                    <p className="detail__info-price">{ Number(wine.Price).toFixed(3)} <span>đ </span></p>
                        <div className="detail__info-star">
                            {RatingN(wine.RatingScore ? wine.RatingScore :0)}<span>{wine.Rating ? wine.Rating.length:0} {t('common.review')} </span>
                        </div>
                    <p className="detail__info-title"> {t('common.color')} </p>
                    <div className="detail__info-color">
                        <div className="detail__info-color-box" style={{backgroundColor:wine.Color}}> </div>
                    </div>
                    <p className="detail__info-title"> {t('common.amount')} </p>
                    <div className="detail__info-number">
                        <div>
                            <button onClick={onDecrease}><i className="fas fa-minus"> </i></button>
                                <input type="text" value={count} readOnly />
                            <button onClick={onIncrease}><i className="fas fa-plus"> </i></button>
                        </div>
                        <button onClick={onHandleClick } > {t('common.addToCart')} </button>
                    </div>
                    <p className="detail__info-sub">{t('common.remainingProducts')} : {wine.NumberOfProducts} </p>
                    <p className="detail__info-title"> {t('common.yourRatting')} </p>
                    <div className="detail__info-icon">
                        {Rating(score,onHandleRating)}
                    </div>
                    <FacebookProvider appId="2874781262637664">
                        <ShareButton className="detail__info-share" href={HOST+location.pathname}>
                            <i className="fab fa-facebook-f"></i><span> {t('common.share')} </span>
                        </ShareButton>
                    </FacebookProvider>
                    <p className="detail__info-title"> {t('common.description')}  </p>
                    <p className="detail__info-content"> {wine.Decription} </p>
                </div>
            </div>
        </section>
    );
}

export default InforProduct;