export const getToday = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" } as const;
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};
