export const capitalizeFirstLetter = (word: string) => {
  if (word?.length === 0) return "";
  return word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase();
};
