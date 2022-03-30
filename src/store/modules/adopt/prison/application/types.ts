export const ERRORS = "ERRORS";
export const GET_ALL_APPLICATIONS = "GET_ALL_APPLICATIONS";
export const GET_APPLICATION = "GET_APPLICATION";
export const UPDATE_APPLICATION = "UPDATE_APPLICATION";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IApplication {
  id?: string;
  from?: string;
  to?: string;
  childId?: string;
  email?: any;
  profile?: any;
  child?: any;
  stage?: any;
}

interface IUpdateApplication {
  type: typeof UPDATE_APPLICATION;
  payload: {
    message: string;
  };
}

interface IApplicationList {
  type: typeof GET_ALL_APPLICATIONS;
  payload: {
    applications: IApplication[];
  };
}

interface IGetApplication {
  type: typeof GET_APPLICATION;
  payload: {
    application: IApplication;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ApplicationType =
  | IWriteErrors
  | IApplicationList
  | IGetApplication
  | IUpdateApplication;
