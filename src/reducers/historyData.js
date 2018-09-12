// importing action consts
import { SET_HISTORY_DATA } from './../constants';

// ------------------------------------
// Reducers
// ------------------------------------
const initState = {
  HistoryData: {
    Data: []
  },
}

// Action handlers //

export default (state = initState, action) => {
  switch(action.type) {
    case SET_HISTORY_DATA :
    return {...state, Data: action.payload.data};
    default :
    return state
  }
}
