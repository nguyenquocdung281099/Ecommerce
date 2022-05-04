import React,{useRef} from 'react'
import  "./signupModal.scss";
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
export const showSignupModal = ()=>{
    document.getElementById('SignupModal').classList.toggle('toggleSignupModal')
}
export default function SignupModal() {
    const refToggle = useRef();
    const { t } = useTranslation();
    const history = useHistory();
    const onHandleClick = ()=>{
            refToggle.current.classList.toggle('toggleSignupModal');
            history.push('/login')
    }
    return (
        <div className="modal" id="SignupModal" ref={refToggle} >
            <div className="modal__content"> <button className="modal__close"> <p onClick={showSignupModal} >x</p></button>
                <div className="modal__content-img"> <img src="../img/modal.png" alt="" /></div>
                <div className="modal__content-email">
                    <p className="modal__content-title"> {t('common.success')} </p>
                    <div className="modal__content-btn"><input type="button"
                            value={t('common.loginNow')} onClick={onHandleClick} /></div>
                </div>
            </div>
        </div>
    )
}