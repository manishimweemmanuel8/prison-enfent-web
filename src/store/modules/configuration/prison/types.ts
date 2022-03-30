export const ERRORS = "ERRORS";
export const GET_ALL_PRISONS = "GET_ALL_PRISONS";
export const CREATE_PRISON = "CREATE_PRISON";
export const UPDATE_PRISON = "UPDATA_PRISON";
export const GET_PRISON = "GET_PRISON";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IPrison {
  id?: string;
  names: string;
  email: string;
  location: string;
  status: boolean;
  user?:any;
  createdAt?:any
}

interface IICreatePrison {
  type: typeof CREATE_PRISON;
  payload: {
    message: string;
  };
}

interface IUpdatePrison {
  type: typeof UPDATE_PRISON;
  payload: {
    message: string;
  };
}

interface IPrisonList {
  type: typeof GET_ALL_PRISONS;
  payload: {
    prisons: IPrison[];
  };
}

interface IGetPrison {
  type: typeof GET_PRISON;
  payload: {
    prison: IPrison;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type PrisonType =
  | IWriteErrors
  | IPrisonList
  | IICreatePrison
  | IGetPrison
  | IUpdatePrison;
