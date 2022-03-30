export const ERRORS = "ERRORS";
export const GET_ALL_CHILDREN = "GET_ALL_CHILDREN";
export const GET_ALL_CHILDREN_BY_PRISON = "GET_ALL_CHILDREN_BY_PRISON";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IChild {
  id?: string;
  names?: string;
  motherNames?: string;
  location?: string;
  needAdoptation?: boolean;
  adapted?: boolean;
  dob?: any;
  file?: string;
  image?: string;
}

interface IChildList {
  type: typeof GET_ALL_CHILDREN;
  payload: {
    children: IChild[];
  };
}

interface IChildByPrisonList {
  type: typeof GET_ALL_CHILDREN_BY_PRISON;
  payload: {
    childrenByPrison: IChild[];
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ChildType = IWriteErrors | IChildList | IChildByPrisonList;
