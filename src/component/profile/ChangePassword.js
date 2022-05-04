import React,{useState} from 'react';
import { RE_PASSWORD,PASSWORD } from "../../common/message";
import checkForm from "../../common/form/checkForm";
import { useTranslation } from 'react-i18next';

const ChangePassword = ({profile,setModal,setNewPassword}) => {
    const { t } = useTranslation();
    const [message,setMessage] = useState("");
    const [password,setPassword] = useState({
        currentPassword:"",
        newPassword:"",
        confirmPassword:""
    })
    const onHandleChange = event =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        setPassword({
            ...password,
            [name]:value
        })
    }
    const handleSubmitForm = event =>{
        event.preventDefault();
        const check = checkForm(password);
        if(check !== true){
            setMessage(check);
        }else if( password.currentPassword !== profile.Password ){
            setMessage(PASSWORD)
        }else if(password.newPassword !== password.confirmPassword){
            setMessage(RE_PASSWORD)
        }else{
            setNewPassword(password.confirmPassword)
            setModal({
                type:"changePassword",
                string:"Are you sure you want to change password ?"
            })
            setPassword({
                currentPassword:"",
                newPassword:"",
                confirmPassword:""
            })
            setMessage("");
            document.getElementById("UpdateModal").classList.toggle('toggleSignupModal');
        }
    }
    return (
        <div className="address__item">
            <p className="address__item-title">
                {t('common.changePassword')}
            </p>
            <div className="address__input">
                <form onSubmit={handleSubmitForm}>
                    <p> {t('common.currentPassword')} </p><input type="password" name="currentPassword" value={password.currentPassword} onChange={onHandleChange} />
                    <p>{t('common.newPassword')} </p><input type="password" name="newPassword" value={password.newPassword} onChange={onHandleChange} />
                    <p>{t('common.confirmPassword')}</p><input type="password" name="confirmPassword" value={password.confirmPassword} onChange={onHandleChange} />
                    <div></div><p className="address__input-message">{message ==="" ?"":"! "+message}</p>
                    <div className="address__button">
                            <input type="submit" className="address__button-btn" value="save"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;