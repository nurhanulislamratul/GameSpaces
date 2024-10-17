export const formatTime = (timestamp: string) => {
  const date = new Date(timestamp);

  // Get hours, minutes, and seconds
  let hours: number = date.getUTCHours();
  const minutes: string = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds: string = String(date.getUTCSeconds()).padStart(2, "0");

  // Determine AM or PM
  const ampm: string = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Format in HH:MM:SS AM/PM
  const formattedTime: string = `${String(hours).padStart(
    2,
    "0"
  )}:${minutes}:${seconds} ${ampm}`;

  return formattedTime;
};
