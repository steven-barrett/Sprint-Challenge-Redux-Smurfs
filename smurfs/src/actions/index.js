import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {            
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {      
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
      });
  };

  export const ADD_SMURF_START = 'ADD_SMURF_START';
  export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
  export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
  export const addSmurf = item => dispatch => {
    dispatch({ type: ADD_SMURF_START });
    axios
      .post('http://localhost:3333/smurfs', item)
      .then(res => {              
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {      
        dispatch({ type: ADD_SMURF_FAILURE, payload: err.response.data.error });
      });
  };

  export const DELETE_SMURF_START = 'DELETE_SMURF_START';
  export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
  export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';
  export const deleteSmurf = id => dispatch => {
    dispatch({ type: DELETE_SMURF_START });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {              
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {      
        dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response.data.error });
      });
  };



























/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/


  // For this project you'll need at least 2 action creators for the main portion,
  //  and 2 more for the stretch problem.
  //  Be sure to include action types for each type of action creator. Also, be sure to mind
  //    the "pending" states like, fetching, creating, updating and deleting.
  //  C - addSmurf
  //  R - getSmurfs




   /*
   U - updateSmurf
   D - deleteSmurf
*/
