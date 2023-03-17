import * as AnnounceApi from '../api/AnnounceRequest'

export const getTimelineAnnounc = (id) => async(dispatch)=>{
    dispatch({type: "RETREIVING_START"})
    try {
        const { data } = await AnnounceApi.getTimelineAnnounc(id);
        dispatch({ type: "RETREIVING_SUCCESS", data: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "RETREIVING_FAIL" });
      }
}