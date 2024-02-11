
const UpCommingTrip = () => {
  return (
    
    <div className="flex items-center justify-center min-h-[450px]">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">Distination</th>
                    <th scope="col" className="py-3 px-6">Date</th>
                    <th scope="col" className="py-3 px-6">Pay</th>
                    <th scope="col" className="py-3 px-6">Status</th> 
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">(Dhaka-Rangpur)</td>
                    <td className="py-4 px-6">12.12.2024</td>
                    <td className="py-4 px-6">$45</td>
                    <td className="py-4 px-6">approve</td>
                </tr> 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">(Rangpur-Dhaka)</td>
                    <td className="py-4 px-6">12.10.2024</td>
                    <td className="py-4 px-6">$55</td>
                    <td className="py-4 px-6">pending</td>
                </tr>  
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">(Khulna-Rangpur)</td>
                    <td className="py-4 px-6">12.10.2024</td>
                    <td className="py-4 px-6">$155</td>
                    <td className="py-4 px-6">approve</td>
                </tr> 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">(Bogra-Dhaka)</td>
                    <td className="py-4 px-6">4.10.2024</td>
                    <td className="py-4 px-6">$5</td>
                    <td className="py-4 px-6">pending</td>
                </tr> 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">(Borisal-Dhaka)</td>
                    <td className="py-4 px-6">5.10.2024</td>
                    <td className="py-4 px-6">$55</td>
                    <td className="py-4 px-6">pending</td>
                </tr>  
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">(Jamalpur-Rangpur)</td>
                    <td className="py-4 px-6">12.10.2024</td>
                    <td className="py-4 px-6">$15</td>
                    <td className="py-4 px-6">approve</td>
                </tr> 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">(Nilphamari-Dhaka)</td>
                    <td className="py-4 px-6">11.10.2024</td>
                    <td className="py-4 px-6">$54</td>
                    <td className="py-4 px-6">pending</td>
                </tr> 
                </tbody>
            </table>
            </div>
    </div>
    
</div> 

  )
}

export default UpCommingTrip