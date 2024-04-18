import { PieChart } from '@mui/x-charts/PieChart';


function Circle(props){
    
    return <PieChart
    series={[
      {
        data: [
          { id: 0, value: props.data[0],color: 'cyan', label: `${props.labels[0]} ${Math.trunc(props.data[0]/60000)}m` },
          { id: 1, value: props.data[1],color: 'yellow', label: `${props.labels[1]} ${Math.trunc(props.data[0]/60000)}m` },
          { id: 2, value: props.data[2],color: "green", label: `${props.labels[2]} ${Math.trunc(props.data[2]/60000)}m` },
          { id: 3, value: props.data[3],color: 'orange', label: `${props.labels[3]} ${Math.trunc(props.data[3]/60000)}m` },
        ],
        innerRadius: 40,
        outerRadius: 70,
      },
    ]}
    
    width={400}
    height={200}
  />
}



export default Circle;