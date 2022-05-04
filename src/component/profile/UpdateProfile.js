import React, {useState} from 'react';
import  updateForm  from "../../common/form/updateForm";
import { useTranslation } from 'react-i18next';

const UpdateProfile = ({profile,setProfile,setModal}) => {
    const [message,setMessage] = useState("");
    const { t } = useTranslation();
    const onHandleChange = event =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        setProfile({
            ...profile,
            [name]: target.type === "checkbox" ? target.checked : value
        });
    }
    const onSubmitForm = event =>{
        event.preventDefault();
        setModal({
            type:"updateProfile",
            string:"Are you sure you want to update profile ?"
        })
        const check = updateForm(profile)
        if(check !== true){
            setMessage(check);
        }else{
            document.getElementById("UpdateModal").classList.toggle('toggleSignupModal')
        }
    }
    return (
        <div className="address__item">
            <p className="address__item-title"> {t('common.personalInformation')} </p>
            <div className="address__input">
                <form onSubmit={onSubmitForm}>
                        <p>{t('common.email')}</p><input type="text" name='Email' value={profile.Email} readOnly  />
                        <p>{t('common.firstName')}</p><input type="text" name="FirstName" value={profile.FirstName} onChange={onHandleChange}  />
                        <p>{t('common.lastName')}</p><input type="text" name="LastName" value={profile.LastName} onChange={onHandleChange} />
                        <p>{t('common.address')}</p><input type="text" name="Address" value={profile.Address} onChange={onHandleChange} />
                        <p>{t('common.city')}</p>
                        <select name="City" value={profile.City} onChange={onHandleChange}>
                            <option></option>
                            <option value="Da Nang">{t('common.daNang')}</option>
                            <option value="Ha Noi">{t('common.haNoi')}</option>
                            <option value="Ho Chi Minh">{t('common.hoChiMinh')}</option>
                        </select>
                        <p>{t('common.phone')}</p><input type="text" name="Phone" value={profile.Phone} onChange={onHandleChange} />
                        <div></div><p className="address__input-message">{message ==="" ?"":"! "+message}</p>
                        <div className="address__button">
                            <input type="submit" className="address__button-btn" value="save"/>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default UpdateProfile;