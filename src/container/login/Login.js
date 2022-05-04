import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  "./login.scss";
import { checkLogin } from "../../redux";
import checkForm from "../../common/form/checkForm";
import { useTranslation } from 'react-i18next';

const Login = () => {
    const dispatch =  useDispatch();
    const data = useSelector(state => state.user);
    const { t } = useTranslation();
    const [user, setUser] = useState({
        Email:"",
        Password:""
    });
    const [message,setMessage] =useState("");
    useEffect(() => {
        if(data.message !== ""){
            setMessage(data.message);
        }
    }, [data.message])
    const onChangeUser = event =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmitLogin = event =>{
        event.preventDefault();
        const check = checkForm(user)
        if(check !== true){
            setMessage(check);
        }else{
            setMessage("")
            dispatch(checkLogin(user))
        }
    }
    return (
        <>
            <section className="poster">
                <div className="container">
                    <p className="poster__title"> {t('header.menu.0')} / <span> {t('header.sub.0')} </span></p>
                    <div className="poster__btn">
                        <p className="poster__name">{t('header.sub.0')}</p><Link to="/signup">{t('header.sub.1')}</Link>
                    </div><img src="img/titleleft-dark.png" />
                </div>
            </section>
            <section className="signin">
                <div className="container">
                    <div className="signin__box">
                        <form onSubmit={onSubmitLogin}>
                            <p className="signin__box-title"> {t('common.customerL')} </p>
                            <p className="signin__box-title -sub"> {t('common.ifYouHave')} </p>
                            <div className="signin__box-input">
                                <p> {t('common.email')} *</p>
                                <input type="text" name="Email" value={user.Email} placeholder="Email..." onChange={onChangeUser} />
                            </div>
                            <div className="signin__box-input">
                                <p>{t('common.password')} *</p>
                                <input type="password" name="Password" value={user.Password} placeholder="Password..."  onChange={onChangeUser} />
                            </div>
                            <p className="signin__box-message">{message ==="" ?"":"! "+message} </p>
                            <div className="signin__box-send"><button> {t('header.sub.0')} </button></div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;