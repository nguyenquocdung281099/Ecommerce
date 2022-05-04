import React, {useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import  "./profile.scss";
import UpdateModal from '../../modal/updateModal/UpdateModal';
import UpdateProfile from "../../component/profile/UpdateProfile";
import ChangePassword from '../../component/profile/ChangePassword';
import { updateUser } from "../../redux";
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { t } = useTranslation();
    const dispatch =useDispatch();
    const user = useSelector( state => state.user);
    const [modal,setModal]=useState({
        type:"",
        string:""
    })
    const [newPassword,setNewPassword]=useState('')
    const [profile, setProfile] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Address:"",
        City:"",
        Phone:""
    })
    useEffect(() => {
        console.log(profile)
        if(user.status){
            const item  =  Object.assign(profile,user.data);
            setProfile({...item})
        }
    }, [user]);
    const handleUpdate = ()=>{
        dispatch(updateUser(profile))
    }
    const handleChangePassword = () =>{
        if(newPassword !== ""){
            const item = Object.assign(profile,{
                Password:newPassword
            })
            dispatch(updateUser({...item}))
        }
    }
    return (
        <>
            <UpdateModal handleUpdate={handleUpdate} handleChangePassword={handleChangePassword} modal={modal} />
            <section className="poster">
                <div className="container">
                    <p className="poster__title"> {t('header.menu.0')} / <span> {t('common.customer')} </span></p>
                    <p className="poster__name"> {t('common.customer')} </p><img src="img/titleleft-dark.png" />
                </div>
            </section>
            <section className="address">
                <div className="container">
                    <div className="address__box">
                        <UpdateProfile profile={profile} setProfile={setProfile}  setModal= {setModal}/>
                        <ChangePassword  profile={profile} setProfile={setProfile} setModal= {setModal} setNewPassword={setNewPassword} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;