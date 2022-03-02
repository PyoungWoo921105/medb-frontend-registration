import { customAxios } from "../CreateAxios";

export const PostPublicSignupPharmacyConsignment = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/pharmacy/consignment", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
