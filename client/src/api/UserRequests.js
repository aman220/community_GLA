import axios from "axios";

export const getUser = async (userId) => {
  try {
    const response = await axios.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
