import { observable } from "mobx";

export interface PharmacyDataType {
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
}

const PharmacyData = observable<PharmacyDataType>({
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
});

export { PharmacyData };
