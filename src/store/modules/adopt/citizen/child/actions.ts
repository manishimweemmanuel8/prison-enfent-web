import axios from "axios";
import { AppThunk } from "../../../../configureStore";
import { dispatchHandler } from "../../../../helper/dispatchHandler";
import {
  ERRORS,
  GET_ALL_CHILDREN,
  GET_ALL_CHILDREN_BY_PRISON,
  IChild,
} from "./types";

import cogoToast from "cogo-toast";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const getChildren = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/adopted/child/all";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_CHILDREN,
        data: data.payload,
        dispatch,
      });
    }
  } catch (error: any) {
    if (error) {
      const data = error.response.data.message;
      showErrorMessage(data);
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
};

export const getChildrenByPrison =
  (prisonId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/adopted/child/${prisonId}`;

      const { data } = await axios.get(URL);
      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_ALL_CHILDREN_BY_PRISON,
          data: data.payload,
          dispatch,
        });
        history.push(`/prison/adopted/child/${prisonId}`);
      }
    } catch (error: any) {
      if (error) {
        const data = error.response.data.message;
        showErrorMessage(data);
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };
