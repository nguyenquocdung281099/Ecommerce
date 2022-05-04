import React,{useRef,useEffect} from 'react';
import { useSelector } from "react-redux";
import './dashboard.scss';
import IntroduceDashboard from '../../Component/dashboard/IntroduceDashboard';
import Chart from "../../Component/chart/Chart";
import PieChart from "../../Component/chart/PieChart";

const Dashboard = () => {
    const data = useSelector( state => state.all);
    const refChart = useRef();
    const refPieChart = useRef();
    useEffect(() => {
        if(data.orders.length !==0){
            getListdata();
            setDataPieChart();
        }
    }, [data.orders])
    const cutData = () =>{
        const listOrder = [...data.orders];
        const result = listOrder.map( x => {
            return {
                month:x.DateOfPurchase.slice(5,6),
                year:x.DateOfPurchase.slice(0,4),
                price:parseInt(x.TotalPrice)
            }
        })
        return result;
    }
    const getListdata = () =>{
        const month = ["1","2","3","4","5"];
        const nameMonth=["January", "February", "March", "April", "May"]
        const result = cutData();
        const listData =[]
        for (const item of month) {
            listData.push({
                month:item,
                Y2018:result.filter(x =>  x.month === item && x.year === '2018').map(x=>x.price).reduce((a,b)=>(a+b)),
                Y2019:result.filter(x =>  x.month === item && x.year === '2019').map(x=>x.price).reduce((a,b)=>(a+b)),
                Y2020:result.filter(x =>  x.month === item && x.year === '2020').map(x=>x.price).reduce((a,b)=>(a+b))
            })
        }
        const dataChart = []
        dataChart.push({
            name:"2018",
            data : listData.map(x => x.Y2018)
        })
        dataChart.push({
            name:'2019',
            data : listData.map(x => x.Y2019)
        })
        dataChart.push({
            name:'2020',
            data : listData.map(x => x.Y2020)
        })
        Chart(dataChart,nameMonth,refChart.current);
    }
    const setDataPieChart = () =>{
        const result = cutData();
        const year = ['2018','2019','2020'];
        const data = [];
        year.forEach(item =>{
            data.push(
                result.filter(x => x.year=== item).map( x => x.price).reduce((a,b)=>(a+b))
            )
        })
        PieChart(data,year,refPieChart.current)
    }
    return (
        <section className="dashboard">
            <div className="Container">
                <IntroduceDashboard data={data}/>
                <div className="dashboard__box">
                    <div className="dashboard__chart" ref={refChart} >
                    </div>
                    <div className="dashboard__chart" ref={refPieChart} >
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;