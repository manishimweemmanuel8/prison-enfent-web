export const ERRORS = "ERRORS";
export const GET_ALL_REQUISITIONS = "GET_ALL_REQUISITIONS";
export const GET_ALL_REQUISITIONS_BY_PRISON = "GET_ALL_REQUISITIONS_BY_PRISON";
export const GET_ALL_ACTIVE_REQUISITIONS = "GET_ALL_ACTIVE_REQUISITIONS";
export const CREATE_REQUISITION = "CREATE_REQUISITION";
export const UPDATE_REQUISITION = "UPDATA_REQUISITION";
export const GET_REQUISITION = "GET_REQUISITION";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IRequisition {
  id?: string;
  itemId?: string;
  quantity?: any;
  quality?: string;
  item?: any;
  amountPerQuantity?: any;
  createdAt?: any;
  status?: any;
}

interface ICreateRequisition {
  type: typeof CREATE_REQUISITION;
  payload: {
    message: string;
  };
}

interface IUpdateRequisition {
  type: typeof UPDATE_REQUISITION;
  payload: {
    message: string;
  };
}

interface IRequisitionList {
  type: typeof GET_ALL_REQUISITIONS;
  payload: {
    requisition: IRequisition[];
  };
}

interface IActiveRequisitionList {
  type: typeof GET_ALL_ACTIVE_REQUISITIONS;
  payload: {
    activeRequisition: IRequisition[];
  };
}
interface IRequisitionListByPrison {
  type: typeof GET_ALL_REQUISITIONS_BY_PRISON;
  payload: {
    requisitionsByPrison: IRequisition[];
  };
}

interface IGetRequisition {
  type: typeof GET_REQUISITION;
  payload: {
    requisition: IRequisition;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type RequisitionType =
  | IWriteErrors
  | IRequisitionList
  | ICreateRequisition
  | IActiveRequisitionList
  | IGetRequisition
  | IRequisitionListByPrison
  | IUpdateRequisition;
