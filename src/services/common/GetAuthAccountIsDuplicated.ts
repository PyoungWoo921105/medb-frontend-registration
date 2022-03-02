import { customAxios } from "../CreateAxios";

export const GetAuthAccountIsDuplicated = async (data: any) => {
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get("/auth/account/isDuplicated", { params: data });
    return response;
  } catch (error: any) {
    return error;
  }
};
