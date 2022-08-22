export const ERRORS = "ERRORS";
export const CREATE_APPLICATION = "CREATE_APPLICATION";

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
  stage?:string;
  testimony?:string;
  leadName?:string;
  leadPhone?:string;
  leadEmail?:string;
  childId?: string;
  email?: any;
}

interface ICreateApplication {
  type: typeof CREATE_APPLICATION;
  payload: {
    message: string;
  };
}

// interface IUpdatePrison {
//   type: typeof UPDATE_PRISON;
//   payload: {
//     message: string;
//   };
// }

// interface IPrisonList {
//   type: typeof GET_ALL_PRISONS;
//   payload: {
//     prisons: IPrison[];
//   };
// }

// interface IGetPrison {
//   type: typeof GET_PRISON;
//   payload: {
//     prison: IPrison;
//   };
// }

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ApplicationType = IWriteErrors | ICreateApplication;
