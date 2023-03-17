const projectReducer = (
  state = { projects: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return { ...state, projects: [action.data, ...state.projects], uploading: false, error: false };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "GET_TIMELINE_PROJECTS_START":
      return { ...state, loading: true, error: false };
    case "GET_TIMELINE_PROJECTS_SUCCESS":
      return { ...state, projects: action.data, loading: false, error: false };
    case "GET_TIMELINE_PROJECTS_FAIL":
      return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  
  export default projectReducer;