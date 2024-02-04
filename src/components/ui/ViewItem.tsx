
const ViewItem = ({viewID}:any) => {
  return ( 
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Registration No</dt>
      <dd className="text-gray-700 sm:col-span-2">{viewID}</dd>
    </div> 
  </dl>
</div>
  )
}

export default ViewItem