import {
  ApplicationType,
  ERRORS,
  GET_ALL_APPLICATIONS,
  GET_ALL_APPROVED_APPLICATIONS,
  GET_APPLICATION,
  UPDATE_APPLICATION,
} from "./types";

const initialState = {
  message: null,
  application: false,
  applications: [],
  approvedApplications: [],
};

export const prisonApplicationReducer = (
  state = initialState,
  { type, payload }: ApplicationType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_APPLICATIONS:
      return { ...state, applications: payload };
    case GET_APPLICATION:
      return { ...state, application: payload };
    case GET_ALL_APPROVED_APPLICATIONS:
      return { ...state, approvedApplications: payload };
    case UPDATE_APPLICATION:
      return { ...state, message: payload };

    default:
      return state;
  }
};
