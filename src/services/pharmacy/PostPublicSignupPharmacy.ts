import { customAxios } from "../CreateAxios";

export const PostPublicSignupPharmacy = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/pharmacy", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
