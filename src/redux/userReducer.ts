// reducers/usersReducer.ts
import { USER_ADDED, USER_UPDATED, USER_DELETED, FETCH_USERS_PENDING, FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED } from '../constants/actionType';
import { User, UsersState } from '../types/userType';

const initialState: UsersState = {
  entities: [],
  loading: false,
};

type Action =
  | { type: typeof USER_ADDED; payload: User }
  | { type: typeof USER_UPDATED; payload: User }
  | { type: typeof USER_DELETED; payload: { id: number } }
  | { type: typeof FETCH_USERS_PENDING }
  | { type: typeof FETCH_USERS_FULFILLED; payload: User[] }
  | { type: typeof FETCH_USERS_REJECTED };

const usersReducer = (state = initialState, action: Action): UsersState => {
  switch (action.type) {
    case USER_ADDED:
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };
    case USER_UPDATED:
      return {
        ...state,
        entities: state.entities.map(user =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    case USER_DELETED:
      return {
        ...state,
        entities: state.entities.filter(user => user.id !== action.payload.id),
      };
    case FETCH_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_FULFILLED:
      return {
        ...state,
        loading: false,
        entities: action.payload,
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
