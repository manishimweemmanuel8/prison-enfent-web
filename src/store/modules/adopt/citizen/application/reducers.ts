import { ApplicationType, CREATE_APPLICATION, ERRORS } from "./types";

const initialState = {
  message: null,
  // prison: false,
  // prisons: [],
};

export const applicationReducer = (
  state = initialState,
  { type, payload }: ApplicationType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    // case GET_ALL_PRISONS:
    //   return { ...state, prisons: payload };
    // case GET_PRISON:
    //   return { ...state, prison: payload };
    case CREATE_APPLICATION:
      return { ...state, message: payload };
    // case UPDATE_PRISON:
    //   return { ...state, message: payload };

    default:
      return state;
  }
};
