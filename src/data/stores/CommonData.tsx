import { observable } from "mobx";

export interface CommonDataType {
  registerSelectData: string;
  setRegisterSelectData: (e: string) => void;
}

const CommonData = observable<CommonDataType>({
  registerSelectData: "",
  setRegisterSelectData(e: string) {
    this.registerSelectData = e;
  },
});

export { CommonData };
