import axios from "axios";
export const GET_DERIVETIVES_DATA = "GET_DERIVETIVES_DATA";
export const GET_UNDERLYINGS_DATA = "GET_UNDERLYINGS_DATA";
export const SAVE_CURRENT_UNDERLYING = "SAVE_CURRENT_UNDERLYING";

const fetchUnderlayingData = async () => {
  let response;
  await axios
    .get("https://prototype.sbulltech.com/api/underlyings")
    .then((res) => (response = res.data));
  return response;
};

export const getUnderlayingData = () => {
  return async (dispatch) => {
    const data = await fetchUnderlayingData();
    dispatch({
      type: GET_UNDERLYINGS_DATA,
      payload: data?.payload,
    });
  };
};

const fetchDerivetivesData = async (token) => {
  let response;
  await axios
    .get(`https://prototype.sbulltech.com/api/derivatives/${token}`)
    .then((res) => (response = res.data));
  return response;
};

export const getDerivetivesData = (token) => {
  return async (dispatch) => {
    const data = await fetchDerivetivesData(token);
    dispatch({
      type: GET_DERIVETIVES_DATA,
      payload: data?.payload,
    });
  };
};

export const saveCurrentUnderlying = (token, name) => {
  return async (dispatch) => {
    dispatch({
      type: SAVE_CURRENT_UNDERLYING,
      payload: { token, name },
    });
  };
};
