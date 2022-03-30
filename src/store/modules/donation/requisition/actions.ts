import axios from "axios";
import { AppThunk } from "../../../configureStore";
import { dispatchHandler } from "../../../helper/dispatchHandler";
import {
  ERRORS,
  GET_ALL_ACTIVE_REQUISITIONS,
  GET_ALL_REQUISITIONS,
  GET_ALL_REQUISITIONS_BY_PRISON,
  GET_REQUISITION,
  IRequisition,
} from "./types";

import cogoToast from "cogo-toast";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const createRequisition =
  (formData: IRequisition, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/requisition";

      const { data } = await axios.post(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/prison/requisitions");
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

export const getRequisitions = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/requisition";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_REQUISITIONS,
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

export const getActiveRequisitions = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/active/requisition";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_ACTIVE_REQUISITIONS,
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

export const getRequisition =
  (itemId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/requisition/${itemId}`;

      const { data } = await axios.get(URL);

      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_REQUISITION,
          data: data.payload,
          dispatch,
        });

        history.push(`/prison/requisition/${itemId}`);
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

export const updateRequisition =
  (itemId: any, formData: IRequisition, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/requisition/${itemId}`;

      const { data } = await axios.patch(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/prison/requisitions");
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

export const getRequisitionsByPrison =
  (prisonId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/active/requisition/${prisonId}`;

      const { data } = await axios.get(URL);
      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_ALL_REQUISITIONS_BY_PRISON,
          data: data.payload,
          dispatch,
        });
        history.push(`/active/requisition/prison/${prisonId}`);
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
