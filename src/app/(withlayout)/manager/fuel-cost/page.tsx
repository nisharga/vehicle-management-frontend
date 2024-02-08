const FuelCostPage = () => {
  return (
    <>
      <section className="text-center text-xl text-secondary my-3">
        <p>Fuel Cost</p>
      </section>

      <div className="bg-white shadow-lg rounded-lg align-middle inline-block min-w-full overflow-hidden  px-8 my-5">
        <p className="text-center text-lg text-textColor">Fuel Cost</p>
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 text-brand">
              <th className="px-6 py-3  text-left leading-4  tracking-wider">
                From - To
              </th>
              <th className="px-6 py-3 border-b-2 text-left leading-4  tracking-wider">
                Total Day
              </th>
              <th className="px-6 py-3 border-b-2 text-left leading-4 tracking-wider">
                Vehicle Type
              </th>
            </tr>
          </thead>

          <tbody className="">
            <tr>
              <td className=" px-2 py-1 border-b border-gray-500">
                <div className="text-sm leading-5">Dhaka - Natore</div>
              </td>

              <td className=" px-2 py-1 border-b border-gray-500  text-sm leading-5">
                5
              </td>
              <td className=" px-2 py-1 border-b border-gray-500 text-sm leading-5">
                Buss (AC)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FuelCostPage;
