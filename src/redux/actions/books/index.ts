import { Dispatch } from "redux";

export const locateBook = () => async (dispatch: Dispatch) => {
  dispatch({ type: "" });

  try {
    //   const { data } = await request({
    //     method: 'GET',
    //     url: '/me/sessions',
    //   });
    //   const { sessions } = data;
    //   dispatch({ type: ACTIVE_SESSIONS_GET_SUCCESS, payload: sessions });
  } catch (e) {
    //   errorHandler(e.response ? e.response.status : e.message);
  }
};
