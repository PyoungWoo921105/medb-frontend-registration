import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";

import CommonAgreePage from "../agree/common/CommonAgreePage";
import HospitalAgreePage from "../agree/hospital/HospitalAgreePage";
import PharmacyAgreePage from "../agree/pharmacy/PharmacyAgreePage";
import DoctorAgreePage from "../agree/doctor/DoctorAgreePage";

import HospitalJoinFirstStepPage from "../join/hospital/HospitalJoinFirstStepPage";
import HospitalJoinSecondStepPage from "../join/hospital/HospitalJoinSecondStepPage";
import HospitalJoinThirdStepPage from "../join/hospital/HospitalJoinThirdStepPage";

import PharmacyJoinFirstStepPage from "../join/pharmacy/PharmacyJoinFirstStepPage";
import PharmacyJoinSecondStepPage from "../join/pharmacy/PharmacyJoinSecondStepPage";
import PharmacyJoinThirdStepPage from "../join/pharmacy/PharmacyJoinThirdStepPage";

import DoctorJoinFirstStepPage from "../join/doctor/DoctorJoinFirstStepPage";

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
      <Route path="/hospital/join/firstStep" component={HospitalJoinFirstStepPage}></Route>
      <Route path="/hospital/join/businessAddress" component={HospitalJoinSearchBusinessAddressPage}></Route>
      <Route path="/hospital/join/secondStep" component={HospitalJoinSecondStepPage}></Route>
      <Route path="/hospital/join/managerAddress" component={HospitalJoinSearchManagerAddressPage}></Route>
      <Route path="/hospital/join/thirdStep" component={HospitalJoinThirdStepPage}></Route>
      <Route path="/hospital/join/hospitalAddress" component={HospitalJoinSearchHospitalAddressPage}></Route>
      {/*  */}
      <Route path="/pharmacy/join/firstStep" component={PharmacyJoinFirstStepPage}></Route>
      <Route path="/pharmacy/join/businessAddress" component={PharmacyJoinSearchBusinessAddressPage}></Route>
      <Route path="/pharmacy/join/secondStep" component={PharmacyJoinSecondStepPage}></Route>
      <Route path="/pharmacy/join/managerAddress" component={PharmacyJoinSearchManagerAddressPage}></Route>
      <Route path="/pharmacy/join/thirdStep" component={PharmacyJoinThirdStepPage}></Route>
      <Route path="/pharmacy/join/pharmacyAddress" component={PharmacyJoinSearchPharmacyAddressPage}></Route>
      {/*  */}
      <Route path="/doctor/join/firstStep" component={DoctorJoinFirstStepPage}></Route>
      {/*  */}
    </Frame>
  );
});
export default RootPage;
