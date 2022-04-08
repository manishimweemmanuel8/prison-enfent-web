import axios from "axios";
import {
  ERRORS,
  GET_ALL_APPLICATIONS,
  GET_ALL_APPROVED_APPLICATIONS,
  GET_APPLICATION,
  IApplication,
} from "./types";

import cogoToast from "cogo-toast";
import { AppThunk } from "../../../../configureStore";
import { dispatchHandler } from "../../../../helper/dispatchHandler";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const getPrisonApplication =
  (childId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/application/child/${childId}`;

      const { data } = await axios.get(URL);
      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_ALL_APPLICATIONS,
          data: data.payload,
          dispatch,
        });
        history.push(`/prison/child/application/${childId}`);
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

export const getApplication =
  (applicationId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/application/${applicationId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_APPLICATION,
          data: data.payload,
          dispatch,
        });
        history.push(`/prison/applications/${applicationId}`);
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

export const updateApplication =
  (applicationId: any, formData: IApplication, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/application/${applicationId}`;

      const { data } = await axios.patch(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/prison/notAdopted/child");
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

export const getApprovedApplication =
  (history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/application/profile`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_ALL_APPROVED_APPLICATIONS,
          data: data.payload,
          dispatch,
        });
        history.push(`/approved/applications`);
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
