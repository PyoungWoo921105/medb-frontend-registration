import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";

import CommonAgreePage from "../agree/common/CommonAgreePage";
import HospitalAgreePage from "../agree/hospital/HospitalAgreePage";
import PharmacyAgreePage from "../agree/pharmacy/PharmacyAgreePage";
import DoctorAgreePage from "../agree/doctor/DoctorAgreePage";
import HospitalJoinPage from "../join/common/HospitalJoinPage";
import PharmacyJoinPage from "../join/pharmacy/PharmacyJoinPage";
import DoctorJoinPage from "../join/doctor/DoctorJoinPage";

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
      <Route path="/common/agree" component={CommonAgreePage}></Route>
      <Route path="/hospital/agree" component={HospitalAgreePage}></Route>
      <Route path="/pharmacy/agree" component={PharmacyAgreePage}></Route>
      <Route path="/doctor/agree" component={DoctorAgreePage}></Route>
      <Route path="/hospital/join" component={HospitalJoinPage}></Route>
      <Route path="/pharmacy/join" component={PharmacyJoinPage}></Route>
      <Route path="/doctor/join" component={DoctorJoinPage}></Route>
    </Frame>
  );
});
export default RootPage;
