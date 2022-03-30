import axios from "axios";
import { AppThunk } from "../../../../configureStore";
import { dispatchHandler } from "../../../../helper/dispatchHandler";
import {
  ERRORS,
  GET_ALL_ADOPTED_CHILDREN,
  GET_ALL_CHILDREN,
  GET_ALL_NOT_ADOPTED_CHILDREN,
  GET_CHILD,
  IChild,
} from "./types";

import cogoToast from "cogo-toast";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const createChild =
  (formData: IChild, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/child";

      const { data } = await axios.post(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/prison/child");
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

export const getChildren = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/child";

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

export const getAdoptedChildren = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/adopted/child";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_ADOPTED_CHILDREN,
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

export const getNotAdoptedChildren = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/adopted/child/not";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_NOT_ADOPTED_CHILDREN,
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

export const getChild =
  (childId: string, history: any, image: boolean): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/child/${childId}`;

      const { data } = await axios.get(URL);

      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_CHILD,
          data: data.payload,
          dispatch,
        });
        if (image) {
          history.push(`/prison/child/image/${childId}`);
        } else {
          history.push(`/prison/child/${childId}`);
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

export const updateChild =
  (childId: any, formData: IChild, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/child/${childId}`;

      const { data } = await axios.patch(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/prison/child");
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

export const uploadImage =
  (childId: any, information: any, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/child/uploadImage/${childId}`;

      const file = information.name;
      const formData = new FormData();
      formData.append("file", information);

      const { data } = await axios.post(URL, formData);
      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        history.push("/prison/child");
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
