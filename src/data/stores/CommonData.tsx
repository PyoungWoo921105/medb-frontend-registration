import { observable } from "mobx";

export interface CommonDataType {
  URLType: string;
  setURLType: (e: string) => void;
  selectType: string;
  setSelectType: (e: string) => void;
}

const CommonData = observable<CommonDataType>({
  URLType: "",
  setURLType(e: string) {
    this.URLType = e;
  },
  selectType: "",
  setSelectType(e: string) {
    this.selectType = e;
  },
});

export { CommonData };
