const getUser = (id, name, company) => {
  return {
    id,
    name,
    company,
  };
};

export const mockBoardInfo = {
  users: {
    "user-1": getUser("user-1", "Amirdharshan A", "Intellecytx Data Science"),
    "user-2": getUser("user-2", "Vimal Kumar", "Sirius Computer Solutions"),
    "user-3": getUser("user-3", "Jayakrishnanan", "Lakeba IT Solutions"),
    "user-4": getUser("user-4", "Affan Ahmed Khan", "Smart Parking"),
    "user-5": getUser("user-5", "Akash P", "Centre"),
    "user-6": getUser("user-6", "Gayathiri L", "Katomaron Technologies"),
    "user-7": getUser("user-7", "S Suresh", "Synopsis"),
    "user-8": getUser("user-8", "Arun prakash", "IIT Madras"),
    "user-9": getUser("user-9", "Arunkumar A", "Vidhya skill School"),
    "user-10": getUser("user-10", "Midhun Kumar", "Cognizant"),
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Open",
      userIds: ["user-1", "user-2", "user-3", "user-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      userIds: ["user-5", "user-6", "user-7", "user-8"],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      userIds: ["user-9", "user-10"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
