import { customAxios } from "../CreateAxios";

export const PostPublicSignupHospital = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/hospital", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
