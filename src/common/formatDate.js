const formatDate =()=>{
    const today = new Date();
    const year = today.getFullYear();
    const number = today.getMonth() +1
    const month = number < 10 ? "0"+number :number ;
    const date = today.getDate() < 10 ? "0"+today.getDate() :today.getDate() ;
    let string =  year.toString() +month.toString() +date.toString();

    return parseInt(string);
}
export default  formatDate;