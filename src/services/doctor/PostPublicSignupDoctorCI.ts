import { customAxios } from "../CreateAxios";

export const PostPublicSignupDoctorCI = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/doctor/ci", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
