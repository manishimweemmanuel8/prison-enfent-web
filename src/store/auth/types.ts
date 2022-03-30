export const LOGIN = "LOGIN";
export const CREATE_USER = "CREATE_USER";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const ERRORS = "ERRORS";
export const GET_USER = "GET_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const UPDATE_USER = "UPDATA_USER";

export interface IErrors {
  status: string;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}
interface ILogin {
  type: typeof LOGIN;
  payload: {
    data: ILoginParams;
  };
}

interface ILoginErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

interface IPasswordErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export interface IUser {
  id?: string;
  email: string;
  status: boolean;
  password?: string;
  joinDate?: any;
  roles?: any;
}
interface IUserList {
  type: typeof GET_ALL_USERS;
  payload: {
    users: IUser[];
  };
}

interface IGetUser {
  type: typeof GET_USER;
  payload: {
    user: IUser;
  };
}

interface IUpdateUser {
  type: typeof UPDATE_USER;
  payload: {
    message: string;
  };
}

interface IChangeUserPassword {
  type: typeof CHANGE_PASSWORD;
  payload: {
    message: string;
  };
}

interface ICreateUser {
  type: typeof CREATE_USER;
  payload: {
    message: string;
  };
}

export type IAuthType =
  | ILogin
  | ILoginErrors
  | IPasswordErrors
  | IUserList
  | IGetUser
  | IUpdateUser
  | IChangeUserPassword
  | ICreateUser;
