import {
  CREATE_DONATION,
  DonationType,
  ERRORS,
  GET_DONATION,
  GET_REQUISITION_DONATIONS,
  UPDATE_DONATION,
} from "./types";

const initialState = {
  message: null,
  donation: false,
  requisitionDonations: [],
};

export const donationReducer = (
  state = initialState,
  { type, payload }: DonationType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_REQUISITION_DONATIONS:
      return { ...state, requisitionDonations: payload };
    case GET_DONATION:
      return { ...state, donation: payload };
    case CREATE_DONATION:
      return { ...state, message: payload };
    case UPDATE_DONATION:
      return { ...state, message: payload };

    default:
      return state;
  }
};
