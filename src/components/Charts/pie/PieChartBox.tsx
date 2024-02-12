import { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";

interface IProps {
  pending: number;
  completed: number;
  cancel: number;
}

const PieChartBox: FC<IProps> = ({ pending, completed, cancel }) => {
  return (
    <div className="flex justify-center my-[10%]">
      <div className="text-secondary space-y-4">
        <div className="order_details">
          <PieChart
            style={{ width: "120%" }}
            startAngle={180}
            label={({ x, y, dx, dy, dataEntry }) => {
              return (
                <text
                  x={42}
                  y={y}
                  dx={dx}
                  dy={dy}
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
                color: "#003221",
              },
              {
                title: `Completed ${completed}`,
                value: completed,
                color: "#00334E",
              },
              {
                title: `Cancel ${cancel}`,
                value: cancel,
                color: "#5C717C",
              },
              {
                title: `Cancel ${cancel}`,
                value: cancel,
                color: "#CAD1D4",
              },
              {
                title: `Cancel ${cancel}`,
                value: cancel,
                color: "#320021",
              },
            ]}
            paddingAngle={1}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChartBox;
