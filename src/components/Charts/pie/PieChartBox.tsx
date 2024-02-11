import { FC } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

interface IProps{
    pending: number;
    completed: number;
    cancel: number;
}

const PieChartBox:FC<IProps> = ({pending, completed, cancel}) => {
  return (
    <div className="flex justify-center my-[10%]">
          <div className="text-secondary space-y-4"> 
      <div className="order_details">
      <PieChart
   // Using fixed dimensions, and the CSS for scaling
   style={{ width: '120%' }}
   // For some reason the pie didn't start north :shrug:
   startAngle={180}
   // Needing to show custom label to add other text in the segment
   label={({ x, y, dx, dy, dataEntry }) => {
     return (
       <text
         x={42}
         y={y}
         dx={dx }
         dy={dy }
         dominantBaseline="central"
         textAnchor="middle"
       >
         {dataEntry.title}
       </text>
     );
   }}
   // Pass the data to make up the pie
   data={[
     {
       title: `Pending ${pending}`,
       value: pending,
       color: "#E38627",
     },
     {
       title: `Completed ${completed}`,
       value: completed,
       color: "#faab00",
     },
     {
       title: `Cancel ${cancel}`,
       value: cancel,
       color: "#C13C37",
     },
   ]}
   paddingAngle={1} 
 />
      </div>
     </div>
   </div>
  )
}

export default PieChartBox