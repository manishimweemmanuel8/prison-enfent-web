export const ERRORS = "ERRORS";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const CREATE_PROFILE = "CREATE_PROFILE";
export const UPDATE_PROFILE = "UPDATA_PROFILE";
export const GET_PROFILE = "GET_PROFILE";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IProfile {
  id?: string;
  names?: string;
  email: string;
  phone?: string;
  status?: boolean;
  province?: string;
  district?: string;
  sector?: string;
  cell?: string;
  village?: string;
}

interface IICreateProfile {
  type: typeof CREATE_PROFILE;
  payload: {
    message: string;
  };
}

interface IUpdateProfile {
  type: typeof UPDATE_PROFILE;
  payload: {
    message: string;
  };
}

interface IProfileList {
  type: typeof GET_ALL_PROFILES;
  payload: {
    profiles: IProfile[];
  };
}

interface IGetProfile {
  type: typeof GET_PROFILE;
  payload: {
    profile: IProfileList;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ProfileType =
  | IWriteErrors
  | IProfileList
  | IICreateProfile
  | IGetProfile
  | IUpdateProfile;
