import { profile } from "console";
import {
  CREATE_PROFILE,
  ERRORS,
  GET_ALL_PROFILES,
  GET_PROFILE,
  ProfileType,
  UPDATE_PROFILE,
} from "./types";

const initialState = {
  message: null,
  profile: false,
  profiles: [],
};

export const profileReducer = (
  state = initialState,
  { type, payload }: ProfileType
) => {
  console.log(payload);

  switch (type) {
    
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_PROFILES:
      return { ...state, profiles: payload };
    case GET_PROFILE:
      return { ...state, profile: payload };
    case CREATE_PROFILE:
      return { ...state, message: payload };
    case UPDATE_PROFILE:
      return { ...state, message: payload };

    default:
      return state;
  }
};
