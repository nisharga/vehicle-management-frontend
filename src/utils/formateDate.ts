
export const formatDate = (dateString: string) => {
    // Split the date string into day, month, and year
    const [day, month, year] = dateString?.split('-').map(Number);
  
    // Create a new Date object (months are zero-based in JavaScript)
    const dateObject = new Date(year, month - 1, day);
  
    // Format the date object to ISO string format
    const isoString = dateObject.toISOString();
  
    return isoString;
  }


export const formatDateToRegularDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  