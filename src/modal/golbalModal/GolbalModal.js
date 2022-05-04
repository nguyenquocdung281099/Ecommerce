import React,{useRef} from 'react'
import  "./golbalModal.scss";

export const showGolbalModal = ()=>{
    document.getElementById('GolbalModal').classList.toggle('toggleGolbalModal')
}
export default function GolbalModal(title="",btn="",func) {
    const refToggle = useRef();
    const onHandleClick = ()=>{
            func();
    }
    return (
        <div className="modal" id="GolbalModal" ref={refToggle} >
            <div className="modal__content"> <button className="modal__close"> <p onClick={showGolbalModal} >x</p></button>
                <div className="modal__content-img"> <img src="../img/modal.png" alt="" /></div>
                <div className="modal__content-email">
                    <p className="modal__content-title"> {title}</p>
                    <div className="modal__content-btn"><input type="button"
                            value={btn} onClick={onHandleClick} /></div>
                </div>
            </div>
        </div>
    )
}