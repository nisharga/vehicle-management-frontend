import { Timeline } from "antd";

const ViewItem = ({ viewID }: any) => {
  return (
    <>
      <p className="text-gray-700 sm:col-span-2 underline">
        Registration No {viewID}
      </p>
      <br />
      <Timeline
        items={[
          {
            children: "Create a services site 2015-09-01",
          },
          {
            children: "Solve initial network problems 2015-09-01",
          },
          {
            children: "Technical testing 2015-09-01",
          },
          {
            children: "Network problems being solved 2015-09-01",
          },
        ]}
      />
    </>
  );
};

export default ViewItem;
