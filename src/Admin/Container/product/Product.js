import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./product.scss";
import ProductItem from '../../Component/product/ProductItem';
import { deleteProduct,loadMoreProduct } from "../../../redux";
import { useTranslation } from 'react-i18next';

const Product = () => {
    const { t } = useTranslation();
    const products = useSelector(state => state.all.products);
    const status = useSelector(state => state.all.statusProduct);
    const dispatch = useDispatch()
    const [listProduct,setListProduct] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(() => {
        const array = [...products].reverse();
        setListProduct(array);
        setPage(Math.ceil(products.length/10))
    }, [products])
    const deleteItem = (id)=>{
        dispatch(deleteProduct(id))
    }
    const loadProduct = () =>{
        dispatch(loadMoreProduct(page+1))
    }
    return (
        <div className="admProduct">
            <div className="Container">
                <Link to={
                    {
                        pathname:'/product/add',
                        type:"add"
                    }
                }>
                    <i className="fas fa-plus"> {t('common.addNewProduct')} </i>
                </Link>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {t('common.stt')}
                            </th>
                            <th>
                                {t('common.image')}
                            </th>
                            <th>
                                {t('common.name')}
                            </th>
                            <th>
                                {t('common.price')}
                            </th>
                            <th>
                                {t('common.actions')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listProduct.map( (item,index) =>
                                <ProductItem key={item.id} item ={item} index={index+1} deleteItem={deleteItem}/>
                            )
                        }
                    </tbody>
                </table>
                {
                    status === 0 ? <button className="admProduct__btn" onClick={loadProduct}>{ t('common.loadMore') }</button> :""
                }
            </div>
        </div>
    );
}

export default Product;