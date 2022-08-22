export const ERRORS = "ERRORS";
export const GET_ALL_CHILDREN = "GET_ALL_CHILDREN";
export const CREATE_CHILD = "CREATE_CHILD";
export const UPDATE_CHILD = "UPDATA_CHILD";
export const GET_CHILD = "GET_CHILD";
export const GET_ALL_ADOPTED_CHILDREN = "GET_ALL_ADOPTED_CHILDREN";
export const GET_ALL_NOT_ADOPTED_CHILDREN = "GET_ALL_NOT_ADOPTED_CHILDREN";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

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
  from?:any;
  to?:any;
}

interface ICreateChild {
  type: typeof CREATE_CHILD;
  payload: {
    message: string;
  };
}

interface IUpdateChild {
  type: typeof UPDATE_CHILD;
  payload: {
    message: string;
  };
}

interface IChildList {
  type: typeof GET_ALL_CHILDREN;
  payload: {
    children: IChild[];
  };
}

interface IAdoptedChildList {
  type: typeof GET_ALL_ADOPTED_CHILDREN;
  payload: {
    adoptedChildren: IChild[];
  };
}

interface INotAdoptedChildList {
  type: typeof GET_ALL_NOT_ADOPTED_CHILDREN;
  payload: {
    notAdoptedChildren: IChild[];
  };
}

interface IGetChild {
  type: typeof GET_CHILD;
  payload: {
    child: IChild;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

interface IUploadImage {
  type: typeof UPLOAD_IMAGE;
  payload: {
    message: string;
  };
}

export type ChildType =
  | IWriteErrors
  | IChildList
  | IAdoptedChildList
  | INotAdoptedChildList
  | ICreateChild
  | IGetChild
  | IUploadImage
  | IUpdateChild;
