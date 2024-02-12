
export const formatDate = (dateString: string) => {
    // Split the date string into day, month, and year
    const [day, month, year] = dateString?.split('-').map(Number);
  
    // Create a new Date object (months are zero-based in JavaScript)
    const dateObject = new Date(year, month - 1, day);
  
    // Format the date object to ISO string format
    const isoString = dateObject.toISOString();
  
    return isoString;
  }