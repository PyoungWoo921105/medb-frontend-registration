import { observable } from "mobx";

export interface HospitalDataType {
  /* Consign Page */
  /* Identifier */
  hospitalCodeData: undefined | null | string;
  setHospitalCodeData: (e: undefined | null | string) => void;
  /* Join First Page */
  /* Business Name */
  businessNameData: undefined | string;
  setBusinessNameData: (e: undefined | string) => void;
  /* Business License Number */
  businessLicenseNumberData: undefined | string;
  setBusinessLicenseNumberData: (e: undefined | string) => void;
  /* Business Address */
  businessAddressData: undefined | string;
  setBusinessAddressData: (e: undefined | string) => void;
  businessLocationData: undefined | { longitude: number; latitude: number };
  setBusinessLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Get Coordinate */
  businessCurrentLocationData: undefined | { longitude: number; latitude: number };
  setBusinessCurrentLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Corporate Number */
  corporateNumberData: undefined | string;
  setCorporateNumberData: (e: undefined | string) => void;
  /* Business License Image */
  businessLicenseImageData: undefined | { name: string; url: undefined | string };
  setBusinessLicenseImageData: (e: undefined | { name: string; url: undefined | string }) => void;
  /* Temp for Initialization */
  tempBusinessLicenseImageData: undefined | { name: string; url: undefined | string };
  setTempBusinessLicenseImageData: (e: undefined | { name: string; url: undefined | string }) => void;
  /* Business License Image File */
  businessLicenseImageFileData: undefined | File;
  setBusinessLicenseImageFileData: (e: undefined | File) => void;
  /* Delegator Name */
  delegatorNameData: undefined | string;
  setDelegatorNameData: (e: undefined | string) => void;
  /* Delegator Birthday */
  delegatorBirthdayData: undefined | string;
  setDelegatorBirthdayData: (e: undefined | string) => void;
  /* Delegator Phone Number */
  delegatorPhoneNumberData: undefined | string;
  setDelegatorPhoneNumberData: (e: undefined | string) => void;
  /* Delegator Email */
  delegatorEmailData: undefined | string;
  setDelegatorEmailData: (e: undefined | string) => void;
  /* Validate Check */
  joinFirstPageValidateCheckFlagData: undefined | boolean;
  setJoinFirstPageValidateCheckFlagData: (e: undefined | boolean) => void;
  /*  */
  /* Join Second Page */
  /* Manager Exist Check */
  managerExistData: undefined | boolean;
  setManagerExistData: (e: undefined | boolean) => void;
  /* Manager Name */
  managerNameData: undefined | string;
  setManagerNameData: (e: undefined | string) => void;
  /* Manager Email */
  managerEmailData: undefined | string;
  setManagerEmailData: (e: undefined | string) => void;
  /* Manager Phone Number */
  managerPhoneNumberData: undefined | string;
  setManagerPhoneNumberData: (e: undefined | string) => void;
  /* Manager Address */
  managerAddressData: undefined | string;
  setManagerAddressData: (e: undefined | string) => void;
  managerLocationData: undefined | { longitude: number; latitude: number };
  setManagerLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Get Coordinate */
  managerCurrentLocationData: undefined | { longitude: number; latitude: number };
  setManagerCurrentLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Bank Name */
  bankNameData: undefined | string;
  setBankNameData: (e: undefined | string) => void;
  customBankNameData: undefined | string;
  setCustomBankNameData: (e: undefined | string) => void;
  /* Bank Account Number*/
  bankAccountNumberData: undefined | string;
  setBankAccountNumberData: (e: undefined | string) => void;
  /* Bank Account Owner Name */
  bankAccountOwnerNameData: undefined | string;
  setBankAccountOwnerNameData: (e: undefined | string) => void;
  /* Settlement Email */
  settlementEmailData: undefined | string;
  setSettlementEmailData: (e: undefined | string) => void;
  /* Bank Book Image */
  bankBookImageData: undefined | { name: string; url: undefined | string };
  setBankBookImageData: (e: undefined | { name: string; url: undefined | string }) => void;
  /* Temp for Initialization */
  tempBankBookImageData: undefined | { name: string; url: undefined | string };
  setTempBankBookImageData: (e: undefined | { name: string; url: undefined | string }) => void;
  /* Bank Book Image File */
  bankBookImageFileData: undefined | File;
  setBankBookImageFileData: (e: undefined | File) => void;
  /* Validate Check */
  joinSecondPageValidateCheckFlagData: undefined | boolean;
  setJoinSecondPageValidateCheckFlagData: (e: undefined | boolean) => void;
  /*  */
  /* Join Third Page */
  /* Account ID */
  accountIDData: undefined | string;
  setAccountIDData: (e: undefined | string) => void;
  /* Account ID Validate Check*/
  accountIDDataValidateFlagData: undefined | boolean;
  setAccountIDDataValidateFlagData: (e: undefined | boolean) => void;
  /* Account Password */
  accountPasswordData: undefined | string;
  setAccountPasswordData: (e: undefined | string) => void;
  /* Confirmed Account Password */
  confirmedAccountPasswordData: undefined | string;
  setConfirmedAccountPasswordData: (e: undefined | string) => void;
  /* Hospital Name */
  hospitalNameData: undefined | string;
  setHospitalNameData: (e: undefined | string) => void;
  /* Hospital Phone Number */
  hospitalPhoneNumberData: undefined | string;
  setHospitalPhoneNumberData: (e: undefined | string) => void;
  /* Hospital Fax Number */
  hospitalFaxNumberData: undefined | string;
  setHospitalFaxNNumberData: (e: undefined | string) => void;
  /* Hospital Address */
  hospitalAddressData: undefined | string;
  setHospitalAddressData: (e: undefined | string) => void;
  hospitalLocationData: undefined | { longitude: number; latitude: number };
  setHospitalLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Get Coordinate */
  hospitalCurrentLocationData: undefined | { longitude: number; latitude: number };
  setHospitalCurrentLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Validate Check */
  joinThirdPageValidateCheckFlagData: undefined | boolean;
  setJoinThirdPageValidateCheckFlagData: (e: undefined | boolean) => void;
  /*  */
  /* Join Fourth Page */
  /* Delegator Doctor Name */
  delegatorDoctorNameData: undefined | string;
  setDelegatorDoctorNameData: (e: undefined | string) => void;
  /* Delegator Doctor Birthday */
  delegatorDoctorBirthdayData: undefined | string;
  setDelegatorDoctorBirthdayData: (e: undefined | string) => void;
  /* Delegator Doctor Phone Number */
  delegatorDoctorPhoneNumberData: undefined | string;
  setDelegatorDoctorPhoneNumberData: (e: undefined | string) => void;
  /* Delegator Doctor Email */
  delegatorDoctorEmailData: undefined | string;
  setDelegatorDoctorEmailData: (e: undefined | string) => void;
  /* Delegator Business Name */
  delegatorBusinessNameData: undefined | string;
  setDelegatorBusinessNameData: (e: undefined | string) => void;
  /* Delegator Doctor License Number */
  delegatorDoctorLicenseNumberData: undefined | string;
  setDelegatorDoctorLicenseNumberData: (e: undefined | string) => void;
  /* Delegator Doctor Specialist Flag */
  delegatorDoctorSpecialistFlagData: undefined | boolean;
  setDelegatorDoctorSpecialistFlagData: (e: undefined | boolean) => void;
  /* Delegator Doctor Specialist Department */
  delegatorDoctorSpecialistDepartmentData: undefined | string;
  setDelegatorDoctorSpecialistDepartmentData: (e: undefined | string) => void;
  /* Delegator Doctor Departments */
  delegatorDoctorDepratmentsData: { name: string; flag: boolean }[];
  setDelegatorDoctorDepratmentsData: (e: { name: string; flag: boolean }[]) => void;
  /* Delegator Doctor Diseases */
  delegatorDoctorDiseasesData: { name: string; flag: boolean }[];
  setDelegatorDoctorDiseasesData: (e: { name: string; flag: boolean }[]) => void;
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

const HospitalData = observable<HospitalDataType>({
  /* Consign Page */
  /* Identifier */
  hospitalCodeData: null,
  setHospitalCodeData(e: undefined | null | string) {
    this.hospitalCodeData = e;
  },
  /* Join First Page */
  /* Business Name */
  businessNameData: undefined,
  setBusinessNameData(e: undefined | string) {
    this.businessNameData = e;
  },
  /* Business License Number */
  businessLicenseNumberData: undefined,
  setBusinessLicenseNumberData(e: undefined | string) {
    this.businessLicenseNumberData = e;
  },
  /* Business Address */
  businessAddressData: undefined,
  setBusinessAddressData(e: undefined | string) {
    this.businessAddressData = e;
  },
  businessLocationData: undefined,
  setBusinessLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.businessLocationData = e;
  },
  /* Get Coordinate */
  businessCurrentLocationData: undefined,
  setBusinessCurrentLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.businessCurrentLocationData = e;
  },
  /* Corporate Number */
  corporateNumberData: undefined,
  setCorporateNumberData(e: undefined | string) {
    this.corporateNumberData = e;
  },
  /* Business License Image */
  businessLicenseImageData: undefined,
  setBusinessLicenseImageData(e: undefined | { name: string; url: undefined | string }) {
    this.businessLicenseImageData = e;
  },
  /* Temp for Initialization */
  tempBusinessLicenseImageData: undefined,
  setTempBusinessLicenseImageData(e: undefined | { name: string; url: undefined | string }) {
    this.tempBusinessLicenseImageData = e;
  },
  /* Business License Image File */
  businessLicenseImageFileData: undefined,
  setBusinessLicenseImageFileData(e: undefined | File) {
    this.businessLicenseImageFileData = e;
  },
  /* Delegator Name */
  delegatorNameData: undefined,
  setDelegatorNameData(e: undefined | string) {
    this.delegatorNameData = e;
  },
  /* Delegator Birthday */
  delegatorBirthdayData: undefined,
  setDelegatorBirthdayData(e: undefined | string) {
    this.delegatorBirthdayData = e;
  },
  /* Delegator Phone Number */
  delegatorPhoneNumberData: undefined,
  setDelegatorPhoneNumberData(e: undefined | string) {
    this.delegatorPhoneNumberData = e;
  },
  /* Delegator Email */
  delegatorEmailData: undefined,
  setDelegatorEmailData(e: undefined | string) {
    this.delegatorEmailData = e;
  },
  /* Validate Check */
  joinFirstPageValidateCheckFlagData: undefined,
  setJoinFirstPageValidateCheckFlagData(e: undefined | boolean) {
    this.joinFirstPageValidateCheckFlagData = e;
  },
  /*  */
  /* Join Second Page */
  /* Manager Exist Check */
  managerExistData: undefined,
  setManagerExistData(e: undefined | boolean) {
    this.managerExistData = e;
  },
  /* Manager Name */
  managerNameData: undefined,
  setManagerNameData(e: undefined | string) {
    this.managerNameData = e;
  },
  /* Manager Email */
  managerEmailData: undefined,
  setManagerEmailData(e: undefined | string) {
    this.managerEmailData = e;
  },
  /* Manager Phone Number */
  managerPhoneNumberData: undefined,
  setManagerPhoneNumberData(e: undefined | string) {
    this.managerPhoneNumberData = e;
  },
  /* Manager Address */
  managerAddressData: undefined,
  setManagerAddressData(e: undefined | string) {
    this.managerAddressData = e;
  },
  managerLocationData: undefined,
  setManagerLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.managerLocationData = e;
  },
  /* Get Coordinate */
  managerCurrentLocationData: undefined,
  setManagerCurrentLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.managerCurrentLocationData = e;
  },
  /* Bank Name */
  bankNameData: undefined,
  setBankNameData(e: undefined | string) {
    this.bankNameData = e;
  },
  customBankNameData: undefined,
  setCustomBankNameData(e: undefined | string) {
    this.customBankNameData = e;
  },
  /* Bank Account Number*/
  bankAccountNumberData: undefined,
  setBankAccountNumberData(e: undefined | string) {
    this.bankAccountNumberData = e;
  },
  /* Bank Account Owner Name */
  bankAccountOwnerNameData: undefined,
  setBankAccountOwnerNameData(e: undefined | string) {
    this.bankAccountOwnerNameData = e;
  },
  /* Settlement Email */
  settlementEmailData: undefined,
  setSettlementEmailData(e: undefined | string) {
    this.settlementEmailData = e;
  },
  /* Bank Book Image */
  bankBookImageData: undefined,
  setBankBookImageData(e: undefined | { name: string; url: undefined | string }) {
    this.bankBookImageData = e;
  },
  /* Temp for Initialization */
  tempBankBookImageData: undefined,
  setTempBankBookImageData(e: undefined | { name: string; url: undefined | string }) {
    this.tempBankBookImageData = e;
  },
  /* Bank Book Image File */
  bankBookImageFileData: undefined,
  setBankBookImageFileData(e: undefined | File) {
    this.bankBookImageFileData = e;
  },
  /* Validate Check */
  joinSecondPageValidateCheckFlagData: undefined,
  setJoinSecondPageValidateCheckFlagData(e: undefined | boolean) {
    this.joinSecondPageValidateCheckFlagData = e;
  },
  /*  */
  /* Join Third Page */
  /* Account ID */
  accountIDData: undefined,
  setAccountIDData(e: undefined | string) {
    this.accountIDData = e;
  },
  /* Account ID Validate Check*/
  accountIDDataValidateFlagData: undefined,
  setAccountIDDataValidateFlagData(e: undefined | boolean) {
    this.accountIDDataValidateFlagData = e;
  },
  /* Account Password */
  accountPasswordData: undefined,
  setAccountPasswordData(e: undefined | string) {
    this.accountPasswordData = e;
  },
  /* Confirmed Account Password */
  confirmedAccountPasswordData: undefined,
  setConfirmedAccountPasswordData(e: undefined | string) {
    this.confirmedAccountPasswordData = e;
  },
  /* Hospital Name */
  hospitalNameData: undefined,
  setHospitalNameData(e: undefined | string) {
    this.hospitalNameData = e;
  },
  /* Hospital Phone Number */
  hospitalPhoneNumberData: undefined,
  setHospitalPhoneNumberData(e: undefined | string) {
    this.hospitalPhoneNumberData = e;
  },
  /* Hospital Fax Number */
  hospitalFaxNumberData: undefined,
  setHospitalFaxNNumberData(e: undefined | string) {
    this.hospitalFaxNumberData = e;
  },
  /* Hospital Address */
  hospitalAddressData: undefined,
  setHospitalAddressData(e: undefined | string) {
    this.hospitalAddressData = e;
  },
  hospitalLocationData: undefined,
  setHospitalLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.hospitalLocationData = e;
  },
  /* Get Coordinate */
  hospitalCurrentLocationData: undefined,
  setHospitalCurrentLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.hospitalCurrentLocationData = e;
  },
  /* Validate Check */
  joinThirdPageValidateCheckFlagData: undefined,
  setJoinThirdPageValidateCheckFlagData(e: undefined | boolean) {
    this.joinThirdPageValidateCheckFlagData = e;
  },
  /*  */
  /* Join Fourth Page */
  /* Delegator Doctor Name */
  delegatorDoctorNameData: undefined,
  setDelegatorDoctorNameData(e: undefined | string) {
    this.delegatorDoctorNameData = e;
  },
  /* Delegator Doctor Birthday */
  delegatorDoctorBirthdayData: undefined,
  setDelegatorDoctorBirthdayData(e: undefined | string) {
    this.delegatorDoctorBirthdayData = e;
  },
  /* Delegator Doctor Phone Number */
  delegatorDoctorPhoneNumberData: undefined,
  setDelegatorDoctorPhoneNumberData(e: undefined | string) {
    this.delegatorDoctorPhoneNumberData = e;
  },
  /* Delegator Doctor Email */
  delegatorDoctorEmailData: undefined,
  setDelegatorDoctorEmailData(e: undefined | string) {
    this.delegatorDoctorEmailData = e;
  },
  /* Delegator Business Name */
  delegatorBusinessNameData: undefined,
  setDelegatorBusinessNameData(e: undefined | string) {
    this.delegatorBusinessNameData = e;
  },
  /* Delegator Doctor License Number */
  delegatorDoctorLicenseNumberData: undefined,
  setDelegatorDoctorLicenseNumberData(e: undefined | string) {
    this.delegatorDoctorLicenseNumberData = e;
  },
  /* Delegator Doctor Specialist Flag */
  delegatorDoctorSpecialistFlagData: undefined,
  setDelegatorDoctorSpecialistFlagData(e: undefined | boolean) {
    this.delegatorDoctorSpecialistFlagData = e;
  },
  /* Delegator Doctor Specialist Department */
  delegatorDoctorSpecialistDepartmentData: undefined,
  setDelegatorDoctorSpecialistDepartmentData(e: undefined | string) {
    this.delegatorDoctorSpecialistDepartmentData = e;
  },
  /* Delegator Doctor Departments */
  delegatorDoctorDepratmentsData: [],
  setDelegatorDoctorDepratmentsData(e: { name: string; flag: boolean }[]) {
    this.delegatorDoctorDepratmentsData = e;
  },
  /* Delegator Doctor Diseases */
  delegatorDoctorDiseasesData: [],
  setDelegatorDoctorDiseasesData(e: { name: string; flag: boolean }[]) {
    this.delegatorDoctorDiseasesData = e;
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

export { HospitalData };
