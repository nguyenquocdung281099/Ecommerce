import ApexCharts from 'apexcharts'
const lineChart = (data  , xValue, ref) =>{
    const colorPro = ['#1EA69A', '#F7531F', '#8892D6'];
    var options = {
        series:data,
        colors: colorPro,
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [5, 7, 5],
            curve: 'straight',
        },
        title: {
            text: 'Annual Revenue',
            align: 'center'
        },
        legend: {
            tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 5,
            strokeColors:colorPro,
            hover: {
                sizeOffset: 0,
            }
        },
        yaxis:{
            strokeDashArray: 1,
        },
        xaxis: {
            categories: xValue,
        },
        tooltip: {
            y: [
            {
                title: {
                    formatter: function (val) {
                        return val
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        chart: {
            width: '80%',
            height:"400px"
        }
    };
    var chart = new ApexCharts(ref, options);
    chart.render();

}

export default lineChart;