import React from 'react'

const Label = ({children}) => {
  return (
    <div>
        <label className="text-sm sm:text-base font-medium text-[#FFB230]">
        {children}
         </label>
    </div>
  )
}

export default Label