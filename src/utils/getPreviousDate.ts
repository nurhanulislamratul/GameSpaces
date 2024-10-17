const getPreviousDate = (prevDays: number) => {
  const prevDate = new Date();
  prevDate.setDate(prevDate.getDate() - prevDays);
  return prevDate;
};

export default getPreviousDate;
