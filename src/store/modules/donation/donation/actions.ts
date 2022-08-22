import axios from "axios";
import {
  ERRORS,
  GET_DONATION,
  GET_REQUISITION_DONATIONS,
  IDonation,
} from "./types";

import cogoToast from "cogo-toast";
import { AppThunk } from "../../../configureStore";
import { dispatchHandler } from "../../../helper/dispatchHandler";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const createDonation =
  (formData: IDonation, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    console.log(formData);

    try {
      const URL = "/donation";

      const { data } = await axios.post(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);

        if (formData.amount == 0) {
          history.push(`/donation`);
        } else {
          window.location.replace("https://ravesandbox.flutterwave.com/donate/xxkc8saaycpw");
        }
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

export const getRequisitionDonations =
  (requisitionId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/requisition/donation/${requisitionId}`;

      const { data } = await axios.get(URL);
      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_REQUISITION_DONATIONS,
          data: data.payload,
          dispatch,
        });
        history.push(`/prison/requisition/donations/${requisitionId}`);
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

export const getDonation =
  (donationId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/donation/${donationId}`;

      const { data } = await axios.get(URL);

      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_DONATION,
          data: data.payload,
          dispatch,
        });
        history.push(`/prison/requisition/donation/${donationId}`);
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

export const updateDonation =
  (donationId: any, formData: IDonation, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/donation/${donationId}`;

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
