import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import LogoImageIcon from "../../../assets/icons/LogoImageIcon.png";

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

  type?: string;
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
  flex-direction: row;
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
const PlainTextComponent = styled.span<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "")};

  font-family: ${(props) =>
    props.type === "title"
      ? "Spoqa Han Sans Neo"
      : props.type === "content"
      ? "Spoqa Han Sans Neo"
      : props.type === "additional"
      ? "Spoqa Han Sans Neo"
      : ""};
  font-style: ${(props) =>
    props.type === "title"
      ? "normal"
      : props.type === "content"
      ? "normal"
      : props.type === "additional"
      ? "Spoqa Han Sans Neo"
      : ""};
  font-weight: ${(props) =>
    props.type === "title" ? "500" : props.type === "content" ? "normal" : props.type === "additional" ? "normal" : ""};
  font-size: ${(props) =>
    props.type === "title" ? "16px" : props.type === "content" ? "12px" : props.type === "additional" ? "12px" : ""};
  color: ${(props) =>
    props.type === "title"
      ? "#000000"
      : props.type === "content"
      ? "#000000"
      : props.type === "additional"
      ? "#8D8D8D"
      : ""};

  cursor: ${(props) => (props.type === "additional" ? "pointer" : "")};
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
const InputButtonComponent = styled.button<Props>`
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "")};

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  color: #000000;
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

const HospitalJoinSecondPage = observer((props: any) => {
  const { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  const CommonData = useStore().CommonData;
  const HospitalData = useStore().HospitalData;

  const onClickGoButton = () => {
    history.push({ pathname: "/hospital/join/2" });
  };
  const onClickBackButton = () => {
    history.push({ pathname: "/common/agree" });
  };

  useEffect(() => {
    if (CommonData.selectType === "hospital") {
    } else if (CommonData.selectType === "pharmacy") {
    }
  }, [CommonData.selectType]);

  /*  */

  const onClickSearchAddressButton = () => {
    history.push({ pathname: "/hospital/join/serach-business-address" });
  };

  /*  */

  const uploadImageRef = useRef(null);
  const onClickUploadImageRef = () => {
    (uploadImageRef as any).current.click();
  };
  const onChangeUploadImageRef = (props: any) => {
    const { event } = props;
    if (!event.target.files[0]) {
      return;
    }
    if (
      HospitalData.businessLicenseImageData?.name === event.target.files[0].name ||
      HospitalData.tempBusinessLicenseImageData?.name === event.target.files[0].name
    ) {
      window.alert("사업자 등록증 업로드 이름 중복 오류");
      return;
    }

    HospitalData.setBusinessLicenseImageData({ name: event.target.files[0].name, url: undefined });
    HospitalData.setBusinessLicenseImageFileData(event.target.files[0]);

    event.target.value = "";
  };

  /*  */

  useEffect(() => {
    if (
      HospitalData.businessNameData &&
      HospitalData.businessLicenseNumberData &&
      HospitalData.businessAddressData &&
      HospitalData.delegatorEmailData
    ) {
      HospitalData.setJoinSecondPageValidateCheckFlagData(true);
    } else {
      HospitalData.setJoinSecondPageValidateCheckFlagData(false);
    }
  }, [
    HospitalData.businessNameData,
    HospitalData.businessLicenseNumberData,
    HospitalData.businessAddressData,
    HospitalData.delegatorEmailData,
    HospitalData,
  ]);

  /*  */

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
                      <PlainTextComponent className="PlainTextComponent" type="title">
                        사업자 정보
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        *사업자 상호
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="사업장 등록증 상 기재된 상호를 입력해 주세요."
                        value={HospitalData.businessNameData ? HospitalData.businessNameData : ""}
                        onChange={(event) => HospitalData.setBusinessNameData(event.target.value)}
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        *사업자 등록번호
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="-없이 숫자만 입력해 주세요."
                        value={HospitalData.businessLicenseNumberData ? HospitalData.businessLicenseNumberData : ""}
                        onChange={(event) => HospitalData.setBusinessLicenseNumberData(event.target.value)}
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        *사업자 주소
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        value={HospitalData.businessAddressData ? HospitalData.businessAddressData : ""}
                        disabled={true}
                      ></InputTextComponent>
                    </InputTextFrame>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={onClickSearchAddressButton}
                      >
                        주소 찾기
                      </InputButtonComponent>
                    </InputButtonFrame>
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        법인 번호
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="법인인 경우에만 -없이 숫자만 입력해 주세요."
                        value={HospitalData.corporateNumberData ? HospitalData.corporateNumberData : ""}
                        onChange={(event) => HospitalData.setCorporateNumberData(event.target.value)}
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        사업자 등록증 사본
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
                          HospitalData.businessLicenseImageData && HospitalData.businessLicenseImageData.name
                            ? HospitalData.businessLicenseImageData?.name
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
                      >
                        파일 찾기
                      </InputButtonComponent>
                    </InputButtonFrame>
                  </LineAdditionalFrame>
                </LineComponent>
              </FieldFrame>
            </Frame>
            <Frame className="Frame">
              <TitleFrame className="TitleFrame">
                <LineComponent className="LineComponent" margin="10px 0px 5px 0px" justifyContent="space-between">
                  <LineCoreFrame className="LineCoreFrame">
                    <PlainTextFrame className="PlainTextFrame" margin="0px 10px 0px 10px">
                      <PlainTextComponent className="PlainTextComponent" type="title">
                        대표자 정보
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        성명
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"}>
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        박평우
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        생년월일
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"}>
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        1992년 11월 05일
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        휴대폰 번호
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"}>
                      <PlainTextComponent className="PlainTextComponent" type="content">
                        010-7149-3357
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
                      <PlainTextComponent className="PlainTextComponent" type="content">
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
                        value={HospitalData.delegatorEmailData ? HospitalData.delegatorEmailData : ""}
                        onChange={(event) => HospitalData.setDelegatorEmailData(event.target.value)}
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
              /* TODO */
              backgroundColor={HospitalData.joinSecondPageValidateCheckFlagData ? "#00B264" : "transparent"}
              color={HospitalData.joinSecondPageValidateCheckFlagData ? "#FFFFFF" : "#00B264"}
              cursor={HospitalData.joinSecondPageValidateCheckFlagData ? "pointer" : ""}
              onClick={HospitalData.joinSecondPageValidateCheckFlagData ? onClickGoButton : () => {}}
            >
              다음 (1/4)
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
export default HospitalJoinSecondPage;
