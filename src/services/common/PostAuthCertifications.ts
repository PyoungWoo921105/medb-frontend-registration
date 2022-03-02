import { customAxios } from "../CreateAxios";
import UseStore from "../../data/useStore";

export const PostAuthCertifications = async (data: any) => {
  const CommonData = UseStore().CommonData;
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post("/auth/certifications", data);
    CommonData.setCertificationData(response.data);
    return response;
  } catch (error: any) {
    return error;
  }
};
