import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ItemUser from '../../Component/user/ItemUser';
import "./user.scss"
import { deleteUser,searchUser,fetchAllUser } from "../../../redux";

export default function User() {
    const {t} = useTranslation();
    const dispatch = useDispatch()
    const user =  useSelector(state=>state.all.listUser);
    const [listUser, setListUser] = useState([]);
    const [search, setSearch] = useState('');
    let delayTimeout =null
    useEffect(() => {
        setListUser(user)
    }, [user])
    useEffect(() => {
        if(listUser.length>0){
            delayTimeout = setTimeout(() => {
                console.log(search);
                if(search === ''){
                    dispatch(fetchAllUser());
                }else{
                    dispatch(searchUser(search));
                }
            }, 500);
        }
    }, [search]);
    const deletePerson = id =>{
        dispatch(deleteUser(id))
    }
    const onHandleSearch = (event) =>{
        const {value} = event.target
        clearTimeout(delayTimeout);
        setSearch(value)
    }
    return (
        <section className="admUser">
            <div className="Container">
                <div className="admUser__action">
                    <Link className="admUser__add" to={
                        {
                            pathname:'/user/add',
                        }
                    }>
                        <i className="fas fa-plus"> {t('common.addNewUser')} </i>
                    </Link>
                    <input type="text" value={search} onChange={onHandleSearch} placeholder={t('common.searching')}  />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {t('common.stt')}
                            </th>
                            <th>
                                {t('common.name')}
                            </th>
                            <th>
                                {t('common.email')}
                            </th>
                            <th>
                                {t('common.phone')}
                            </th>
                            <th>
                                {t('common.address')}
                            </th>
                            <th>
                                {t('common.city')}
                            </th>
                            <th>
                                {t('common.actions')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser.map( (item,index) =>
                                <ItemUser key={item.id} user={item} index={index+1} deletePerson={deletePerson}  />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}