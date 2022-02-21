import React, { useEffect } from "react";
import { Route /* , useLocation */, useHistory } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";

import Select from "../select/Select";
import Describe from "../describe/Describe";

const FrameBody = styled.div``;

const Frame = observer(() => {
  const history = useHistory();
  /* const location = useLocation(); */

  useEffect(() => {
    history.push({ pathname: "/select" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FrameBody className="FrameBody">
      <Route exact path="/"></Route>
      <Route path="/select" component={Select}></Route>
      <Route path="/describe" component={Describe}></Route>
    </FrameBody>
  );
});
export default Frame;
