export const formatDate = (date: Date): string => {
  const utcFormatedDate = new Date(date);

  const day = String(utcFormatedDate.getDate()).padStart(2, "0");
  const month = String(utcFormatedDate.getMonth() + 1).padStart(2, "0");
  const year = utcFormatedDate.getFullYear();

  const formatedDate = `${year}-${month}-${day}`;
  return formatedDate;
};
