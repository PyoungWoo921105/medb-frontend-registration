import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import LogoImageIcon from "../../../assets/icons/LogoImageIcon.png";

import useStore from "../../../data/useStore";

import { GetAuthAccountIsDuplicated } from "../../../services/common/GetAuthAccountIsDuplicated";

import { PostPublicSignupPharmacy } from "../../../services/pharmacy/PostPublicSignupPharmacy";
import { PostPublicSignupPharmacyFiles } from "../../../services/pharmacy/PostPublicSignupPharmacyFiles";

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

  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
  border: ${(props) => (props.border ? props.border : "1.5px solid #E0E0E0")};

  box-sizing: border-box;
  border-radius: 4px;

  cursor: ${(props) => (props.cursor ? props.cursor : "")};
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

const PharmacyJoinThirdStepPage = observer((props: any) => {
  const { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  const PharmacyData = useStore().PharmacyData;
  const CommonData = useStore().CommonData;

  const onClickGoButton = () => {
    const PostPublicSignupPharmacyFunction = async () => {
      const PostPublicSignupPharmacyData = {
        businessInfo: {
          businessRegName: PharmacyData.businessNameData,
          businessRegNum: PharmacyData.businessLicenseNumberData,
          businessRegAddress: PharmacyData.businessAddressData,
          businessRegLocation: PharmacyData.businessLocationData,
          corpNum: PharmacyData.corporateNumberData,
          ownerName: PharmacyData.delegatorNameData,
          ownerBirthday: PharmacyData.delegatorBirthdayData,
          ownerPhoneNum: PharmacyData.delegatorPhoneNumberData,
          ownerEmail: PharmacyData.delegatorEmailData,
          ownerCi: CommonData.certificationData?.ci,
        },
        manager: {
          isEmpty: !PharmacyData.managerExistData,
          name: PharmacyData.managerNameData,
          email: PharmacyData.managerEmailData,
          phoneNum: PharmacyData.managerPhoneNumberData,
          dmAddress: PharmacyData.managerAddressData,
          dmLocation: PharmacyData.managerLocationData,
        },
        settlementInfo: {
          bankName:
            PharmacyData.bankNameData === "????????????" || !PharmacyData.bankNameData
              ? PharmacyData.customBankNameData
              : PharmacyData.bankNameData,
          accountNumber: PharmacyData.bankAccountNumberData,
          accountHolderName: PharmacyData.bankAccountOwnerNameData,
          email: PharmacyData.settlementEmailData,
        },
        operationInfo: {
          accountId: PharmacyData.accountIDData,
          password: PharmacyData.accountPasswordData,
          name: PharmacyData.pharmacyNameData,
          phoneNum: PharmacyData.pharmacyPhoneNumberData,
          faxNum: PharmacyData.pharmacyFaxNumberData,
          address: PharmacyData.pharmacyAddressData,
          location: PharmacyData.pharmacyLocationData,
        },
      };

      const response = await PostPublicSignupPharmacy(PostPublicSignupPharmacyData);
      if (response.status === 201) {
        const PostPublicSignupPharmacyFilesData = new FormData();
        PostPublicSignupPharmacyFilesData.append(
          "data",
          JSON.stringify({
            settlementImgFiles: [PharmacyData.bankBookImageData],
            businessImgFiles: [PharmacyData.businessLicenseImageData],
          })
        );
        if (PharmacyData.businessLicenseImageFileData) {
          PostPublicSignupPharmacyFilesData.append("files", PharmacyData.businessLicenseImageFileData);
        }
        if (PharmacyData.bankBookImageFileData) {
          PostPublicSignupPharmacyFilesData.append("files", PharmacyData.bankBookImageFileData);
        }
        const response = await PostPublicSignupPharmacyFiles(PostPublicSignupPharmacyFilesData);
        if (response.status === 201) {
          setValidateFlag(false);
          history.push({ pathname: "/pharmacy/join/complete" });
        } else {
          window.alert("?????? ???????????? ??????");
        }
        return response;
      } else {
        window.alert("?????? ???????????? ??????");
      }
      return response;
    };
    PostPublicSignupPharmacyFunction();
  };
  const onClickBackButton = () => {
    setValidateFlag(false);
    history.push({ pathname: "/pharmacy/join/secondStep" });
  };

  /*  */

  const onClickSearchAddressButton = () => {
    history.push({ pathname: "/pharmacy/join/pharmacyAddress" });
  };

  /*  */

  const onClickAccountIDCheckButton = () => {
    const GetAuthAccountIsDuplicatedFunction = async () => {
      const GetAuthAccountIsDuplicatedData = {
        username: PharmacyData.accountIDData,
        role: "pharmacy",
      };
      const response = await GetAuthAccountIsDuplicated(GetAuthAccountIsDuplicatedData);
      if (response.status === 200) {
        if (response.data.isDuplicated === false) {
          PharmacyData.setAccountIDDataValidateFlagData(true);
        } else if (response.data.isDuplicated === true) {
          window.alert("????????? ??????");
          PharmacyData.setAccountIDDataValidateFlagData(false);
        }
      } else {
        window.alert("????????? ?????? ?????? ??????");
      }
      return response;
    };
    GetAuthAccountIsDuplicatedFunction();
  };

  /*  */

  const [accountIDValidate, setAccountIDValidate] = useState(false);
  const [accountPasswordValidate, setAccountPasswordValidate] = useState(false);

  useEffect(() => {
    PharmacyData.setAccountIDDataValidateFlagData(false);
    const accountIDDataValidateFlagData = /^(?=.+[a-z])(?=.*[0-9])(?=.{6,20})/;
    if (
      PharmacyData.accountIDData &&
      PharmacyData.accountIDData.match(accountIDDataValidateFlagData) &&
      PharmacyData.accountIDData.length >= 6 &&
      PharmacyData.accountIDData.length <= 20
    ) {
      setAccountIDValidate(true);
    } else {
      setAccountIDValidate(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PharmacyData.accountIDData]);

  useEffect(() => {
    const accountPasswordDataValidateFlagData = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{};])(?=.{8,})/;

    if (
      PharmacyData.accountPasswordData &&
      PharmacyData.accountPasswordData.match(accountPasswordDataValidateFlagData) &&
      PharmacyData.accountPasswordData.length >= 8
    ) {
      setAccountPasswordValidate(true);
    } else {
      setAccountPasswordValidate(false);
    }
  }, [PharmacyData.accountPasswordData]);

  useEffect(() => {
    if (
      PharmacyData.accountIDData &&
      accountIDValidate &&
      PharmacyData.accountIDDataValidateFlagData &&
      PharmacyData.accountPasswordData &&
      PharmacyData.confirmedAccountPasswordData &&
      accountPasswordValidate &&
      PharmacyData.accountPasswordData === PharmacyData.confirmedAccountPasswordData &&
      PharmacyData.pharmacyNameData &&
      PharmacyData.pharmacyPhoneNumberData &&
      PharmacyData.pharmacyAddressData
    ) {
      PharmacyData.setJoinThirdPageValidateCheckFlagData(true);
    } else {
      PharmacyData.setJoinThirdPageValidateCheckFlagData(false);
    }
  }, [
    PharmacyData.accountIDData,
    accountIDValidate,
    PharmacyData.accountIDDataValidateFlagData,
    PharmacyData.accountPasswordData,
    PharmacyData.confirmedAccountPasswordData,
    accountPasswordValidate,
    PharmacyData.pharmacyNameData,
    PharmacyData.pharmacyPhoneNumberData,
    PharmacyData.pharmacyAddressData,
    PharmacyData,
  ]);

  /*  */

  useEffect(() => {
    if (!PharmacyData.pharmacyAddressData) {
      PharmacyData.setPharmacyAddressData(PharmacyData.businessAddressData);
      PharmacyData.setPharmacyLocationData(PharmacyData.businessLocationData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                        ?????? ??????
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
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *?????? ID
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        value={PharmacyData.accountIDData ? PharmacyData.accountIDData : ""}
                        onChange={(event) => PharmacyData.setAccountIDData(event.target.value)}
                        border={
                          (validateFlag && !PharmacyData.accountIDData) || (validateFlag && !accountIDValidate)
                            ? "2.5px solid #FF3B30"
                            : ""
                        }
                      ></InputTextComponent>
                    </InputTextFrame>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={!accountIDValidate ? () => {} : onClickAccountIDCheckButton}
                        cursor={!accountIDValidate ? "" : "pointer"}
                        backgroundColor={"#E1E1E1"}
                        border={
                          (validateFlag && !PharmacyData.accountIDDataValidateFlagData) ||
                          (validateFlag && !accountIDValidate)
                            ? "2.5px solid #FF3B30"
                            : ""
                        }
                        color={!accountIDValidate ? "white" : "black"}
                      >
                        ?????? ??????
                      </InputButtonComponent>
                    </InputButtonFrame>
                  </LineAdditionalFrame>
                </LineComponent>
                {/* TEMP */}
                <LineComponent className="LineComponent" margin="-10px 0px 0px 0px" justifyContent="space-between">
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}></LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"} flexDirection="column">
                      <PlainTextComponent className="PlainTextComponent" designType="help" cursor="text">
                        6~20?????? ?????? ????????? ??? ????????? ?????? ???????????????.
                      </PlainTextComponent>
                      <PlainTextComponent className="PlainTextComponent" designType="help" cursor="text">
                        ?????? ID??? ?????? ?????? ????????? ????????? ?????????.
                      </PlainTextComponent>
                    </PlainTextFrame>
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
                        *????????????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        value={PharmacyData.accountPasswordData ? PharmacyData.accountPasswordData : ""}
                        onChange={(event) => PharmacyData.setAccountPasswordData(event.target.value)}
                        border={
                          (validateFlag && !PharmacyData.accountPasswordData) ||
                          (validateFlag && !accountPasswordValidate)
                            ? "2.5px solid #FF3B30"
                            : ""
                        }
                      ></InputTextComponent>
                    </InputTextFrame>
                  </LineAdditionalFrame>
                </LineComponent>
                {/* TEMP */}
                <LineComponent className="LineComponent" margin="-10px 0px 0px 0px" justifyContent="space-between">
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}></LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"} flexDirection="column">
                      <PlainTextComponent className="PlainTextComponent" designType="help" cursor="text">
                        ??????, ??????, ????????? ??????????????? ?????? ????????????
                      </PlainTextComponent>
                      <PlainTextComponent className="PlainTextComponent" designType="help" cursor="text">
                        8?????? ???????????? ????????? ?????????.
                      </PlainTextComponent>
                    </PlainTextFrame>
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
                        *???????????? ??????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="??????????????? ?????? ????????? ?????????."
                        value={
                          PharmacyData.confirmedAccountPasswordData ? PharmacyData.confirmedAccountPasswordData : ""
                        }
                        onChange={(event) => PharmacyData.setConfirmedAccountPasswordData(event.target.value)}
                        border={
                          (validateFlag && !PharmacyData.confirmedAccountPasswordData) ||
                          (validateFlag &&
                            PharmacyData.accountPasswordData !== PharmacyData.confirmedAccountPasswordData) ||
                          (validateFlag && !accountPasswordValidate)
                            ? "2.5px solid #FF3B30"
                            : ""
                        }
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
                        *?????? ??????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="?????? ????????? ????????? ?????????."
                        value={PharmacyData.pharmacyNameData ? PharmacyData.pharmacyNameData : ""}
                        onChange={(event) => PharmacyData.setPharmacyNameData(event.target.value)}
                        border={validateFlag && !PharmacyData.pharmacyNameData ? "2.5px solid #FF3B30" : ""}
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
                        value={PharmacyData.pharmacyPhoneNumberData ? PharmacyData.pharmacyPhoneNumberData : ""}
                        onChange={(event) => PharmacyData.setPharmacyPhoneNumberData(event.target.value)}
                        border={validateFlag && !PharmacyData.pharmacyPhoneNumberData ? "2.5px solid #FF3B30" : ""}
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
                        ?????? ????????????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="-?????? ????????? ????????? ?????????."
                        value={PharmacyData.pharmacyFaxNumberData ? PharmacyData.pharmacyFaxNumberData : ""}
                        onChange={(event) => PharmacyData.setPharmacyFaxNNumberData(event.target.value)}
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
                        *?????? ??????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        value={PharmacyData.pharmacyAddressData ? PharmacyData.pharmacyAddressData : ""}
                        disabled={true}
                        border={validateFlag && !PharmacyData.pharmacyAddressData ? "2.5px solid #FF3B30" : ""}
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
              backgroundColor={PharmacyData.joinThirdPageValidateCheckFlagData ? "#00B264" : "transparent"}
              color={PharmacyData.joinThirdPageValidateCheckFlagData ? "#FFFFFF" : "#00B264"}
              cursor={PharmacyData.joinThirdPageValidateCheckFlagData ? "pointer" : ""}
              onClick={PharmacyData.joinThirdPageValidateCheckFlagData ? onClickGoButton : () => setValidateFlag(true)}
            >
              ?????? (3/3)
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
export default PharmacyJoinThirdStepPage;
