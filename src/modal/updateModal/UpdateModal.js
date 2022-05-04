import React,{useRef} from 'react'
import  "./updateModal.scss";
import { useTranslation } from 'react-i18next';

export default function UpdateModal({handleUpdate,modal,handleChangePassword}) {
    const refToggle = useRef();
    const { t } = useTranslation();
    const onHandleClick = ()=>{
        if(modal.type === "updateProfile"){
            handleUpdate();
        }else if(modal.type === "changePassword"){
            handleChangePassword();
        }
        refToggle.current.classList.toggle('toggleSignupModal');
    }
    const closeHandle = () =>{
        refToggle.current.classList.toggle('toggleSignupModal');
    }
    return (
        <div className="modal" id="UpdateModal" ref={refToggle} >
            <div className="modal__content"> <button className="modal__close"> <p onClick={closeHandle} >x</p></button>
                <div className="modal__content-img"> <img src={process.env.PUBLIC_URL+'/img/modal.png'} /></div>
                <div className="modal__content-email">
                    <p className="modal__content-title -long">{modal.string}</p>
                    <div className="modal__content-btn -double" >
                        <input type="button" value={t('common.ok')} onClick={onHandleClick} />
                        <button onClick={closeHandle} > {t('common.no')} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}