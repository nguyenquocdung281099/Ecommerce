import React,{useState,useEffect} from 'react';
import { useTranslation } from "react-i18next";
import { useParams,useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { updatePerson,addNewUser } from "../../../redux";
import "./userDetail.scss";
import checkForm from "../../../common/form/checkForm";
import { checkEmail } from "../../../api/api";
import { EMAIL_EXIT } from "../../../common/message";

const UserDetail = () => {
    const {t} = useTranslation();
    const {id}=useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector( state => state.all.listUser);
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Address:"",
        City:"",
        Phone:"",
        Password :""
    })
    useEffect(() => {
        if(user.length !==0 && id !== 'add'){
            const item = user.find(x => x.id == parseInt(id));
            setProfile(item)
        }
    }, [user]);
    const onHandleChange = event =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        setProfile({
            ...profile,
            [name]: value
        });
    }
    const onSubmitForm = event =>{
        event.preventDefault();
        if(id === "add"){
            const user = {
                FirstName:profile.FirstName,
                LastName:profile.LastName,
                Email:profile.Email,
                Password:profile.Password
            }
            const check = checkForm(user);
            checkEmail(user.Email).then( res =>{
                if(check !== true){
                    setMessage(check);
                }else if(res){
                    setMessage(EMAIL_EXIT)
                } else{
                    const newUser = Object.assign(user,{
                        Cart : [],
                        Type:"user"
                    })
                    dispatch(addNewUser(newUser));
                    history.push('/user');
                }
            })
        }else{
            dispatch(updatePerson(profile));
            history.goBack();
        }
    }
    return (
        <section className="admUserDetail">
            <div className="Container">
            <form onSubmit={onSubmitForm}>
                <h1 className="admUserDetail__title"> { id === 'add' ? t('common.addNewUser') : t('common.changeInformation')} </h1>
                <div className="admUserDetail__box">
                    <p>{t('common.email')}</p><input type="text" name='Email' value={profile.Email} onChange={onHandleChange}  />
                </div>
                <div className="admUserDetail__box">
                    <p>{t('common.firstName')}</p><input type="text" name="FirstName" value={profile.FirstName} onChange={onHandleChange}  />
                </div>
                <div className="admUserDetail__box">
                    <p>{t('common.lastName')}</p><input type="text" name="LastName" value={profile.LastName} onChange={onHandleChange} />
                </div>
                {   id === 'add' ? '' :
                <>
                    <div className="admUserDetail__box">
                        <p>{t('common.address')}</p><input type="text" name="Address" value={profile.Address} onChange={onHandleChange} />
                    </div>
                    <div className="admUserDetail__box">
                        <p>{t('common.city')}</p>
                                <select name="City" value={profile.City} onChange={onHandleChange}>
                                    <option></option>
                                    <option value="Da Nang">{t('common.daNang')}</option>
                                    <option value="Ha Noi">{t('common.haNoi')}</option>
                                    <option value="Ho Chi Minh">{t('common.hoChiMinh')}</option>
                                </select>
                    </div>
                    <div className="admUserDetail__box">
                        <p>{t('common.phone')}</p><input type="text" name="Phone" value={profile.Phone} onChange={onHandleChange} />
                    </div>
                </>
                }
                <div className="admUserDetail__box">
                    <p> { id === 'add' ? t('common.password'):t('common.newPassword') } </p><input type="password" name="Password" value={profile.Password} onChange={onHandleChange} />
                </div>
                <p className="admUserDetail__message">{message ==="" ?"":"! "+message}</p>
                <div className="admUserDetail__btn">
                    <input type="submit" className="address__button-btn" value={t('common.save')}/>
                    <button onClick = { ()=> history.push('/user')}>
                        {t('common.no')}
                    </button>
                </div>
            </form>
            </div>
        </section>
    );
}

export default UserDetail;