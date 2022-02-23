import React, { useEffect } from "react";
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
const InputButtonFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
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
      ? "1px solid #0D985B"
      : props.designType === "false"
      ? "1px solid #E0E0E0"
      : ""};

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

const PharmacyJoinSecondStepPage = observer((props: any) => {
  const { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  const PharmacyData = useStore().PharmacyData;

  const onClickGoButton = () => {
    history.push({ pathname: "/pharmacy/join/thirdStep" });
  };
  const onClickBackButton = () => {
    history.push({ pathname: "/pharmacy/join/firstStep" });
  };

  /*  */

  const onClickSearchAddressButton = () => {
    history.push({ pathname: "/pharmacy/join/managerAddress" });
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
      PharmacyData.bankBookImageData?.name === event.target.files[0].name ||
      PharmacyData.tempBankBookImageData?.name === event.target.files[0].name
    ) {
      window.alert("통장 사본 업로드 이름 중복 오류");
      return;
    }

    PharmacyData.setBankBookImageData({ name: event.target.files[0].name, url: undefined });
    PharmacyData.setBankBookImageFileData(event.target.files[0]);

    event.target.value = "";
  };

  /*  */

  useEffect(() => {
    if (
      PharmacyData.managerExistData &&
      PharmacyData.managerNameData &&
      PharmacyData.managerEmailData &&
      PharmacyData.managerPhoneNumberData &&
      PharmacyData.managerAddressData &&
      PharmacyData.bankNameData &&
      PharmacyData.bankAccountNumberData &&
      PharmacyData.bankAccountOwnerNameData &&
      PharmacyData.settlementEmailData
    ) {
      PharmacyData.setJoinSecondPageValidateCheckFlagData(true);
    } else if (
      !PharmacyData.managerExistData &&
      PharmacyData.bankNameData &&
      PharmacyData.bankAccountNumberData &&
      PharmacyData.bankAccountOwnerNameData &&
      PharmacyData.settlementEmailData
    ) {
      PharmacyData.setJoinSecondPageValidateCheckFlagData(true);
    } else {
      PharmacyData.setJoinSecondPageValidateCheckFlagData(false);
    }
  }, [
    PharmacyData.managerExistData,
    PharmacyData.managerNameData,
    PharmacyData.managerEmailData,
    PharmacyData.managerPhoneNumberData,
    PharmacyData.managerAddressData,
    PharmacyData.bankNameData,
    PharmacyData.bankAccountNumberData,
    PharmacyData.bankAccountOwnerNameData,
    PharmacyData.settlementEmailData,
    PharmacyData,
  ]);

  /*  */

  const bankNameListData = [
    "직접입력",
    "경남은행",
    "광주은행",
    "국민은행",
    "기업은행",
    "농협은행",
    "대구은행",
    "도이치은행",
    "뱅크오브아메리카",
    "부산은행",
    "산립조합중앙회",
    "산업은행",
    "새마을금고",
    "수협은행",
    "신한은행",
    "신협중앙회",
    "우리은행",
    "우체국",
    "저축은행",
    "전북은행",
    "SC제일은행",
    "제주은행",
    "카카오뱅크",
    "케이뱅크",
    "토스뱅크",
    "하나은행",
    "한국씨티은행",
  ];

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
                        운영자 정보
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
                        약국에 별도 운영자가 있나요?
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"} justifyContent={"right"}>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={() => PharmacyData.setManagerExistData(true)}
                        designType={PharmacyData.managerExistData ? "true" : "false"}
                      >
                        예
                      </InputButtonComponent>
                    </InputButtonFrame>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={() => PharmacyData.setManagerExistData(false)}
                        designType={PharmacyData.managerExistData ? "false" : "true"}
                      >
                        아니오
                      </InputButtonComponent>
                    </InputButtonFrame>
                  </LineAdditionalFrame>
                </LineComponent>
                {PharmacyData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *성명
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          placeholder="이름을 입력해 주세요."
                          value={PharmacyData.managerNameData ? PharmacyData.managerNameData : ""}
                          onChange={(event) => PharmacyData.setManagerNameData(event.target.value)}
                        ></InputTextComponent>
                      </InputTextFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
                {PharmacyData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *이메일
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          placeholder="이메일을 입력해 주세요."
                          value={PharmacyData.managerEmailData ? PharmacyData.managerEmailData : ""}
                          onChange={(event) => PharmacyData.setManagerEmailData(event.target.value)}
                        ></InputTextComponent>
                      </InputTextFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
                {PharmacyData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *휴대폰 번호
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          placeholder="-없이 숫자만 입력해 주세요."
                          value={PharmacyData.managerPhoneNumberData ? PharmacyData.managerPhoneNumberData : ""}
                          onChange={(event) => PharmacyData.setManagerPhoneNumberData(event.target.value)}
                        ></InputTextComponent>
                      </InputTextFrame>
                    </LineAdditionalFrame>
                  </LineComponent>
                ) : null}
                {PharmacyData.managerExistData ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *우편물 수령 주소
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          value={PharmacyData.managerAddressData ? PharmacyData.managerAddressData : ""}
                          disabled={true}
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
                          주소 찾기
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
                        정산 정보
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame">
                    <PlainTextFrame className="PlainTextFrame" margin="0px 10px 0px 10px">
                      <PlainTextComponent className="PlainTextComponent" designType="additional">
                        정산 주기: 월 2회 / 정산 수수료 2.65%
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
                        *입금 계좌 은행
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <SelectTextComponent
                        className="SelectTextComponent"
                        width={"100%"}
                        value={PharmacyData.bankNameData ? PharmacyData.bankNameData : ""}
                        onChange={(event) => PharmacyData.setBankNameData(event.target.value)}
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
                {!PharmacyData.bankNameData || PharmacyData.bankNameData === "직접입력" ? (
                  <LineComponent
                    className="LineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                    height={"35px"}
                    flexDirection={"column"}
                  >
                    <LineCoreFrame className="LineCoreFrame" minWidth={"145px"}>
                      <PlainTextFrame className="PlainTextFrame">
                        <PlainTextComponent className="PlainTextComponent" designType="content">
                          *입금 계좌 은행 직접입력
                        </PlainTextComponent>
                      </PlainTextFrame>
                    </LineCoreFrame>
                    <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <InputTextComponent
                          className="InputTextComponent"
                          width={"100%"}
                          value={PharmacyData.customBankNameData ? PharmacyData.customBankNameData : ""}
                          onChange={(event) => PharmacyData.setCustomBankNameData(event.target.value)}
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
                        *입금 계좌번호
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="-없이 숫자만 입력해 주세요."
                        value={PharmacyData.bankAccountNumberData ? PharmacyData.bankAccountNumberData : ""}
                        onChange={(event) => PharmacyData.setBankAccountNumberData(event.target.value)}
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
                        *예금주
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="이름을 입력해 주세요."
                        value={PharmacyData.bankAccountOwnerNameData ? PharmacyData.bankAccountOwnerNameData : ""}
                        onChange={(event) => PharmacyData.setBankAccountOwnerNameData(event.target.value)}
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
                        *세금 계산서
                      </PlainTextComponent>
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        수령 이메일
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="이메일을 입력해 주세요."
                        value={PharmacyData.settlementEmailData ? PharmacyData.settlementEmailData : ""}
                        onChange={(event) => PharmacyData.setSettlementEmailData(event.target.value)}
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
                        통장 사본
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
                          PharmacyData.bankBookImageData && PharmacyData.bankBookImageData.name
                            ? PharmacyData.bankBookImageData?.name
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
                        파일 찾기
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
              이전
            </ApplyButtonComponent>
            <ApplyButtonComponent
              className="ApplyButtonComponent"
              width={"210px"}
              border={"1px solid #0D985B"}
              backgroundColor={PharmacyData.joinSecondPageValidateCheckFlagData ? "#00B264" : "transparent"}
              color={PharmacyData.joinSecondPageValidateCheckFlagData ? "#FFFFFF" : "#00B264"}
              cursor={PharmacyData.joinSecondPageValidateCheckFlagData ? "pointer" : ""}
              onClick={PharmacyData.joinSecondPageValidateCheckFlagData ? onClickGoButton : () => {}}
            >
              다음 (2/3)
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
export default PharmacyJoinSecondStepPage;
