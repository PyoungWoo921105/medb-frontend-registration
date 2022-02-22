import { observable } from "mobx";

export interface CommonDataType {
  URLType: undefined | string;
  setURLType: (e: undefined | string) => void;
  selectType: undefined | string;
  setSelectType: (e: undefined | string) => void;
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
});

export { CommonData };
