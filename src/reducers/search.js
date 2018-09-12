import { SET_USER_FORMATED_DATA } from './../constants';

const initState = {
  Search:  {
    UserData: [],
    FormatedData: []
  }
}

export default (state = initState, action) => {
  switch(action.type) {
    case SET_USER_FORMATED_DATA:
    return {...state, Key: action.payload.key, FormatedData: action.payload.data};
    default :
    return state;
  }
}
