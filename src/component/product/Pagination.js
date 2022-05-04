import React from "react";
import { NavLink,useHistory } from "react-router-dom";

const Pagination = ({page,number}) => {
    const history = useHistory();
    const loadPage  = () =>{
        const result = [];
        for (let index = 0; index < number; index++) {
            result.push(<NavLink key={index} activeClassName="activePagination" to={`/product/${index+1}`}>{index+1}</NavLink>)
        }
        return result;
    }
    const goTo = type =>{
        if(type === 1 && page > 1){
            history.push(`/product/${page-1}`);
        }else if(type === 2 && page < number){
            history.push(`/product/${page+1}`);
        }
    }
return (
    <div className="product__box-number">
        <span className='product__box-pre' onClick={()=> goTo(1)} >
            <i className="fas fa-caret-left"></i>
        </span>
            {loadPage()}
        <span className="product__box-pre" onClick={()=> goTo(2) }>
            <i className="fas fa-caret-right"> </i>
        </span>
    </div>
);
};

export default Pagination;