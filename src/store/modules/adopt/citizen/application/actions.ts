import axios from "axios";
import { ERRORS, IApplication } from "./types";

import cogoToast from "cogo-toast";
import { AppThunk } from "../../../../configureStore";
import { dispatchHandler } from "../../../../helper/dispatchHandler";

const showErrorMessage = (message: string) => {
  cogoToast.error(message, { hideAfter: 5, position: "top-right" });
};

const showSuccessMessage = (message: string) => {
  cogoToast.success(message, { hideAfter: 5, position: "top-right" });
};

export const createApplication =
  (formData: IApplication, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/application";

      const { data } = await axios.post(URL, formData);
      console.log(data);

      if (data.statusCode === 201) {
        showSuccessMessage(data.message);
        history.push("/donation");
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

// export const getPrisons = (): AppThunk => async (dispatch) => {
//   dispatchHandler({ type: ERRORS, data: null, dispatch });
//   try {
//     const URL = "/prison";

//     const { data } = await axios.get(URL);
//     if (data.statusCode === 200) {
//       showSuccessMessage(data.message);
//       dispatchHandler({
//         type: GET_ALL_PRISONS,
//         data: data.payload,
//         dispatch,
//       });
//     }
//   } catch (error: any) {
//     if (error) {
//       const data = error.response.data.message;
//       showErrorMessage(data);
//       return dispatchHandler({
//         type: ERRORS,
//         data,
//         dispatch,
//       });
//     }
//   }
// };

// export const getPrison =
//   (prisonId: string, history: any): AppThunk =>
//   async (dispatch) => {
//     dispatchHandler({ type: ERRORS, data: null, dispatch });
//     try {
//       const URL = `/prison/${prisonId}`;

//       const { data } = await axios.get(URL);

//       if (data.statusCode === 200) {
//         showSuccessMessage(data.message);
//         dispatchHandler({
//           type: GET_PRISON,
//           data: data.payload,
//           dispatch,
//         });
//         history.push(`/admin/prison/${prisonId}`);
//       }
//     } catch (error: any) {
//       if (error) {
//         const data = error.response.data.message;
//         showErrorMessage(data);
//         return dispatchHandler({
//           type: ERRORS,
//           data,
//           dispatch,
//         });
//       }
//     }
//   };

// export const updatePrison =
//   (prisonId: any, formData: IPrison, history: any): AppThunk =>
//   async (dispatch) => {
//     dispatchHandler({ type: ERRORS, data: null, dispatch });
//     try {
//       const URL = `/prison/${prisonId}`;

//       const { data } = await axios.patch(URL, formData);

//       if (data.statusCode === 201) {
//         showSuccessMessage(data.message);
//         history.push("/admin/prisons");
//       }
//     } catch (error: any) {
//       if (error) {
//         const data = error.response.data.message;
//         showErrorMessage(data);
//         return dispatchHandler({
//           type: ERRORS,
//           data,
//           dispatch,
//         });
//       }
//     }
//   };
