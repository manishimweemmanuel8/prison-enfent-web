import axios from "axios";
import { AppThunk } from "../../../configureStore";
import { dispatchHandler } from "../../../helper/dispatchHandler";
import { ERRORS } from "./types";

import cogoToast from "cogo-toast";
import { GET_ALL_PROFILES, GET_PROFILE, IProfile } from "../profile/types";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const getProfiles = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/profile";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_PROFILES,
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

export const getProfile =
  (email: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      console.log(email);
      const URL = `/profile/${email}`;

      const { data } = await axios.get(URL);


      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_PROFILE,
          data: data.payload,
          dispatch,
        });
        console.log(data.payload)
        // history.push(`/admin/profile/${profileId}`);
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

export const updateProfile =
  (profileId: any, formData: IProfile, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    console.log(profileId);
    try {
      const URL = `/profile/${profileId}`;

      const { data } = await axios.patch(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/");
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
