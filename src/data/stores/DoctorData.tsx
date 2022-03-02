import { observable } from "mobx";

export interface DoctorDataType {
  /*  */
  /* Root Page */
  /* Identifier */
  doctorCodeData: undefined | null | string;
  setDoctorCodeData: (e: undefined | null | string) => void;
  hospitalNameData: undefined | null | string;
  setHospitalNameData: (e: undefined | null | string) => void;
  /* Join First Page */
  /* Companion Doctor Name */
  companionDoctorNameData: undefined | string;
  setCompanionDoctorNameData: (e: undefined | string) => void;
  /* Companion Doctor Birthday */
  companionDoctorBirthdayData: undefined | string;
  setCompanionDoctorBirthdayData: (e: undefined | string) => void;
  /* Companion Doctor Phone Number */
  companionDoctorPhoneNumberData: undefined | string;
  setCompanionDoctorPhoneNumberData: (e: undefined | string) => void;
  /* Companion Doctor Email */
  companionDoctorEmailData: undefined | string;
  setCompanionDoctorEmailData: (e: undefined | string) => void;
  /* Companion Business Name */
  companionBusinessNameData: undefined | string;
  setCompanionBusinessNameData: (e: undefined | string) => void;
  /* Companion Doctor License Number */
  companionDoctorLicenseNumberData: undefined | string;
  setCompanionDoctorLicenseNumberData: (e: undefined | string) => void;
  /* Companion Doctor Specialist Flag */
  companionDoctorSpecialistFlagData: undefined | boolean;
  setCompanionDoctorSpecialistFlagData: (e: undefined | boolean) => void;
  /* Companion Doctor Specialist Department */
  companionDoctorSpecialistDepartmentData: undefined | string;
  setCompanionDoctorSpecialistDepartmentData: (e: undefined | string) => void;
  /* Companion Doctor Departments */
  companionDoctorDepratmentsData: { name: string; flag: boolean }[];
  setCompanionDoctorDepratmentsData: (e: { name: string; flag: boolean }[]) => void;
  /* Companion Doctor Diseases */
  companionDoctorDiseasesData: { name: string; flag: boolean }[];
  setCompanionDoctorDiseasesData: (e: { name: string; flag: boolean }[]) => void;
  /* Companion Doctor Flag */
  companionDoctorFlagData: undefined | boolean;
  setCompanionDoctorFlagData: (e: undefined | boolean) => void;
  /* Companion Doctor Phone Number */
  companionDoctorPhoneNumberListData: string[];
  setCompanionDoctorPhoneNumberListData: (e: string[]) => void;
  pushCompanionDoctorPhoneNumberListData: (e: string) => void;
  spliceCompanionDoctorPhoneNumberListData: (e: number) => void;
  /* Validate Check */
  joinFourthPageValidateCheckFlagData: undefined | boolean;
  setJoinFourthPageValidateCheckFlagData: (e: undefined | boolean) => void;
  /*  */
}

const DoctorData = observable<DoctorDataType>({
  /*  */
  /* Root Page */
  /* Identifier */
  doctorCodeData: null,
  setDoctorCodeData(e: undefined | null | string) {
    this.doctorCodeData = e;
  },
  hospitalNameData: null,
  setHospitalNameData(e: undefined | null | string) {
    this.hospitalNameData = e;
  },
  /* Join Fourth Page */
  /* Companion Doctor Name */
  companionDoctorNameData: undefined,
  setCompanionDoctorNameData(e: undefined | string) {
    this.companionDoctorNameData = e;
  },
  /* Companion Doctor Birthday */
  companionDoctorBirthdayData: undefined,
  setCompanionDoctorBirthdayData(e: undefined | string) {
    this.companionDoctorBirthdayData = e;
  },
  /* Companion Doctor Phone Number */
  companionDoctorPhoneNumberData: undefined,
  setCompanionDoctorPhoneNumberData(e: undefined | string) {
    this.companionDoctorPhoneNumberData = e;
  },
  /* Companion Doctor Email */
  companionDoctorEmailData: undefined,
  setCompanionDoctorEmailData(e: undefined | string) {
    this.companionDoctorEmailData = e;
  },
  /* Companion Business Name */
  companionBusinessNameData: undefined,
  setCompanionBusinessNameData(e: undefined | string) {
    this.companionBusinessNameData = e;
  },
  /* Companion Doctor License Number */
  companionDoctorLicenseNumberData: undefined,
  setCompanionDoctorLicenseNumberData(e: undefined | string) {
    this.companionDoctorLicenseNumberData = e;
  },
  /* Companion Doctor Specialist Flag */
  companionDoctorSpecialistFlagData: undefined,
  setCompanionDoctorSpecialistFlagData(e: undefined | boolean) {
    this.companionDoctorSpecialistFlagData = e;
  },
  /* Companion Doctor Specialist Department */
  companionDoctorSpecialistDepartmentData: undefined,
  setCompanionDoctorSpecialistDepartmentData(e: undefined | string) {
    this.companionDoctorSpecialistDepartmentData = e;
  },
  /* Companion Doctor Departments */
  companionDoctorDepratmentsData: [],
  setCompanionDoctorDepratmentsData(e: { name: string; flag: boolean }[]) {
    this.companionDoctorDepratmentsData = e;
  },
  /* Companion Doctor Diseases */
  companionDoctorDiseasesData: [],
  setCompanionDoctorDiseasesData(e: { name: string; flag: boolean }[]) {
    this.companionDoctorDiseasesData = e;
  },
  /* Companion Doctor Flag */
  companionDoctorFlagData: undefined,
  setCompanionDoctorFlagData(e: undefined | boolean) {
    this.companionDoctorFlagData = e;
  },
  /* Companion Doctor Phone Number */
  companionDoctorPhoneNumberListData: [],
  setCompanionDoctorPhoneNumberListData(e: string[]) {
    this.companionDoctorPhoneNumberListData = e;
  },
  pushCompanionDoctorPhoneNumberListData(e: string) {
    this.companionDoctorPhoneNumberListData.push(e);
  },
  spliceCompanionDoctorPhoneNumberListData(e: number) {
    this.companionDoctorPhoneNumberListData.splice(e, 1);
  },
  /* Validate Check */
  joinFourthPageValidateCheckFlagData: undefined,
  setJoinFourthPageValidateCheckFlagData(e: undefined | boolean) {
    this.joinFourthPageValidateCheckFlagData = e;
  },
  /*  */
});

export { DoctorData };
