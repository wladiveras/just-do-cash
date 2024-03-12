const currentYear = new Date().getFullYear();

export const years = Array.from({ length: 31 }, (_, index) => {
  const year = currentYear + index;
  return { value: year.toString(), label: year.toString() };
});
