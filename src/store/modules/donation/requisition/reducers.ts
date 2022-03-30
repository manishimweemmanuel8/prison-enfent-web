import {
  CREATE_REQUISITION,
  ERRORS,
  GET_ALL_ACTIVE_REQUISITIONS,
  GET_ALL_REQUISITIONS,
  GET_ALL_REQUISITIONS_BY_PRISON,
  GET_REQUISITION,
  RequisitionType,
  UPDATE_REQUISITION,
} from "./types";

const initialState = {
  message: null,
  requisition: false,
  requisitions: [],
  activeRequisitions: [],
  requisitionsByPrison: [],
};

export const requisitionReducer = (
  state = initialState,
  { type, payload }: RequisitionType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_REQUISITIONS:
      return { ...state, requisitions: payload };
    case GET_ALL_ACTIVE_REQUISITIONS:
      return { ...state, activeRequisitions: payload };

    case GET_ALL_REQUISITIONS_BY_PRISON:
      return { ...state, requisitionsByPrison: payload };
    case GET_REQUISITION:
      return { ...state, requisition: payload };
    case CREATE_REQUISITION:
      return { ...state, message: payload };
    case UPDATE_REQUISITION:
      return { ...state, message: payload };

    default:
      return state;
  }
};
