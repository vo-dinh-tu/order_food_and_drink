import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
  
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);
import './chart.scss';

function Charts(props) {
    const data = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [
            {
                label: 'Doanh thu',
                data: [7000, 5000, 8000, 4000, 6000, 1800, 6500, 2500, 100, 6700, 5400, 200],
                backgroundColor: 'rgba(26, 192, 115, 1)',
                borderWidth: .5,
                type: 'bar'
            },
            {
                label: 'Line',
                fill: false,
                data: [7500, 5500, 8500, 4500, 6500, 2300, 7000, 3000, 600, 7200, 5900, 700],
                backgroundColor: 'rgba(251, 140, 9, 1)',
                borderColor: 'rgba(251, 140, 9, 1)',
                borderWidth: 2,
                type: 'line'
            },
        ],
    };
    
    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'bottom',
    //         },
    //         title: {
    //             display: true,
    //             text: 'Doanh thus',
    //         },
    //     },
    // };

    return (
        <>
            <div className='chart'>
                <div className='chart-box'>
                    <div className='chart-time__group'>
                        <span>Thời gian:</span>
                        <select name="" id="">
                            <option>Ngày</option>
                            <option>Tháng</option>
                            {/* <option>Năm</option> */}
                        </select>
                    </div>
                    <Chart type='bar' data={data} />
                </div>
            </div>
        </>
    );
}

export default Charts;