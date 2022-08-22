import axios from "axios";
import {
  LOGIN,
  ERRORS,
  ILoginParams,
  GET_ALL_USERS,
  GET_USER,
  IUser,
} from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import jwt_decode from "jwt-decode";
import cogoToast from "cogo-toast";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const authActions =
  (formData: ILoginParams, history: any): AppThunk =>
    async (dispatch) => {
      dispatchHandler({ type: ERRORS, data: null, dispatch });
      try {
        const URL = "/account/login/";

        const { data } = await axios.post(URL, formData);

        console.log(data);

        if (data.statusCode === 200) {
          dispatchHandler({ type: LOGIN, data: data, dispatch });
          const token: any = jwt_decode(data.payload);
          localStorage.setItem("TOKEN", data.payload);
          localStorage.setItem("EMAIL", token.email);
          showSuccessMessage(data.message);

          // for (var val of token.roles) {
          if (token.roles === "ADMIN") {
            history.push("/admin/dashboard");
          }

          if (token.roles === "PRISON") {
            history.push("/prison/dashboard");
          }
          if (token.roles === "CITIZEN") {
            history.push("/");
          }
          // }
        }
      } catch (error: any) {
        if (error) {
          const data = error.response.data;
          console.log(error.response.data);
          showErrorMessage(error.response.data.message);
          return dispatchHandler({
            type: ERRORS,
            data,
            dispatch,
          });
        }
      }
    };

export const getUsers = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/account";

    const { data } = await axios.get(URL);
    if (data.statusCode === 200) {
      showSuccessMessage(data.message);
      dispatchHandler({
        type: GET_ALL_USERS,
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

export const getUser =
  (userId: string, history: any, flag: string): AppThunk =>
    async (dispatch) => {
      dispatchHandler({ type: ERRORS, data: null, dispatch });
      try {
        const URL = `/account/${userId}`;

        const { data } = await axios.get(URL);
        console.log(data);

        if (data.statusCode === 200) {
          showSuccessMessage(data.message);
          dispatchHandler({
            type: GET_USER,
            data: data.payload,
            dispatch,
          });

          if (flag === "password") {
            history.push(`/admin/user/changePassword/${userId}`);
          }
          if (flag === "edit") {
            history.push(`/admin/user/${userId}`);
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

export const updateUser =
  (userId: any, formData: IUser, history: any): AppThunk =>
    async (dispatch) => {
      dispatchHandler({ type: ERRORS, data: null, dispatch });
      try {
        const URL = `/account/${userId}`;

        const { data } = await axios.patch(URL, formData);

        if (data.statusCode === 201) {
          showSuccessMessage(data.message);
          history.push("/admin/users");
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

export const changeUserPassword =
  (userId: any, formData: ILoginParams, history: any): AppThunk =>
    async (dispatch) => {
      dispatchHandler({ type: ERRORS, data: null, dispatch });
      try {
        const URL = `/account/changePassword/${userId}`;

        const { data } = await axios.patch(URL, formData);

        if (data.statusCode === 201) {
          showSuccessMessage(data.message);
          history.push("/admin/users");
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

export const createUser =
  (formData: IUser, history: any): AppThunk =>
    async (dispatch) => {
      dispatchHandler({ type: ERRORS, data: null, dispatch });

      try {
        const URL = "/account";

        const { data } = await axios.post(URL, formData);

        if (data.statusCode === 201) {
          showSuccessMessage(data.message);
          // for (var val of formData.roles) {
          if (formData.roles === "ADMIN") {
            history.push("/admin/users");
          }

          if (formData.roles === "CITIZEN") {
            history.push("/login");
          }
          // }
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

export const SignOut = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("EMAIL");
  window.location.replace("/");
};
