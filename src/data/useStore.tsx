import { CommonData } from "./stores/CommonData";
import { HospitalData } from "./stores/HospitalData";
import { PharmacyData } from "./stores/PharmacyData";
import { DoctorData } from "./stores/DoctorData";

export const useStore = () => {
  return {
    CommonData,
    HospitalData,
    PharmacyData,
    DoctorData,
  };
};

export default useStore;
