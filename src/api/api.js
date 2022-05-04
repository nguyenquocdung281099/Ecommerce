import axios from "axios";
import getDateTime from "../common/getDateTime";

const hostServer1='http://localhost:3000';
const hostServer2 ='http://localhost:3001'

export const  getNewWine =  async (date) =>{
    try {
        const result = await axios.get(`${hostServer1}/wine?Date_gte=${date}`);
        const {data} = await result;
        return data;
    } catch (error) {
        window.location.href='/error'
    }

}
export const  getHotTrendWine =  async () =>{
    try {
        const string =`${hostServer1}/wine?_sort=RatingScore,views&_order=desc&RatingScore_lte=5&RatingScore_gte=2&_limit=5`
        const result = await axios.get(string);
        const {data} = await result;
        return data;
    } catch (error) {
        window.location.href='/error'
    }

}
export const checkUser =  async (user) =>{
    try {
        let string =`${hostServer1}/user?Email=${user.Email}&&Password=${user.Password}`;
        const result = await axios.get(string)
        const {data} = await  result;
        if(data.length >0){
            return data[0];
        }else{
            return false;
        }
    } catch (error) {
        window.location.href='/error'
    }
}
export const register = (user) =>{
    try {
        let string = `${hostServer1}/user`;
        const options = {
            url:string,
            method: 'POST',
            data: user
        };
        const data = axios(options);
        return data;
    } catch (error) {
        window.location.href='/error'

    }
}
export const  getUser = async (id) =>{
    try {
        const string =`${hostServer1}/user/${id}`;
        const result =  await axios(string);
        const {data} = result;
        return data;
    } catch (error) {
        window.location.href='/error'

    }

}
export const checkEmail= async (email) =>{
    try {
        let string =`${hostServer1}/user?Email=${email}`;
        const result = await axios.get(string)
        const {data} = await  result;
        if(data.length >0){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        window.location.href='/error'
    }
}

export const update = (user) =>{
    try {
        let string = `${hostServer1}/user/${user.id}`;
        const options = {
            url:string,
            method: 'PATCH',
            data: user
        };
        const data = axios(options);
        return data;
    } catch (error) {
        // window.location.href='/error'

    }
}
export const  getWineById =  async (id) =>{
    try {
        const result = await axios.get(`${hostServer1}/wine/${id}`);
        const {data} = await result;
        return data;
    } catch (error) {
        window.location.href='/error'
    }
}

export const updateRatting = (id, lisRatting,score) =>{
        try {
            const string = `${hostServer1}/wine/${id}`;
            const options ={
                url:string,
                method: 'PATCH',
                data: {
                    Rating: lisRatting,
                    RatingScore:score
                }
            }
            axios(options);
        } catch (error) {
            window.location.href='/error'
        }
}
export const updateRattingOfUser = (id,lisRatting) =>{
    try {
        const string = `${hostServer1}/user/${id}`;
        const options ={
            url:string,
            method: 'PATCH',
            data: {
                ListRatting: lisRatting,
            }
        }
        axios(options);
    } catch (error) {
        window.location.href='/error'
    }
}

export const getWineByCart = async (listCart) =>{
    try {
        const array =[]
        for (const item of listCart) {
            array.push(axios.get(`${hostServer1}/wine/${item.idWine}`))
        }
        const result = await Promise.all(array);
        const data = result.map(x => x.data);
        data.forEach(item =>{
            const cart = listCart.find( x => x.idWine === parseInt(item.id));
            item =Object.assign(item,cart)
        })
        return data;
    } catch (error) {
        window.location.href='/error'
        console.log(error)
    }
}
export const updateCart = (id,cart) =>{
    try {
        const string = `${hostServer1}/user/${id}`;
        const options ={
            url:string,
            method: 'PATCH',
            data: {
                Cart: cart,
            }
        }
        axios(options);
    } catch (error) {
        window.location.href='/error'
    }
}
export const getRecentView = async (listView) =>{
    try {
        const array = []
        for (const item of listView) {
            array.push(axios.get(`${hostServer1}/wine/${item.idWine}`))
        }
        const result = await Promise.all(array);
        const data = result.map(x => x.data);
        data.forEach(wine => {
            const item = listView.find( x => x.idWine === wine.id);
            wine = Object.assign(wine,item);
        });
        return data;
    } catch (error) {
        window.location.href='/error'
    }
}
export const sendSuggest =  async (sussgest,file) =>{
    try {
        console.log(file)
        const result = await   axios.post(`${hostServer2}/upload`, file,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        axios.post(`${hostServer1}/sussgest`,{
            Img:result.data.filename,
            Description:sussgest
        });
    } catch (error) {
        window.location.href='/error'
    }
}

export const pruchase = async (infor,totalPrice,cart) =>{

    try {
        const result = await axios.post(`${hostServer1}/order` ,{
        idUser:infor.id,
        DateOfPurchase : getDateTime(),
        RecivedDate:'',
        TotalPrice:totalPrice,
        Cart:cart,
        Status:0,
        Address:infor.Address,
        Phone:infor.Phone,
    })
    return result.data;
    } catch (error) {

    }
}
export const getlistOrder = async (id) =>{
    try {
        const result = await axios.get(`${hostServer1}/order/?idUser=${id}&_limit=10&_sort=id,views&_order=desc`)
        return result.data;
    } catch (error) {
    }
}
export const getAllUser = async ()=>{
    try {
        const result = await axios.get(`${hostServer1}/user?Type=user&_page=1&_limit=10`);
        return result.data;
    } catch (error) {

    }
}
export const getAllProduct = async ()=>{
    try {
        const result = await axios.get(`${hostServer1}/wine?_page=1&_limit=10`);
        return result.data;
    } catch (error) {

    }
}
export const getAllOrder = async ()=>{
    try {
        const result = await axios.get(`${hostServer1}/order`);
        return result.data;
    } catch (error) {
    }
}
export const getTenOrder = async ()=>{
    try {
        const result = await axios.get(`${hostServer1}/order?_page=1&_limit=20`);
        return result.data;
    } catch (error) {
    }
}

export const loadMoreWine = async (page) =>{
    try {
        const result = await axios.get(`${hostServer1}/wine?_page=${page}&_limit=10`);
        return result.data;
    } catch (error) {
    }
}
export const loadTenOrder = async (page) =>{
    try {
        const result = await axios.get(`${hostServer1}/order?_page=${page}&_limit=20`);
        return result.data;
    } catch (error) {
    }
}
export const updateProduct = async  (file,wine,status=false) =>{
    try {
        if(status){
            const result = await axios.post(`${hostServer2}/uploadProduct`,file);
            const product =  await axios.patch(`${hostServer1}/wine/${wine.id}`,{
                ...wine,
                Img:`/img/products/${result.data.filename}`
            })
            return product.data
        }else{
            const product =  await axios.patch(`${hostServer1}/wine/${wine.id}`,wine)
            return product.data
        }
    } catch (error) {
        window.location.href='/error'
    }

}
export const addProduct = async  (file,wine) =>{
    try {
        if(file.has('file')){
            const result = await axios.post(`${hostServer2}/uploadProduct`,file);
            const product =  await axios.post(`${hostServer1}/wine`,{
                ...wine,
                Img:`/img/products/${result.data.filename}`
            })
            return product.data
        }
    } catch (error) {
        window.location.href='/error'
    }

}
export const deleteWine = (id) =>{
    try {
        axios.delete(`${hostServer1}/wine/${id}`);
    } catch (error) {
        window.location.href='/error'
    }
}

export const updateOrderStatus = async (id,status) =>{
    try {
        const result  = await  axios.patch(`${hostServer1}/order/${id}`,{Status:status});
        return result.data
    } catch (error) {
        window.location.href='/error'
    }
}
export const deletePerson = async id =>{
    try {
        const result = await axios.delete(`${hostServer1}/user/${id}`);
        return result.data
    } catch (error) {
        window.location.href='/error'
    }
}
export const searchPerson = async (string) =>{
    try {
        const result = await axios.get(`${hostServer1}/user?q=${string}`);
        return result.data
    } catch (error) {
        window.location.href='/error'

    }
}