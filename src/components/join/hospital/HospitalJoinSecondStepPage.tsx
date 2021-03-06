import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import LogoImageIcon from "../../../assets/icons/LogoImageIcon.png";
import CircledQuestionMarkIcon from "../../../assets/icons/CircledQuestionMarkIcon.svg";

import useStore from "../../../data/useStore";
import { useRef } from "react";

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
  alignItems?: string;
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

  height: 1.5px;

  border: 1px solid #000000;
  margin: ${(props) => (props.margin ? props.margin : "")};

  background-color: black;
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
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "")};
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
const InputFakeComponent = styled.input`
  display: none;
`;
const InputTextFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  height: 30px;
`;
const CheckboxFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};

  cursor: pointer;
`;
const CheckboxComponent = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
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
      : props.designType === "help"
      ? "Spoqa Han Sans Neo"
      : ""};
  font-style: ${(props) =>
    props.designType === "title"
      ? "normal"
      : props.designType === "content"
      ? "normal"
      : props.designType === "additional"
      ? "Spoqa Han Sans Neo"
      : props.designType === "help"
      ? "normal"
      : ""};
  font-weight: ${(props) =>
    props.designType === "title"
      ? "500"
      : props.designType === "content"
      ? "normal"
      : props.designType === "additional"
      ? "normal"
      : props.designType === "help"
      ? "normal"
      : ""};
  font-size: ${(props) =>
    props.designType === "title"
      ? "16px"
      : props.designType === "content"
      ? "12px"
      : props.designType === "additional"
      ? "12px"
      : props.designType === "help"
      ? "10px"
      : ""};
  color: ${(props) =>
    props.designType === "title"
      ? "#000000"
      : props.designType === "content"
      ? "#000000"
      : props.designType === "additional"
      ? "#8D8D8D"
      : props.designType === "help"
      ? "#a8a8a8"
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

  border: ${(props) => (props.border ? props.border : "1.5px solid #E0E0E0")};
  border-radius: 4px;
`;
const InputButtonFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  height: 30px;
`;
const SelectTextComponent = styled.select<Props>`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #a8a8a8;

  width: ${(props) => (props.width ? props.width : "")};
  padding: 0px 10px 0px 10px;

  cursor: ${(props) => (props.cursor ? props.cursor : "")};

  border: ${(props) => (props.border ? props.border : "1.5px solid #E0E0E0")};
  border-radius: 4px;
`;
const OptionTextComponent = styled.option<Props>`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #a8a8a8;

  width: ${(props) => (props.width ? props.width : "")};
  padding: 0px 10px 0px 10px;
`;
const InputButtonComponent = styled.button<Props>`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : "row")};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "center")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};

  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "")};

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  color: ${(props) => (props.color ? props.color : "")};

  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.designType === "true"
      ? "#00B264"
      : props.designType === "false"
      ? "#E1E1E1"
      : ""};
  border: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.designType === "true"
      ? "1.5px solid #0D985B"
      : props.designType === "false"
      ? "1.5px solid #E0E0E0"
      : "1.5px solid #E0E0E0"};

  box-sizing: border-box;
  border-radius: 4px;
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

const HospitalJoinSecondStepPage = observer((props: any) => {
  const { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  const HospitalData = useStore().HospitalData;

  const onClickGoButton = () => {
    setValidateFlag(false);
    history.push({ pathname: "/hospital/join/thirdStep" });
  };
  const onClickBackButton = () => {
    setValidateFlag(false);
    history.push({ pathname: "/hospital/join/firstStep" });
  };

  /*  */

  const onClickSearchAddressButton = () => {
    history.push({ pathname: "/hospital/join/managerAddress" });
  };

  /*  */

  const uploadImageRef = useRef(null);
  const onClickUploadImageRef = () => {
    (uploadImageRef as any).current.click();
  };
  const onChangeUploadImageRef = (props: any) => {
    const { event } = props;
    console.log(event.target.files[0]);
    if (!event.target.files[0]) {
      return;
    }
    if (
      HospitalData.bankBookImageData?.name === event.target.files[0].name ||
      HospitalData.tempBankBookImageData?.name === event.target.files[0].name
    ) {
      window.alert("?????? ?????? ????????? ?????? ?????? ??????");
      return;
    }

    HospitalData.setBankBookImageData({ name: event.target.files[0].name, url: undefined });
    HospitalData.setBankBookImageFileData(event.target.files[0]);

    event.target.value = "";
  };

  /*  */

  useEffect(() => {
    if (
      HospitalData.managerExistData &&
      HospitalData.managerNameData &&
      HospitalData.managerEmailData &&
      HospitalData.managerPhoneNumberData &&
      HospitalData.managerAddressData &&
      (HospitalData.bankNameData || HospitalData.customBankNameData) &&
      HospitalData.bankAccountNumberData &&
      HospitalData.bankAccountOwnerNameData &&
      HospitalData.settlementEmailData
    ) {
      HospitalData.setJoinSecondPageValidateCheckFlagData(true);
    } else if (
      !HospitalData.managerExistData &&
      (HospitalData.bankNameData || HospitalData.customBankNameData) &&
      HospitalData.bankAccountNumberData &&
      HospitalData.bankAccountOwnerNameData &&
      HospitalData.settlementEmailData
    ) {
      HospitalData.setJoinSecondPageValidateCheckFlagData(true);
    } else {
      HospitalData.setJoinSecondPageValidateCheckFlagData(false);
    }
  }, [
    HospitalData.managerExistData,
    HospitalData.managerNameData,
    HospitalData.managerEmailData,
    HospitalData.managerPhoneNumberData,
    HospitalData.managerAddressData,
    HospitalData.bankNameData,
    HospitalData.customBankNameData,
    HospitalData.bankAccountNumberData,
    HospitalData.bankAccountOwnerNameData,
    HospitalData.settlementEmailData,
    HospitalData,
  ]);

  /*  */

  const bankNameListData = [
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "???????????????",
    "????????????????????????",
    "????????????",
    "?????????????????????",
    "????????????",
    "???????????????",
    "????????????",
    "????????????",
    "???????????????",
    "????????????",
    "?????????",
    "????????????",
    "????????????",
    "SC????????????",
    "????????????",
    "???????????????",
    "????????????",
    "????????????",
    "????????????",
    "??????????????????",
  ];

  /*  */

  const [validateFlag, setValidateFlag] = useState(false);

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
                        ????????? ??????
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
                <LineComponent
                  className="LineComponent"
                  margin="10px 0px 10px 0px"
                  justifyContent="space-between"
                  height={"35px"}
                >
                  <LineCoreFrame className="LineCoreFrame" minWidth={"160px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        ????????? ?????? ???????????? ??????????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"} justifyContent={"right"}>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={() => HospitalData.setManagerExistData(true)}
                        designType={HospitalData.managerExistData ? "true" : "false"}
                      >
                        ???
                      </InputButtonComponent>
                    </InputButtonFrame>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={() => HospitalData.setManagerExistData(false)}
                        designType={HospitalData.managerExistData ? "false" : "true"}
                      >
                        ?????????
                      </InputButtonComponent>
                    </InputButtonFrame>
                  </LineAdditionalFrame>
                </LineComponent>
                {HospitalData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *??????
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          placeholder="????????? ????????? ?????????."
                          value={HospitalData.managerNameData ? HospitalData.managerNameData : ""}
                          onChange={(event) => HospitalData.setManagerNameData(event.target.value)}
                          border={
                            validateFlag && HospitalData.managerExistData && !HospitalData.managerNameData
                              ? "2.5px solid #FF3B30"
                              : ""
                          }
                        ></InputTextComponent>
                      </InputTextFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
                {HospitalData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *?????????
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          placeholder="???????????? ????????? ?????????."
                          value={HospitalData.managerEmailData ? HospitalData.managerEmailData : ""}
                          onChange={(event) => HospitalData.setManagerEmailData(event.target.value)}
                          border={
                            validateFlag && HospitalData.managerExistData && !HospitalData.managerEmailData
                              ? "2.5px solid #FF3B30"
                              : ""
                          }
                        ></InputTextComponent>
                      </InputTextFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
                {HospitalData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *????????? ??????
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          placeholder="-?????? ????????? ????????? ?????????."
                          value={HospitalData.managerPhoneNumberData ? HospitalData.managerPhoneNumberData : ""}
                          onChange={(event) => HospitalData.setManagerPhoneNumberData(event.target.value)}
                          border={
                            validateFlag && HospitalData.managerExistData && !HospitalData.managerPhoneNumberData
                              ? "2.5px solid #FF3B30"
                              : ""
                          }
                        ></InputTextComponent>
                      </InputTextFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
                {HospitalData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *????????? ?????? ??????
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          value={HospitalData.managerAddressData ? HospitalData.managerAddressData : ""}
                          disabled={true}
                          border={
                            validateFlag && HospitalData.managerExistData && !HospitalData.managerAddressData
                              ? "2.5px solid #FF3B30"
                              : ""
                          }
                        ></InputTextComponent>
                      </InputTextFrame>
                      <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                        <InputButtonComponent
                          className="InputButtonComponent"
                          margin="0px 0px 0px 5px"
                          onClick={onClickSearchAddressButton}
                          backgroundColor={"#E1E1E1"}
                          border={"1px solid #E0E0E0"}
                        >
                          ?????? ??????
                        </InputButtonComponent>
                      </InputButtonFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
              </FieldFrame>
            </Frame>
            <Frame className="Frame">
              <TitleFrame className="TitleFrame">
                <LineComponent className="LineComponent" margin="10px 0px 5px 0px" justifyContent="space-between">
                  <LineCoreFrame className="LineCoreFrame">
                    <PlainTextFrame className="PlainTextFrame" margin="0px 10px 0px 10px">
                      <PlainTextComponent className="PlainTextComponent" designType="title">
                        ?????? ??????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame">
                    <PlainTextFrame className="PlainTextFrame" margin="0px 10px 0px 10px">
                      <PlainTextComponent className="PlainTextComponent" designType="additional">
                        ?????? ??????: ??? 2??? / ?????? ????????? 2.65%
                      </PlainTextComponent>
                    </PlainTextFrame>
                    <CheckboxFrame className="CheckboxFrame" minWidth="15px" width="15px">
                      <CheckboxComponent
                        className="CheckboxComponent"
                        src={CircledQuestionMarkIcon}
                      ></CheckboxComponent>
                    </CheckboxFrame>
                  </LineAdditionalFrame>
                </LineComponent>
              </TitleFrame>
              <DelimiterFrame className="DelimiterFrame">
                <DelimiterComponent className="DelimiterComponent" margin="0px 0px 0px 0px"></DelimiterComponent>
              </DelimiterFrame>
              <FieldFrame className="FieldFrame">
                <LineComponent
                  className="LineComponent"
                  margin="10px 0px 10px 0px"
                  justifyContent="space-between"
                  height={"35px"}
                >
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *?????? ?????? ??????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <SelectTextComponent
                        className="SelectTextComponent"
                        width={"100%"}
                        value={HospitalData.bankNameData ? HospitalData.bankNameData : ""}
                        onChange={(event) => HospitalData.setBankNameData(event.target.value)}
                        border={
                          validateFlag && HospitalData.bankNameData === "????????????" && !HospitalData.customBankNameData
                            ? "2.5px solid #FF3B30"
                            : ""
                        }
                      >
                        {bankNameListData.map((bankNameData, key) => {
                          return (
                            <OptionTextComponent className="OptionTextComponent" key={key} value={bankNameData}>
                              {bankNameData}
                            </OptionTextComponent>
                          );
                        })}
                      </SelectTextComponent>
                    </InputTextFrame>
                  </LineAdditionalFrame>
                </LineComponent>
                {!HospitalData.bankNameData || HospitalData.bankNameData === "????????????" ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                    flexDirection={"column"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame" flexDirection="column">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *?????? ?????? ??????
                        </PlainTextComponent>
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          ????????????
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          value={HospitalData.customBankNameData ? HospitalData.customBankNameData : ""}
                          onChange={(event) => HospitalData.setCustomBankNameData(event.target.value)}
                          border={validateFlag && !HospitalData.customBankNameData ? "2.5px solid #FF3B30" : ""}
                        ></InputTextComponent>
                      </InputTextFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
                <LineComponent
                  className="LineComponent"
                  margin="10px 0px 10px 0px"
                  justifyContent="space-between"
                  height={"35px"}
                >
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *?????? ????????????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="-?????? ????????? ????????? ?????????."
                        value={HospitalData.bankAccountNumberData ? HospitalData.bankAccountNumberData : ""}
                        onChange={(event) => HospitalData.setBankAccountNumberData(event.target.value)}
                        border={validateFlag && !HospitalData.bankAccountNumberData ? "2.5px solid #FF3B30" : ""}
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
                        *?????????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="????????? ????????? ?????????."
                        value={HospitalData.bankAccountOwnerNameData ? HospitalData.bankAccountOwnerNameData : ""}
                        onChange={(event) => HospitalData.setBankAccountOwnerNameData(event.target.value)}
                        border={validateFlag && !HospitalData.bankAccountOwnerNameData ? "2.5px solid #FF3B30" : ""}
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
                    <PlainTextFrame className="PlainTextFrame" flexDirection="column">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *?????? ?????????
                      </PlainTextComponent>
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        ?????? ?????????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="???????????? ????????? ?????????."
                        value={HospitalData.settlementEmailData ? HospitalData.settlementEmailData : ""}
                        onChange={(event) => HospitalData.setSettlementEmailData(event.target.value)}
                        border={validateFlag && !HospitalData.settlementEmailData ? "2.5px solid #FF3B30" : ""}
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
                        ?????? ??????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputFakeComponent
                      className="InputFakeComponent"
                      type="file"
                      ref={uploadImageRef}
                      onChange={(e) => onChangeUploadImageRef({ event: e })}
                    ></InputFakeComponent>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        value={
                          HospitalData.bankBookImageData && HospitalData.bankBookImageData.name
                            ? HospitalData.bankBookImageData?.name
                            : ""
                        }
                        disabled={true}
                      ></InputTextComponent>
                    </InputTextFrame>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={onClickUploadImageRef}
                        backgroundColor={"#E1E1E1"}
                        border={"1px solid #E0E0E0"}
                      >
                        ?????? ??????
                      </InputButtonComponent>
                    </InputButtonFrame>
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
              ??????
            </ApplyButtonComponent>
            <ApplyButtonComponent
              className="ApplyButtonComponent"
              width={"210px"}
              border={"1px solid #0D985B"}
              backgroundColor={HospitalData.joinSecondPageValidateCheckFlagData ? "#00B264" : "transparent"}
              color={HospitalData.joinSecondPageValidateCheckFlagData ? "#FFFFFF" : "#00B264"}
              cursor={HospitalData.joinSecondPageValidateCheckFlagData ? "pointer" : ""}
              onClick={HospitalData.joinSecondPageValidateCheckFlagData ? onClickGoButton : () => setValidateFlag(true)}
            >
              ?????? (2/4)
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
export default HospitalJoinSecondStepPage;
