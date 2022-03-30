import {
  ChildType,
  ERRORS,
  GET_ALL_CHILDREN,
  GET_ALL_CHILDREN_BY_PRISON,
} from "./types";

const initialState = {
  message: null,
  children: [],
  childrenByPrison: [],
};

export const citizenChildReducer = (
  state = initialState,
  { type, payload }: ChildType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_CHILDREN:
      return { ...state, children: payload };
    case GET_ALL_CHILDREN_BY_PRISON:
      return { ...state, childrenByPrison: payload };

    default:
      return state;
  }
};
