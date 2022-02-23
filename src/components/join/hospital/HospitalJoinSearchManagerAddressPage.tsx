import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import LogoImageIcon from "../../../assets/icons/LogoImageIcon.png";

import useStore from "../../../data/useStore";

import DaumPostCode from "react-daum-postcode";
import { GetHospitalManagerCoordinate } from "../../../services/hospital/GetHospitalManagerCoordinate";

interface Props {
  display?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  backgroundColor?: string;
  textAlign?: string;
  textDecoration?: string;
  clientX?: number;
  clientY?: number;
  left?: number;
  top?: number;
  color?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  cursor?: string;
  border?: string;
  flexDirection?: string;
  flexWrap?: string;

  designType?: string;
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  position: relative;
  width: 100%;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;

  padding: 0px 20px 0px 20px;
`;
const LogoImageComponent = styled.img`
  width: 100%;

  margin: 20px 0px 20px 0px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 340px;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DelimiterFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DelimiterComponent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid #000000;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const FieldFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LineComponent = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "")};

  height: ${(props) => (props.height ? props.height : "")};

  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const LineCoreFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
`;
const LineAdditionalFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "")};
  align-items: center;

  width: ${(props) => (props.width ? props.width : "")};
`;

const PlainTextFrame = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : "")};
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
`;
const InputTextFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  height: 30px;
`;
const PlainTextComponent = styled.span<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "")};

  font-family: ${(props) =>
    props.designType === "title"
      ? "Spoqa Han Sans Neo"
      : props.designType === "content"
      ? "Spoqa Han Sans Neo"
      : props.designType === "additional"
      ? "Spoqa Han Sans Neo"
      : ""};
  font-style: ${(props) =>
    props.designType === "title"
      ? "normal"
      : props.designType === "content"
      ? "normal"
      : props.designType === "additional"
      ? "Spoqa Han Sans Neo"
      : ""};
  font-weight: ${(props) =>
    props.designType === "title"
      ? "500"
      : props.designType === "content"
      ? "normal"
      : props.designType === "additional"
      ? "normal"
      : ""};
  font-size: ${(props) =>
    props.designType === "title"
      ? "16px"
      : props.designType === "content"
      ? "12px"
      : props.designType === "additional"
      ? "12px"
      : ""};
  color: ${(props) =>
    props.designType === "title"
      ? "#000000"
      : props.designType === "content"
      ? "#000000"
      : props.designType === "additional"
      ? "#8D8D8D"
      : ""};

  cursor: ${(props) => (props.designType === "additional" ? (props.cursor ? props.cursor : "pointer") : "")};
`;
const InputTextComponent = styled.input<Props>`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #a8a8a8;

  width: ${(props) => (props.width ? props.width : "")};
  padding: 0px 10px 0px 10px;
`;

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ApplyButtonComponent = styled.button<Props>`
  border: ${(props) => (props.border ? props.border : "")};
  box-sizing: border-box;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : "")};
  height: 50px;

  margin: 15px 15px 15px 15px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "")};

  cursor: ${(props) => (props.cursor ? props.cursor : "")};
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CompanyFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CompanyInformationFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CompanyInformationComponent = styled.span`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #c7c7c7;

  margin: 10px 0px 10px 0px;
`;

