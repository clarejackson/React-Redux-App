import axios from "axios";

export const fetchFact = () => (dispatch) => {
  dispatch({ type: "FETCHING_FACT_START"});

  axios.get("https://cat-fact.herokuapp.com")
  .then(res => {
    dispatch({ type: "FETCHING_FACT_SUCCESS", payload: res.data})
    console.log(res);
  })
  .catch(err => {
    dispatch({ type: "FETCHING_FACT_ERROR", payload: err })
    console.log(err);
  })
}