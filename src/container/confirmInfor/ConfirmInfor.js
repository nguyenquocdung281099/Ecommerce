import React, {useEffect,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import  "./confirmInfor.scss";
import checkForm from "../../common/form/checkForm";
import GolbalModal,{showGolbalModal} from "../../modal/golbalModal/GolbalModal";
import { purchaseSussess } from "../../redux";
import { useTranslation } from 'react-i18next';

const ConfirmInfor = () => {
    const { t } = useTranslation();
    const user = useSelector(state => state.user)
    const dispatch= useDispatch();
    const [message, setMessage] = useState('');
    const {totalPrice}= useParams();
    const [profile, setProfile] = useState({
        id:"",
        FirstName:"",
        LastName:"",
        Email:"",
        Address:"",
        City:"",
        Phone:""
    })
    useEffect(() => {
        if( user.status) {
            const {data} =user
            setProfile({
                id:data.id,
                FirstName:data.FirstName,
                LastName:data.LastName,
                Email:data.Email,
                Address:data.Address,
                City:data.City,
                Phone:data.Phone,
            });
        }
    }, [user]);
    const onSubmitForm = event  =>{
        event.preventDefault();
        const check = checkForm(profile)
        if(check !== true){
            setMessage(check);
        }else{
            dispatch(purchaseSussess(profile,totalPrice,user.data.Cart))
            showGolbalModal();
        }
    }
    const onHandleChange = event =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        setProfile({
            ...profile,
            [name]: target.type === "checkbox" ? target.checked : value
        });
    }
    const onMove = () =>{
        showGolbalModal();
        window.location.href='/'
    }
    return (
        <section className="confirm">
            {GolbalModal("Thanh toán thành công","Ok",onMove)}
            <div className="container">
                <h1> {t('common.confirmInformation')} </h1>
                <div className="confirm__infor">
                    <form className='confirm__form' onSubmit={onSubmitForm}>
                        <h2>{t('common.yourInformation')} :</h2>
                        <div className="confirm__box">
                            <p> {t('common.email')} </p><input type="text" name='Email' value={profile.Email} onChange={onHandleChange} readOnly  />
                        </div>
                        <div className="confirm__box">
                            <p> {t('common.firstName')} </p><input type="text" name="FirstName" value={profile.FirstName} onChange={onHandleChange}  />
                        </div>
                        <div className="confirm__box">
                            <p> {t('common.lastName')} </p><input type="text" name="LastName" value={profile.LastName} onChange={onHandleChange} />
                        </div>
                        <div className="confirm__box">
                            <p> {t('common.address')} </p><input type="text" name="Address" value={profile.Address} onChange={onHandleChange} />
                        </div>
                        <div className="confirm__box">
                            <p> {t('common.city')} </p>
                            <select name="City" value={profile.City} onChange={onHandleChange}>
                                <option></option>
                                <option value="Da Nang"> {t('common.daNang')} </option>
                                <option value="Ha Noi"> {t('common.haNoi')} </option>
                                <option value="Ho Chi Minh"> {t('common.hoChiMinh')} </option>
                            </select>
                        </div>
                        <div className="confirm__box">
                            <p> {t('common.phone')} </p><input type="text" name="Phone" value={profile.Phone} onChange={onHandleChange} />
                        </div>
                        <div></div><p className="address__input-message">{message ==="" ?"":"! "+message}</p>
                        <div className="address__button">
                            <input type="submit" className="address__button-btn" value="Confirm"/>
                        </div>
                    </form>
                    <div className="confirm__infor-price">
                        <h2> {t('common.theAmountYou')}:</h2>
                        <p><i className="fas fa-dollar-sign">
                            {totalPrice}
                        </i></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConfirmInfor;