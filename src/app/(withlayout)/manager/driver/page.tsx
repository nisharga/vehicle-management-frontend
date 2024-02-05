import ModalBox from '@/components/ModalBox/ModalBox'
import DriverListTable from '@/components/Table/DriverListTable'
import React from 'react'
import AddDriver from './AddDriver'

const page = () => {
  return (
    <div> <div className="flex justify-between">
    <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
    Driver List
    </h3> 
    <ModalBox btnLabel="Add Driver" >
      <AddDriver />
    </ModalBox>
  </div>
  <DriverListTable /> 
  </div>
  )
}

export default page