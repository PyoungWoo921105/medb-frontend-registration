import React, { useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";

import CommonAgreePage from "../agree/common/CommonAgreePage";
import HospitalAgreePage from "../agree/hospital/HospitalAgreePage";
import PharmacyAgreePage from "../agree/pharmacy/PharmacyAgreePage";
import DoctorAgreePage from "../agree/doctor/DoctorAgreePage";

import HospitalAgreeConsignmentPage from "../agree/hospital/HospitalAgreeConsignmentPage";
import PharmacyAgreeConsignmentPage from "../agree/pharmacy/PharmacyAgreeConsignmentPage";

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
  const location = useLocation();

  const CommonData = useStore().CommonData;
  const HospitalData = useStore().HospitalData;
  const PharmacyData = useStore().PharmacyData;

  useEffect(() => {
    if (location.pathname === "/common") {
      CommonData.setURLType("common");
      history.push({ pathname: "/common/agree" });
    } else if (location.pathname === "/hospital") {
      CommonData.setURLType("hospital");
      history.push({ pathname: "/hospital/agree" });
    } else if (location.pathname === "/pharmacy") {
      CommonData.setURLType("pharmacy");
      history.push({ pathname: "/pharmacy/agree" });
    } else if (location.pathname === "/doctor") {
      CommonData.setURLType("doctor");
      history.push({ pathname: "/doctor/agree" });
      console.log(location.search);
      const query = new URLSearchParams(location.search);
      console.log(query.get("doctorCode"));
      console.log(query.get("hospitalName"));
      /* TODO */
    } /*  */ else if (location.pathname === "/hospital/consignment") {
      CommonData.setURLType("hospital");
      history.push({ pathname: "/hospital/consignment" });
      console.log(location.search);
      const query = new URLSearchParams(location.search);
      console.log(query.get("hospitalCode"));
      HospitalData.setHospitalCodeData(query.get("hospitalCode"));
    } else if (location.pathname === "/pharmacy/consignment") {
      CommonData.setURLType("pharmacy");
      history.push({ pathname: "/pharmacy/consignment" });
      console.log(location.search);
      const query = new URLSearchParams(location.search);
      console.log(query.get("pharmacyCode"));
      PharmacyData.setPharmacyCodeData(query.get("pharmacyCode"));
    } /*  */ else {
      CommonData.setURLType("/common");
      history.push({ pathname: "/common/agree" });
    }
    console.log(location.pathname);
    console.log(history);
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
      <Route path="/hospital/consignment" component={HospitalAgreeConsignmentPage}></Route>
      <Route path="/pharmacy/consignment" component={PharmacyAgreeConsignmentPage}></Route>
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
