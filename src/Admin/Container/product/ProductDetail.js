import React, {useEffect,useState,useRef} from 'react';
import { useLocation,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./productDetail.scss";
import productForm from "../../../common/form/productForm";
import formatDate from "../../../common/formatDate";
import { addNewProducts ,updateProducts } from "../../../redux";
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const history = useHistory();
    const [wine,setWine]=useState({
        Name: "",
        Price: 0,
        OldPrice: 0,
        Color: "",
        Decription: "",
        Img: "",
        Type: "",
        Status: "",
        NumberOfProducts:0,
        Rating: [],
        RatingScore: 0,
        Date:formatDate()
    });
    const [file,setFile] = useState(null)
    const [message,setMessage] = useState('');
    const refFile = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        if(location.type === 'update'){
            setWine(location.state.wine);
        }
    }, []);
    useEffect(() => {
        if(file !== null){
            setWine({
                ...wine,
                Img:file?file:''
            })
        }
    }, [file]);
    const onChangeFile = event =>{
        setFile(URL.createObjectURL(event.target.files[0]))
    }
    const onHandleChange =event =>{
        const target = event.target;
        let value =target.value;
        const checkFloat= /^[-+]?[0-9]*\.?[0-9]+$/g
        const name = target.name;
        if((name === 'Price' || name === 'OldPrice'|| name === 'NumberOfProducts')){
            if(checkFloat.test(value)){
                value=parseFloat(value)
            }
        }
            setWine({
                ...wine,
                [name]:value
            })
    }
    const onHandleSubmit = event =>{
        event.preventDefault();
        if(productForm(wine) !== true){
            setMessage(productForm(wine));
        }else{
            setMessage('')
            const formData =  new FormData();
            formData.append('file',refFile.current.files[0])
            if(location.type === 'add'){
                dispatch(addNewProducts(formData,wine));
            }else if( location.type === 'update'){
                if(file === null){
                    dispatch(updateProducts(formData,wine,false));
                }else{
                    dispatch(updateProducts(formData,wine,true));
                }
            }
            history.push('/product');
        }
    }
    return (
        <section className="admDetail">
            <div className="Container">
                <div className="admDetail__img">
                    {
                        wine.Img === '' ?
                        <img src={file ? file : process.env.PUBLIC_URL+'/img/no-img.png'} alt="" />
                        :
                        <img src={file?file:    process.env.PUBLIC_URL+wine.Img} alt="" />
                    }
                    <input id="admFile" type='file' ref={refFile} onChange={onChangeFile}  />
                    <label htmlFor="admFile">
                        {t('common.changeImage')}
                    </label>
                </div>
                <div className="admDetail__infor">
                    <h1> {t('common.productInformation')} </h1>
                    <form onSubmit={onHandleSubmit}>
                        <div className="admDetail__box">
                            <span>{t('common.name')} :</span> <input type="text" name="Name" value={wine.Name} onChange={onHandleChange}/>
                        </div>
                        <div className="admDetail__box">
                            <span>{t('common.newPrice')} :</span> <input type="text" name="Price" value={wine.Price} onChange={onHandleChange}/>
                        </div>
                        <div className="admDetail__box">
                            <span>{t('common.oldPrice')} :</span> <input type="text" name="OldPrice" value={wine.OldPrice} onChange={onHandleChange}/>
                        </div>
                        <div className="admDetail__box">
                            <span>{t('common.numberOfProduct')} :</span> <input type="text" name="NumberOfProducts" value={wine.NumberOfProducts} onChange={onHandleChange}/>
                        </div>
                        <div className="admDetail__box">
                            <span>{t('common.color')} :</span>
                            <select name="Color" value={wine.Color} onChange={onHandleChange} >
                                <option value=''></option>
                                <option value='black'>{t('common.black')}</option>
                                <option value='green'>{t('common.green')}</option>
                                <option value='yellow'>{t('common.yellow')}</option>
                                <option value='red'>{t('common.red')}</option>
                            </select>
                        </div>
                        <div className="admDetail__box">
                            <span>{t('common.status')} :</span>
                            <select name="Status" value={wine.Status} onChange={onHandleChange}>
                                <option value=''></option>
                                <option value='New'>{t('common.new')}</option>
                                <option value='Hot'>{t('common.hot')}</option>
                                <option value='Sale'>{t('common.sale')}</option>
                            </select>
                        </div>
                        <div className="admDetail__box">
                            <span>{t('common.type')} :</span>
                            <select name="Type" value={wine.Type} onChange={onHandleChange}>
                                <option value=''></option>
                                <option value='Chivas'>{t('common.chivas')}</option>
                                <option value='Johnnie Walker'>{t('common.johnnieWalker')}</option>
                                <option value='Whisky'>{t('common.whisky')}</option>
                                <option value='Glenmorangie'>{t('common.glenmorangie')}</option>
                            </select>
                        </div>
                        <div className="admDetail__box">
                            <span>{t('common.description')} :</span>
                            <textarea name="Decription" value={wine.Decription} onChange={onHandleChange}>
                            </textarea>
                        </div>
                        <p className="admDetail__message">{message ==="" ?"":"! "+message} </p>
                        <div className="admDetail__btn">
                            <input type="submit" value={t('common.save')} />
                            <button onClick={()=> history.goBack()}>
                                {t('common.no')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;