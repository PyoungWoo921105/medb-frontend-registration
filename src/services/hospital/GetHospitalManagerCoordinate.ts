import axios from "axios";
import UseStore from "../../data/useStore";

export const GetHospitalManagerCoordinate = async (data: any) => {
  const { address } = data;
  const HospitalData = UseStore().HospitalData;
  try {
    /* axios.get(url[, config]) */
    axios.defaults.headers.common["Authorization"] = `KakaoAK ccb19825dd8f57563382211962178102`;
    const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`);
    HospitalData.setManagerCurrentLocationData({
      latitude: response.data.documents[0].y,
      longitude: response.data.documents[0].x,
    });
    return response;
  } catch (error: any) {
    return error;
  }
};
