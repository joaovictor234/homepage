import Chart from 'chart.js/auto';
import { CategoryScale, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(CategoryScale);

interface IInfoPieChart {
  data: ChartData<"pie", number[], string>,
  text: string
}

const InfoPieChart = ({data, text}: IInfoPieChart) => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Pie
        data={data}
        width={250}
        height={250}
        options={{
          plugins: {
            title: {
              display: true,
              text: text
            }
          }
        }}/>
    </div>
  )
}

export default InfoPieChart;