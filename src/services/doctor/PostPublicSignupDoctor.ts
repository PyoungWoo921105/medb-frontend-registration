import { customAxios } from "../CreateAxios";

export const PostPublicSignupDoctor = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/doctor", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
