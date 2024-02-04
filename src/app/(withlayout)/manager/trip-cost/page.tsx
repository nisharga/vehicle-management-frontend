const TripCostPage = () => {
  return (
    <>
      <section className="text-center text-xl text-secondary my-3">
        <p>Trip Cost</p>
      </section>

      <section className="grid lg:grid-cols-2 md:grid-cols-1 bg-white shadow-lg rounded-lg">
        <div className="align-middle inline-block min-w-full overflow-hidden  px-8 my-5">
          <p className="text-center text-lg text-textColor">Trip Data</p>
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

        <div className=" text-textColor space-y-2 px-20 my-5">
          <p className="text-center text-lg">Cost Summery</p>
          <p className="flex justify-between">
            <span className="font-bold ">Shipping Cost</span>
            0.00
          </p>
          <p className="flex justify-between">
            <span className="font-bold ">Tool Cost</span>
            0.00
          </p>
          <p className="flex justify-between">
            <span className="font-bold ">Driver Cost</span>
            0.00
          </p>
          <p className="flex justify-between">
            <span className="font-bold ">Helper Cost</span>
            0.00
          </p>
          <p className="flex justify-between">
            <span className="font-bold ">Launce Cost</span>
            0.00
          </p>
          <p className="flex justify-between">
            <span className="font-bold ">Vat(%)</span>
            0.00
          </p>
          <hr />
          <p className="flex justify-between">
            <span className="font-bold ">Payable Total</span>
            0.00
          </p>
        </div>
      </section>
    </>
  );
};

export default TripCostPage;
