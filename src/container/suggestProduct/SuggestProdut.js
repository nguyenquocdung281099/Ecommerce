import React,{useState,useRef} from 'react';
import "./suggestProduct.scss";
import GolbalModal, { showGolbalModal }  from "../../modal/golbalModal/GolbalModal";
import { sendSuggest } from "../../api/api";
import { useTranslation } from 'react-i18next';

const SuggestProdut = () => {
    const { t } = useTranslation();
    const [file, setFile] = useState(null);
    const nodeFile = useRef();
    const [sussgest, setSussgest] = useState('');
    const  handleChange = (event) => {
        setFile( URL.createObjectURL(event.target.files[0]))
    }
    const onHandleSubmit = event =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('file',nodeFile.current.files[0]);
        console.log(nodeFile.current.files)
        sendSuggest(sussgest,formData);
        setSussgest('')
        setFile(null);
        showGolbalModal();
    }
    return (
        <section className="sussgest">
            {GolbalModal(t('common.thanksFor') , t('common.ok'),showGolbalModal)}
            <div className="container">
                <h1> {t('common.yourSussgest')} </h1>
                <form onSubmit={onHandleSubmit}>
                        <div className="sussgest__img">
                            <img src={file?file:process.env.PUBLIC_URL+'/img/no-img.png'} alt=""/>
                        </div>
                        <label className="sussgest__file" htmlFor="sussgestFile">
                            {t('common.uploadImage')}
                        </label>
                        <input id="sussgestFile" type="file" name="file" ref={nodeFile} onChange={handleChange}/>
                        <div className="sussgest__box">
                            <p>{t('common.description')}  </p>
                            <textarea value={sussgest} onChange={ e => setSussgest(e.target.value)}>
                            </textarea>
                        </div>
                    <input  type="submit" value='Send'/>
                </form>
            </div>
        </section>
    );
}

export default SuggestProdut;