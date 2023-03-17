const announcReducer = (
    state = { announcement: [], loading: false, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {
      
      case "UPLOAD_START":
        return { ...state, error: false, uploading: true };
      case "UPLOAD_SUCCESS":
        return { ...state, announcement: [action.data, ...state.announcement], uploading: false, error: false };
      case "UPLOAD_FAIL":
        return { ...state, uploading: false, error: true };
      default:
        return state;
    }
  };
  
  export default announcReducer;