const HospitalJoinSearchManagerAddressPage = observer((props: any) => {
  const { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  const HospitalData = useStore().HospitalData;

  const [BroadAddressData, setBroadAddressData] = useState("");
  const [ExtraAddressData, setExtraAddressData] = useState("");

  const onChangeExtraAddressData = (event: any) => {
    setExtraAddressData(event.target.value);
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setBroadAddressData(fullAddress);
    } else if (data.addressType === "J") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setBroadAddressData(fullAddress);
    }
    console.log(data);
    const GetHospitalCoordinateFunction = async () => {
      const GetHospitalManagerCoordinateData = {
        address: data.jibunAddress
          ? data.jibunAddress
          : data.roadAddress
          ? data.roadAddress
          : "서울 강남구 역삼동 736-36",
      };
      const response = await GetHospitalManagerCoordinate(GetHospitalManagerCoordinateData);
      if (response.status === 200) {
      } else {
        window.alert("위도 및 경도 정보 불러오기 오류");
      }
      return response;
    };
    GetHospitalCoordinateFunction();
  };

  const postCodeStyle = {
    width: "100%",
    height: "470px",
    padding: "0px 10px 0px 10px",
  } as any;

  const onClickGoButton = () => {
    HospitalData.setManagerAddressData(BroadAddressData + " " + ExtraAddressData);
    HospitalData.setManagerLocationData(HospitalData.managerCurrentLocationData);
    HospitalData.setManagerCurrentLocationData(undefined);
    history.push({ pathname: "/hospital/join/secondStep" });
  };
  const onClickBackButton = () => {
    history.push({ pathname: "/hospital/join/secondStep" });
  };

  return (
    <Body className="Body">
      <Header className="Header">
        <HeaderContent className="HeaderContent">
          <LogoFrame className="LogoFrame">
            <LogoImageComponent className="LogoImageComponent" src={LogoImageIcon}></LogoImageComponent>
          </LogoFrame>
        </HeaderContent>
      </Header>
      <Container className="Container">
        <Content className="Content">
          <ContentFrame className="ContentFrame">
            <Frame className="Frame">
              <TitleFrame className="TitleFrame">
                <LineComponent className="LineComponent" margin="10px 0px 5px 0px" justifyContent="space-between">
                  <LineCoreFrame className="LineCoreFrame">
                    <PlainTextFrame className="PlainTextFrame" margin="0px 10px 0px 10px">
                      <PlainTextComponent className="PlainTextComponent" designType="title">
                        주소 찾기
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame"></LineAdditionalFrame>
                </LineComponent>
              </TitleFrame>
              <DelimiterFrame className="DelimiterFrame">
                <DelimiterComponent className="DelimiterComponent" margin="0px 0px 0px 0px"></DelimiterComponent>
              </DelimiterFrame>
              <FieldFrame className="FieldFrame">
                <LineComponent className="LineComponent" margin="10px 0px 10px 0px" justifyContent="space-between">
                  <DaumPostCode onComplete={handleComplete} autoClose={false} style={postCodeStyle} />
                </LineComponent>
                <LineComponent
                  className="LineComponent"
                  margin="10px 0px 10px 0px"
                  justifyContent="space-between"
                  height={"35px"}
                >
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *주소
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        value={BroadAddressData}
                        disabled={true}
                      ></InputTextComponent>
                    </InputTextFrame>
                  </LineAdditionalFrame>
                </LineComponent>
                <LineComponent
                  className="LineComponent"
                  margin="10px 0px 10px 0px"
                  justifyContent="space-between"
                  height={"35px"}
                >
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *상세 주소
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        value={ExtraAddressData}
                        onChange={onChangeExtraAddressData}
                      ></InputTextComponent>
                    </InputTextFrame>
                  </LineAdditionalFrame>
                </LineComponent>
              </FieldFrame>
            </Frame>
          </ContentFrame>
          <ButtonFrame className="ButtonFrame">
            <ApplyButtonComponent
              className="ApplyButtonComponent"
              width={"100px"}
              border={"1px solid #B1B1B1"}
              backgroundColor={"#B1B1B1"}
              color={"#FFFFFF"}
              cursor={"pointer"}
              onClick={onClickBackButton}
            >
              이전
            </ApplyButtonComponent>
            <ApplyButtonComponent
              className="ApplyButtonComponent"
              width={"210px"}
              border={"1px solid #0D985B"}
              backgroundColor={BroadAddressData ? "#00B264" : "transparent"}
              color={BroadAddressData ? "#FFFFFF" : "#00B264"}
              cursor={BroadAddressData ? "pointer" : ""}
              onClick={BroadAddressData ? onClickGoButton : () => {}}
            >
              적용
            </ApplyButtonComponent>
          </ButtonFrame>
        </Content>
      </Container>
      <Footer className="Footer">
        <FooterContent className="FooterContent">
          <CompanyFrame className="CompanyFrame">
            <CompanyInformationFrame className="CompanyInformationFrame">
              <CompanyInformationComponent className="CompanyInformationComponent">
                Medir Inc.
              </CompanyInformationComponent>
            </CompanyInformationFrame>
          </CompanyFrame>
        </FooterContent>
      </Footer>
    </Body>
  );
});

export default HospitalJoinSearchManagerAddressPage;
