import { FETCH_USERS_PENDING, FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED } from '../constants/actionType';
import { User } from '../types/userType';

export const fetchUsersPending = () => ({
  type: FETCH_USERS_PENDING,
});

export const fetchUsersFulfilled = (users: User[]) => ({
  type: FETCH_USERS_FULFILLED,
  payload: users,
});

export const fetchUsersRejected = () => ({
  type: FETCH_USERS_REJECTED,
});