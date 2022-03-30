export const ERRORS = "ERRORS";
export const GET_ALL_ITEMS = "GET_ALL_ITEMS";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_ITEM = "UPDATA_ITEM";
export const GET_ITEM = "GET_ITEM";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IItem {
  id?: string;
  names?: string;
  image?: string;
  file?: string;
  createdAt?: any;
}

interface IICreateItem {
  type: typeof CREATE_ITEM;
  payload: {
    message: string;
  };
}

interface IUpdateItem {
  type: typeof UPDATE_ITEM;
  payload: {
    message: string;
  };
}

interface IItemList {
  type: typeof GET_ALL_ITEMS;
  payload: {
    items: IItem[];
  };
}

interface IGetItem {
  type: typeof GET_ITEM;
  payload: {
    item: IItem;
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

export type ItemType =
  | IWriteErrors
  | IItemList
  | IICreateItem
  | IGetItem
  | IUploadImage
  | IUpdateItem;
