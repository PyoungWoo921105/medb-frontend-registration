import { observable } from "mobx";

export interface CommonDataType {}

const CommonData = observable<CommonDataType>({});

export { CommonData };
