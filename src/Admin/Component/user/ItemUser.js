import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ItemUser = ({user,index,deletePerson}) => {
    const {t} = useTranslation()
    return (
        <tr>
            <td>
                {index}
            </td>
            <td>
                {user.FirstName}  {user.LastName}
            </td>
            <td>
                {user.Email}
            </td>
            <td>
                {user.Phone}
            </td>
            <td>
                {user.Address}
            </td>
            <td>
                {user.City}
            </td>
            <td>
                <Link to={`/user/${user.id}`} > {t('common.edit')} </Link>
                <button onClick={()=> deletePerson(user.id)} >
                    {t('common.delete')}
                </button>
            </td>
        </tr>
    );
}

export default ItemUser;