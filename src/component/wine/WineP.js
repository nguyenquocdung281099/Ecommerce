import React from 'react';
import  ItemWine  from "./ItemWine";

const WineP = ({products}) => {
    const loadItem = () =>{
        return  (
            products.map(wine =>
                <ItemWine key={wine.id} wine={wine} />
            )
        )
    }
    return (
        <div className="newproduct -product">
            {loadItem()}
        </div>

    );
}

export default WineP;