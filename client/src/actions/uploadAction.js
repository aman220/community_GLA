import * as UploadApi from "../api/UploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action start ho gya hy")
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" });
    try {
      const newPost = await UploadApi.uploadPost(data);
      dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPLOAD_FAIL" });
    }
  };

  export const uploadProjects = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" });
    try {
      const newProject = await UploadApi.uploadProjects(data);
      dispatch({ type: "UPLOAD_SUCCESS", data: newProject.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPLOAD_FAIL" });
    }
  };

  export const uploadAnnouncement = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" });
    try {
      const newAnnounc = await UploadApi.uploadAnnouncement(data);
      dispatch({ type: "UPLOAD_SUCCESS", data: newAnnounc.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPLOAD_FAIL" });
    }
  }