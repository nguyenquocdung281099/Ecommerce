import React, {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import checkForm from "../../common/form/checkForm";
import  "./signup.scss";
import { register, checkEmail } from "../../api/api";
import { EMAIL_EXIT, RE_PASSWORD } from "../../common/message";
import { showSignupModal } from "../../modal/signupModal/SignupModal";
import { useTranslation } from 'react-i18next';

const Signup = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        RePassword:""
    })
    const onHandleCHange = event =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmitForm = event =>{
        event.preventDefault();
        const check = checkForm(user)
        checkEmail(user.Email).then( res =>{
            if(check !== true){
                setMessage(check);
            }else if(res){
                setMessage(EMAIL_EXIT)
            }else if (user.Password !== user.RePassword){
                setMessage(RE_PASSWORD);
            } else{
                register({
                    FirstName:user.FirstName,
                    LastName:user.LastName,
                    Email:user.Email,
                    Password:user.Password,
                    Cart : [],
                    Type:"user"
                }).then( res =>{
                    if(res.status === 201){
                        setMessage("");
                        showSignupModal();
                    }
                })
                ;
            }
        })
    }
    const handleGoBack = () =>{
        history.goBack()
    }
    return (
        <>
            <section className="poster">
                <div className="container">
                    <p className="poster__title"> {t('header.menu.0')} / <span>{t('header.sub.1')}</span></p>
                    <div className="poster__btn">
                        <p className="poster__name"> {t('header.sub.1')} </p><Link to="/login">{t('header.sub.0')}</Link>
                    </div><img src="img/titleleft-dark.png" />
                </div>
            </section>
            <section className="signup">
                <div className="container">
                    <div className="signup__box">
                        <form onSubmit={onSubmitForm}>
                            <p className="signup__box-title"> {t('common.personalInformation')} </p>
                            <div className="signup__box-input">
                                <p> {t('common.firstName')} *</p><input type="text" name="FirstName" value={user.FirstName} onChange={onHandleCHange} />
                            </div>
                            <div className="signup__box-input">
                                <p>{t('common.lastName')} *</p><input type="text" name="LastName" value={user.LastName} onChange={onHandleCHange} />
                            </div>
                            <div className="signup__box-input">
                                <p>{t('common.email')} *</p><input type="text" name="Email" value={user.Email} onChange={onHandleCHange} />
                            </div>
                            <p className="signup__box-title -check">{t('common.loginInformation')}</p>
                            <div className="signup__box-input -confir">
                                <p>{t('common.password')} *</p><input type="password"name="Password" value={user.Password} onChange={onHandleCHange} />
                            </div>
                            <div className="signup__box-input -confir">
                                <p>{t('common.confirmPassword')} *</p><input type="password" name="RePassword" value={user.RePassword} onChange={onHandleCHange} />
                            </div>
                            <p className="signup__box-message">{message ==="" ?"":"! "+message} </p>
                            <div className="signup__box-send"><button> {t('common.send')} </button><button onClick={handleGoBack}> {t('common.back')} </button></div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;