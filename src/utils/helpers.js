export const getFilteredList = (column, boardInfo, searchTerm) => {
  const searchVal = searchTerm.trim().toLowerCase();
  if (searchVal) {
    const filterIds = column.userIds.filter((userId) =>
      boardInfo.users[userId].name.toLowerCase().includes(searchVal),
    );
    return filterIds.map((id) => boardInfo.users[id]);
  }
  return column.userIds.map((id) => boardInfo.users[id]);
};
