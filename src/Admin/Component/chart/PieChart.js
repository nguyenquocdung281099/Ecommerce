import ApexCharts from 'apexcharts'

const PieChart = (data,label,ref) => {
    var options = {
        series: data,
        chart: {
        width: '80%',
        height: 400,
        type: 'pie',
    },
    labels: label,
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: '200'
        },
        legend: {
            position: 'bottom'
        }
        }
    }]
    };
    var chart = new ApexCharts(ref, options);
    chart.render();
}

export default PieChart;