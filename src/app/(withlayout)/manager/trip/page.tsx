import ModalBox from "@/components/ModalBox/ModalBox"
import CreateTrip from "./CreateTrip"
import TripListTable from "@/components/Table/TripListTable"

const page = () => {
  return (
    <div> 
    <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
            Trip List
        </h3> 
        <ModalBox btnLabel="Create New Trip" >
            <CreateTrip />
        </ModalBox>
    </div>
    <TripListTable /> 
  </div>
  )
}

export default page