export const getFilteredList = (searchTerm, list) => {
  if (searchTerm.trim()) {
    return list.filter(({ name }) => {
      return name.toLowerCase().includes(searchTerm.trim().toLowerCase());
    });
  }
  return list;
};
