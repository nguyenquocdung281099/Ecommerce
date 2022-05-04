import React, {useRef} from 'react'
import  "./loginNowModal.scss";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export const showLoginNowModal = () =>{
    document.getElementById('LoginNowModal').classList.add('toggleLoginNowModal');
}
export default function LoginNowModal() {
    const { t } = useTranslation();
    const refToggle = useRef();
    const history = useHistory();
    const onHandleClick = ()=>{
        refToggle.current.classList.toggle('toggleLoginNowModal');
        history.push('/login')
    }
    const closeModal = () =>{
        refToggle.current.classList.toggle('toggleLoginNowModal');
    }
    return (
        <div className="modal" id="LoginNowModal" ref={refToggle} >
            <div className="modal__content"> <button className="modal__close"> <p onClick={closeModal} >x</p></button>
                <div className="modal__content-img"> <img src="../img/modal.png" /></div>
                <div className="modal__content-email">
                    <p className="modal__content-title"> {t('common.youNeedToLogin')} </p>
                    <div className="modal__content-btn"><input type="button"
                            value={t('common.loginNow')} onClick={onHandleClick} /></div>
                </div>
            </div>
        </div>
    )
}