export default (state, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return {
        ...state,
        tracks: action.payload,
      };
    case "SEARCH_TRACKS":
      return {
        ...state,
        tracks: action.payload,
        isSearch:true,
      };
    case "SET_TRACK":
      return {
        ...state,
        trackDetail:action.payload,
      };
    case "SET_ALBUM":
      return {
        ...state,
        albumdetail:action.payload,
      };
    default:
      return state;
  }
};
