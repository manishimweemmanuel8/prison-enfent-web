import {
  ChildType,
  CREATE_CHILD,
  ERRORS,
  GET_ALL_ADOPTED_CHILDREN,
  GET_ALL_CHILDREN,
  GET_ALL_NOT_ADOPTED_CHILDREN,
  GET_CHILD,
  UPDATE_CHILD,
  UPLOAD_IMAGE,
} from "./types";

const initialState = {
  message: null,
  child: false,
  children: [],
  adoptedChildren: [],
  notAdoptedChildren: [],
};

export const childReducer = (
  state = initialState,
  { type, payload }: ChildType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_CHILDREN:
      return { ...state, children: payload };
    case GET_ALL_ADOPTED_CHILDREN:
      return { ...state, adoptedChildren: payload };
    case GET_ALL_NOT_ADOPTED_CHILDREN:
      return { ...state, notAdoptedChildren: payload };
    case GET_CHILD:
      return { ...state, child: payload };
    case CREATE_CHILD:
      return { ...state, message: payload };
    case UPDATE_CHILD:
      return { ...state, message: payload };
    case UPLOAD_IMAGE:
      return { ...state, message: payload };

    default:
      return state;
  }
};
