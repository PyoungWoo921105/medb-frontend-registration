import { observable } from "mobx";

export interface DoctorDataType {
  addressData: undefined | string;
  setAddressData: (e: undefined | string) => void;
  locationData: undefined | { longitude: number; latitude: number };
  setLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
  tempLocationData: undefined | { longitude: number; latitude: number };
  setTempLocationData: (e: undefined | { longitude: number; latitude: number }) => void;
}

const DoctorData = observable<DoctorDataType>({
  addressData: undefined,
  setAddressData(e: undefined | string) {
    this.addressData = e;
  },
  locationData: undefined,
  setLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.locationData = e;
  },
  tempLocationData: undefined,
  setTempLocationData(e: undefined | { longitude: number; latitude: number }) {
    this.tempLocationData = e;
  },
});

export { DoctorData };
