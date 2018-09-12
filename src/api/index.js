import axios from 'axios';

export const getHistoryData = (resolve) => {
  return (dispatch, getState) => {
    return axios.get(`http://kaboom.rksv.net/api/historical`)
      .catch(err => {
        console.log(err);
      })
      .then(
        response => {response && response.data && resolve(response.data)},
        err => console.log(err)
    )
  }
}
