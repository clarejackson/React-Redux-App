const initialState = {
  title: "Fun Cat Facts",
  isFetching: false,
  fact: "",
  error: ""
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_FACT_START":
      return {
        ...state,
        isFetching: true
      }
      case "FETCHING_FACT_SUCCESS":
        return {
          ...state,
          isFetching: false,
          error: "",
          fact: action.payload
        }
        case "FETCHING_FACT_ERROR":
          return {
            ...state,
            isFetching: false,
            error: action.payload
          }
          default:
            return state;
  }
}