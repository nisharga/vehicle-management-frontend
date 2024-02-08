"use client";
import UpdateTripForm from "@/components/Forms/UpdateTripForm";
import ModalBox from "@/components/ModalBox/ModalBox";
import { tripFields, trips } from "@/components/Table/StaticTableData";
import { EditOutlined } from "@ant-design/icons";

const TripCostPage = () => {
  return (
    <>
      <section className="text-center text-xl text-secondary my-3">
        <p>Trip Cost</p>
      </section>

      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {(tripFields ?? []).map((vehiclesField) => (
                  <th
                    key={vehiclesField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {vehiclesField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {trips?.map((trip, index) => (
                <tr
                  key={trip?.startTime}
                  className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                >
                  <td className="px-2 py-3 text-sm leading-5">
                    {trip?.startLocation}
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    {trip?.endLocation}
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    {trip?.startTime}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {trip?.possibleEndTime}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {trip?.passengerCount}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {trip?.vehicleType}
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    <div className="flex gap-x-1 justify-center">
                      <ModalBox
                        btnLabel={
                          <span className="item justify-center items-center">
                            <EditOutlined />
                          </span>
                        }
                      >
                        <UpdateTripForm updateID={trip?.startLocation} />
                      </ModalBox>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default TripCostPage;
