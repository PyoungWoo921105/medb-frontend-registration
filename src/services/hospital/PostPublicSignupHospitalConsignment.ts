import { customAxios } from "../CreateAxios";

export const PostPublicSignupHospitalConsignment = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/public/signup/hospital/consignment", data);
    return response;
  } catch (error: any) {
    return error;
  }
};
