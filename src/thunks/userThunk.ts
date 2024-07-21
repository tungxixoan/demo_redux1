import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types/userType";
import { fetchUsersFromAPI } from "../redux/userService";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const users = await fetchUsersFromAPI();
    return users;
  }
);