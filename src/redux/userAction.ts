import {
  USER_ADDED,
  USER_UPDATED,
  USER_DELETED,
} from '../constants/actionType';
import { User } from '../types/userType';

export const userAdded = (user: User) => ({
  type: USER_ADDED,
  payload: user,
});

export const userUpdated = (user: User) => ({
  type: USER_UPDATED,
  payload: user,
});

export const userDeleted = (id: number) => ({
  type: USER_DELETED,
  payload: { id },
});
