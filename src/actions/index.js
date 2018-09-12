import * as constants from './../constants';

// ------------------------------------
// Action creators
// ------------------------------------
export const setHistoryData = (data) => {
  return {
      type: constants.SET_HISTORY_DATA,
      payload: {
        data
      }
    }
  }

  export const setUserFormatedData = (data) => {
    return {
      type: constants.SET_USER_FORMATED_DATA,
      payload: {
        data
      }
    }
  }

  export const setLiveData = (data) => {
    return {
      type:  constants.SET_LIVE_DATA,
      payload: {
        data
      }
    }
  }
