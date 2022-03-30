import axios from "axios";
import { AppThunk } from "../../../configureStore";
import { dispatchHandler } from "../../../helper/dispatchHandler";
import { ERRORS, GET_ALL_ITEMS, GET_ITEM, IItem } from "./types";

import cogoToast from "cogo-toast";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const createItem =
  (formData: IItem, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/item";

      const { data } = await axios.post(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/admin/items");
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

export const getItems = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/item";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_ITEMS,
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

export const getItem =
  (itemId: string, history: any, image: boolean): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/item/${itemId}`;

      const { data } = await axios.get(URL);

      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        dispatchHandler({
          type: GET_ITEM,
          data: data.payload,
          dispatch,
        });
        if (image) {
          history.push(`/admin/item/image/${itemId}`);
        } else {
          history.push(`/admin/item/${itemId}`);
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

export const updateItem =
  (itemId: any, formData: IItem, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/item/${itemId}`;

      const { data } = await axios.patch(URL, formData);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/admin/items");
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

export const uploadItemImage =
  (itemId: any, information: any, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/item/uploadImage/${itemId}`;

      const formData = new FormData();
      formData.append("file", information);

      const { data } = await axios.post(URL, formData);
      if (data.statusCode === 200) {
        showSuccessMessage(data.message);
        history.push("/admin/items");
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
