export const ERRORS = "ERRORS";
export const CREATE_DONATION = "CREATE_DONATION";
export const GET_REQUISITION_DONATIONS = "GET_REQUISITION_DONATIONS";
export const UPDATE_DONATION = "UPDATA_DONATION";
export const GET_DONATION = "GET_DONATION";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IDonation {
  id?: string;
  requisitionId?: string;
  amount?: string;
  status?: boolean;
  requisition?: any;
  profile?: any;
  createdAt?: any;
}

interface ICreateDonation {
  type: typeof CREATE_DONATION;
  payload: {
    message: string;
  };
}

interface IUpdateDonation {
  type: typeof UPDATE_DONATION;
  payload: {
    message: string;
  };
}

interface IRequisitionDonationList {
  type: typeof GET_REQUISITION_DONATIONS;
  payload: {
    requisitionDonations: IDonation[];
  };
}

interface IGetDonation {
  type: typeof GET_DONATION;
  payload: {
    donation: IDonation;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type DonationType =
  | IWriteErrors
  | ICreateDonation
  | IGetDonation
  | IUpdateDonation
  | IRequisitionDonationList;
