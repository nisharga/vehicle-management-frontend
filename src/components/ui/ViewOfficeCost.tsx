import { Timeline } from "antd";

const ViewOfficeCost = ({ officeCostData }: any) => {
  return (
    <>
      {
        <Timeline
          items={[
            {
              children: `Cost Title: ${officeCostData?.cost_name}`,
            },
            {
              children: `Amount: ${officeCostData?.amount}`,
            },
            {
              children: `Description: ${officeCostData?.description}`,
            },
          ]}
        />
      }
    </>
  );
};

export default ViewOfficeCost;
