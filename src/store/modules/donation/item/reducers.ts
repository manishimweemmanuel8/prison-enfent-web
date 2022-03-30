import {
  CREATE_ITEM,
  ERRORS,
  GET_ALL_ITEMS,
  GET_ITEM,
  ItemType,
  UPDATE_ITEM,
  UPLOAD_IMAGE,
} from "./types";

const initialState = {
  message: null,
  item: false,
  items: [],
};

export const itemReducer = (
  state = initialState,
  { type, payload }: ItemType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_ITEMS:
      return { ...state, items: payload };
    case GET_ITEM:
      return { ...state, item: payload };
    case CREATE_ITEM:
      return { ...state, message: payload };
    case UPDATE_ITEM:
      return { ...state, message: payload };
    case UPLOAD_IMAGE:
      return { ...state, message: payload };
    default:
      return state;
  }
};
