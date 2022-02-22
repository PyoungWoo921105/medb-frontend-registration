import { observable } from "mobx";

export interface HospitalDataType {
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
  /* Delegator Email */
  delegatorEmailData: undefined | string;
  setDelegatorEmailData: (e: undefined | string) => void;
  /* Validate Check */
  joinFirstPageValidateCheckFlagData: undefined | boolean;
  setJoinFirstPageValidateCheckFlagData: (e: undefined | boolean) => void;
  /*  */
  /* Join Second Page */
  /* Manager Exist Check */
  managerExistCheckFlagData: undefined | boolean;
  setManagerExistCheckFlagData: (e: undefined | boolean) => void;
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
  setManmagerAddressData: (e: undefined | string) => void;
  managerLocationData: undefined | { longitude: number; latitude: number };
  setManagerLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Get Coordinate */
  managerCurrentLocationData: undefined | { longitude: number; latitude: number };
  setMangerCurrentLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  /* Bank Name */
  bankNameData: undefined | string;
  setBankNameData: (e: undefined | string) => void;
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
  setbankBookImageFileData: (e: undefined | File) => void;
  /* Validate Check */
  joinSecondPageValidateCheckFlagData: undefined | boolean;
  setJoinSecondPageValidateCheckFlagData: (e: undefined | boolean) => void;
  /*  */
}

const HospitalData = observable<HospitalDataType>({
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
  managerExistCheckFlagData: undefined,
  setManagerExistCheckFlagData(e: undefined | boolean) {},
  /* Manager Name */
  managerNameData: undefined,
  setManagerNameData(e: undefined | string) {},
  /* Manager Email */
  managerEmailData: undefined,
  setManagerEmailData(e: undefined | string) {},
  /* Manager Phone Number */
  managerPhoneNumberData: undefined,
  setManagerPhoneNumberData(e: undefined | string) {},
  /* Manager Address */
  managerAddressData: undefined,
  setManmagerAddressData(e: undefined | string) {},
  managerLocationData: undefined,
  setManagerLocationData(e: undefined | { longitude: number; latitude: number }) {},
  /* Get Coordinate */
  managerCurrentLocationData: undefined,
  setMangerCurrentLocationData(e: undefined | { longitude: number; latitude: number }) {},
  /* Bank Name */
  bankNameData: undefined,
  setBankNameData(e: undefined | string) {},
  /* Bank Account Number*/
  bankAccountNumberData: undefined,
  setBankAccountNumberData(e: undefined | string) {},
  /* Bank Account Owner Name */
  bankAccountOwnerNameData: undefined,
  setBankAccountOwnerNameData(e: undefined | string) {},
  /* Settlement Email */
  settlementEmailData: undefined,
  setSettlementEmailData(e: undefined | string) {},
  /* Bank Book Image */
  bankBookImageData: undefined,
  setBankBookImageData(e: undefined | { name: string; url: undefined | string }) {},
  /* Temp for Initialization */
  tempBankBookImageData: undefined,
  setTempBankBookImageData(e: undefined | { name: string; url: undefined | string }) {},
  /* Bank Book Image File */
  bankBookImageFileData: undefined,
  setbankBookImageFileData(e: undefined | File) {},
  /* Validate Check */
  joinSecondPageValidateCheckFlagData: undefined,
  setJoinSecondPageValidateCheckFlagData(e: undefined | boolean) {},
  /*  */
});

export { HospitalData };
