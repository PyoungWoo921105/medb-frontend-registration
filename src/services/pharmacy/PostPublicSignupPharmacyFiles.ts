import { customAxios } from "../CreateAxios";

export const PostPublicSignupPharmacyFiles = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/pharmacy/files", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
