// importing action consts
import { SET_LIVE_DATA } from './../constants';

// ------------------------------------
// Reducers
// ------------------------------------
const initState = {
  LiveData: {
    Data: []
  },
}

// Action handlers //

export default (state = initState, action) => {
  switch(action.type) {
    case SET_LIVE_DATA :
    const data = state.Data;
    data && action.payload && action.payload.data && data.push(action.payload.data)
    return {...state, Data: data};
    default :
    return state
  }
}
