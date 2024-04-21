import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

function ArtistCircle(props) {
  return (
     <PieChart
    series={[
      {
        data: [
          { id: 0, value: props.data[0],color: '#FC244C', label: `${props.labels[0]} ${Math.ceil(props.data[0]*100/(props.data[0]+props.data[1]))}%` },
          { id: 1, value: props.data[1],color: 'gray', label: `${props.labels[1]} ${Math.floor(props.data[1]*100/(props.data[0]+props.data[1]))}%` },
       ],
        innerRadius: 40,
        outerRadius: 70,
      },
    ]}
    
    width={400}
    height={200}
  />
  )
}

export default ArtistCircle
