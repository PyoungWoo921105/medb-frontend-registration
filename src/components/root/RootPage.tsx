import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";

import CommonAgreePage from "../agree/common/CommonAgreePage";
import HospitalAgreePage from "../agree/hospital/HospitalAgreePage";
import PharmacyAgreePage from "../agree/pharmacy/PharmacyAgreePage";
import DoctorAgreePage from "../agree/doctor/DoctorAgreePage";

import HospitalJoinFirstPage from "../join/hospital/HospitalJoinFirstPage";
import HospitalJoinSecondPage from "../join/hospital/HospitalJoinSecondPage";
import HospitalJoinThirdPage from "../join/hospital/HospitalJoinThirdPage";

import PharmacyJoinFirstPage from "../join/pharmacy/PharmacyJoinFirstPage";
import PharmacyJoinSecondPage from "../join/pharmacy/PharmacyJoinSecondPage";
import PharmacyJoinThirdPage from "../join/pharmacy/PharmacyJoinThirdPage";

import DoctorJoinFirstPage from "../join/doctor/DoctorJoinFirstPage";

import HospitalJoinSearchBusinessAddressPage from "../join/hospital/HospitalJoinSearchBusinessAddressPage";
import HospitalJoinSearchManagerAddressPage from "../join/hospital/HospitalJoinSearchManagerAddressPage";
import HospitalJoinSearchHospitalAddressPage from "../join/hospital/HospitalJoinSearchHospitalAddressPage";

import PharmacyJoinSearchBusinessAddressPage from "../join/pharmacy/PharmacyJoinSearchBusinessAddressPage";
import PharmacyJoinSearchManagerAddressPage from "../join/pharmacy/PharmacyJoinSearchManagerAddressPage";
import PharmacyJoinSearchPharmacyAddressPage from "../join/pharmacy/PharmacyJoinSearchPharmacyAddressPage";

import useStore from "../../data/useStore";

const Frame = styled.div``;

const RootPage = observer(() => {
  const history = useHistory();

  const CommonData = useStore().CommonData;

  useEffect(() => {
    /* TODO */
    if (CommonData.URLType === "hospital") {
      history.push({ pathname: "/hospital/agree" });
    } else if (CommonData.URLType === "pharmacy") {
      history.push({ pathname: "/pharmacy/agree" });
    } else if (CommonData.URLType === "doctor") {
      /* TODO */
      history.push({ pathname: "/doctor/agree" });
    } else {
      history.push({ pathname: "/common/agree" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Frame className="Frame">
      <Route exact path="/"></Route>
      {/*  */}
      <Route path="/common/agree" component={CommonAgreePage}></Route>
      <Route path="/hospital/agree" component={HospitalAgreePage}></Route>
      <Route path="/pharmacy/agree" component={PharmacyAgreePage}></Route>
      <Route path="/doctor/agree" component={DoctorAgreePage}></Route>
      {/*  */}
      <Route path="/hospital/join/1" component={HospitalJoinFirstPage}></Route>
      <Route path="/hospital/join/serach-business-address" component={HospitalJoinSearchBusinessAddressPage}></Route>
      <Route path="/hospital/join/2" component={HospitalJoinSecondPage}></Route>
      <Route path="/hospital/join/serach-manager-address" component={HospitalJoinSearchManagerAddressPage}></Route>
      <Route path="/hospital/join/3" component={HospitalJoinThirdPage}></Route>
      <Route path="/hospital/join/serach-hospital-address" component={HospitalJoinSearchHospitalAddressPage}></Route>
      {/*  */}
      <Route path="/pharmacy/join/1" component={PharmacyJoinFirstPage}></Route>
      <Route path="/pharmacy/join/serach-business-address" component={PharmacyJoinSearchBusinessAddressPage}></Route>
      <Route path="/pharmacy/join/2" component={PharmacyJoinSecondPage}></Route>
      <Route path="/pharmacy/join/serach-manager-address" component={PharmacyJoinSearchManagerAddressPage}></Route>
      <Route path="/pharmacy/join/3" component={PharmacyJoinThirdPage}></Route>
      <Route path="/pharmacy/join/serach-pharmacy-address" component={PharmacyJoinSearchPharmacyAddressPage}></Route>
      {/*  */}
      <Route path="/doctor/join/1" component={DoctorJoinFirstPage}></Route>
      {/*  */}
    </Frame>
  );
});
export default RootPage;
