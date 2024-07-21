import { User } from "../types/userType";

export const fetchUsersFromAPI = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };