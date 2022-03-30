import {
  CREATE_PRISON,
  ERRORS,
  GET_ALL_PRISONS,
  GET_PRISON,
  PrisonType,
  UPDATE_PRISON,
} from "./types";

const initialState = {
  message: null,
  prison: false,
  prisons: [],
};

export const prisonReducer = (
  state = initialState,
  { type, payload }: PrisonType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_PRISONS:
      return { ...state, prisons: payload };
    case GET_PRISON:
      return { ...state, prison: payload };
    case CREATE_PRISON:
      return { ...state, message: payload };
    case UPDATE_PRISON:
      return { ...state, message: payload };

    default:
      return state;
  }
};
