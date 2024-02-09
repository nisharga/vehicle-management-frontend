"use client";

const Guidelines = ({ heading }: any) => {
  const guidelinesData = [
    {
      id: 1,
      point: "Makes it easy to compare one vehicle to another",
    },
    {
      id: 2,
      point: "1/2 person will be enough to manage many vehicles",
    },
    {
      id: 3,
      point: "It will be easy to calculate income and expenditure",
    },
    {
      id: 4,
      point: "Vehicle maintenance will be easy",
    },
    {
      id: 5,
      point: "All vehicle related documents will become paperless",
    },
    {
      id: 6,
      point: "It will reduce both time and cost",
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">{heading} Dashboard of VMS</h1>
      {guidelinesData.map((guideline) => (
        <p key={guideline.id}>✓ {guideline.point}</p>
      ))}
    </>
  );
};

export default Guidelines;
