import { customAxios } from "../CreateAxios";

export const PostPublicSignupHospitalFiles = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/hospital/files", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
