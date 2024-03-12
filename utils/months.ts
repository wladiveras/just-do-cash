export const months = Array.from({ length: 12 }, (_, index) => {
  const month = (index + 1).toString().padStart(2, "0");
  return { value: month, label: month };
});
