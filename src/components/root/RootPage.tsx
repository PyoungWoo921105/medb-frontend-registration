import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";

import CommonAgreePage from "../agree/common/CommonAgreePage";
import HospitalAgreePage from "../agree/hospital/HospitalAgreePage";
import PharmacyAgreePage from "../agree/pharmacy/PharmacyAgreePage";
import DoctorAgreePage from "../agree/doctor/DoctorAgreePage";
import HospitalJoinFirstPage from "../join/hospital/HospitalJoinFirstPage";
import PharmacyJoinFirstPage from "../join/pharmacy/PharmacyJoinFirstPage";
import DoctorJoinFirstPage from "../join/doctor/DoctorJoinFirstPage";

import HospitalJoinSearchBusinessAddressPage from "../join/hospital/HospitalJoinSearchBusinessAddressPage";
import PharmacyJoinSearchBusinessAddressPage from "../join/pharmacy/PharmacyJoinSearchBusinessAddressPage";

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
      {/*  */}
      <Route path="/pharmacy/join/1" component={PharmacyJoinFirstPage}></Route>
      <Route path="/pharmacy/join/serach-business-address" component={PharmacyJoinSearchBusinessAddressPage}></Route>
      {/*  */}
      <Route path="/doctor/join/1" component={DoctorJoinFirstPage}></Route>
      {/*  */}
    </Frame>
  );
});
export default RootPage;
