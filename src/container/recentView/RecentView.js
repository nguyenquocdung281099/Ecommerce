import React, {useEffect,useState} from 'react';
import "./recentView.scss";
import { useSelector } from "react-redux";
import ItemRecentView from '../../component/recentView/ItemRecentView';
import { getRecentView } from "../../api/api";
import { useTranslation } from 'react-i18next';

const RecentView = () => {
    const user = useSelector(state => state.user)
    const [recentView,setRecentView] = useState([])
    const { t } = useTranslation();
    useEffect(() => {
        console.log(user)
        if( user.status){
            console.log(user.data)
            if(typeof user.data.ListRatting !== 'undefined'){
                if(user.data.ListRatting.length !== 0){
                    getView(user.data.ListRatting)
                }
            }
        }
    }, [user]);
    const getView = async (list) =>{
        const data = await getRecentView(list);
        setRecentView(data);
    }
    return (
        <section className="recent-view">
            <div className="container">
                <h1 className="recent-view__title"> {t('common.recentlyViewProducts')} </h1>
                <div className="productRow">
                    {
                        recentView.map(item =>
                            <ItemRecentView key={item.id} wine ={item}/>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default RecentView;