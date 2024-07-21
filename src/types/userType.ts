import {
    USER_ADDED,
    USER_UPDATED,
    USER_DELETED
  } from '../constants/actionType';

export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface UserAddedAction {
    type: typeof USER_ADDED;
    payload: User;
  }
  
  export interface UserUpdatedAction {
    type: typeof USER_UPDATED;
    payload: User;
  }
  
  export interface UserDeletedAction {
    type: typeof USER_DELETED;
    payload: { id: number };
  }
  
  export interface UsersState {
    entities: User[];
    loading: boolean;
  }
  