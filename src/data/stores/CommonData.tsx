import { observable } from "mobx";

export interface CertificationDataType {
  name: undefined | string;
  birthday: undefined | string;
  phoneNum: undefined | string;
  gender: undefined | string;
  ci: undefined | string;
  isAllowed: boolean;
}

export interface CommonDataType {
  URLType: undefined | string;
  setURLType: (e: undefined | string) => void;
  selectType: undefined | string;
  setSelectType: (e: undefined | string) => void;

  certificationData: undefined | CertificationDataType;
  setCertificationData: (e: undefined | CertificationDataType) => void;
}

const CommonData = observable<CommonDataType>({
  URLType: undefined,
  setURLType(e: undefined | string) {
    this.URLType = e;
  },
  selectType: undefined,
  setSelectType(e: undefined | string) {
    this.selectType = e;
  },

  certificationData: undefined,
  setCertificationData(e: undefined | CertificationDataType) {
    this.certificationData = e;
  },
});

export { CommonData };
