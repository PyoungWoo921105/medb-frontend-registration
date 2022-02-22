import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import LogoImageIcon from "../../../assets/icons/LogoImageIcon.png";
import onClickNotCheckedCircleIcon from "../../../assets/icons/onClickNotCheckedCircleIcon.svg";
import onClickCheckedCircleIcon from "../../../assets/icons/onClickCheckedCircleIcon.svg";
import onClickNotCheckedIcon from "../../../assets/icons/onClickNotCheckedIcon.svg";
import onClickCheckedIcon from "../../../assets/icons/onClickCheckedIcon.svg";

import useStore from "../../../data/useStore";

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

  padding: 100px 0px 0px 0px;
`;

const Header = styled.header`
  position: relative;
  width: 100%;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;

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
const ContainterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SelectFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SelectButtonComponent = styled.button<Props>`
  border: 1px solid #0d985b;
  box-sizing: border-box;
  border-radius: 4px;
  width: 140px;
  height: 50px;

  margin: ${(props) => (props.margin ? props.margin : "")};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "")};

  cursor: ${(props) => (props.cursor ? props.cursor : "")};
`;
const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 340px;
`;
const AgreementFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AgreementTitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AgreementDelimiterFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AgreementDelimiterComponent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid #000000;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const AgreementFieldFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AgreementLineComponent = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "")};

  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const AgreementLineCoreFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const AgreementLineAdditionalFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const AgreementCheckboxInputFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};

  cursor: pointer;
`;
const AgreementCheckboxInputComponent = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
const AgreementCheckboxTextFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const AgreementCheckboxTextComponent = styled.span<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

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

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ButtonComponent = styled.button<Props>`
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

const PharmacyAgreePage = observer((props: any) => {
  const { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  const CommonData = useStore().CommonData;

  useEffect(() => {
    CommonData.setSelectType("pharmacy");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [agreeCheck, setAgreeCheck] = useState({ first: false, second: false, third: false });

  const onClickCheckButton = (props: any) => {
    const { key } = props;
    console.log(key);
    if (key === 0) {
      if (agreeCheck.first && agreeCheck.second && agreeCheck.third) {
        setAgreeCheck({ first: false, second: false, third: false });
      } else {
        setAgreeCheck({ first: true, second: true, third: true });
      }
    } else if (key === 1) {
      setAgreeCheck({ ...agreeCheck, first: !agreeCheck.first });
    } else if (key === 2) {
      setAgreeCheck({ ...agreeCheck, second: !agreeCheck.second });
    } else if (key === 3) {
      setAgreeCheck({ ...agreeCheck, third: !agreeCheck.third });
    }
  };

  const onClickGoButton = () => {
    history.push({ pathname: "/pharmacy/join/1" });
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
        <ContainterContent className="ContainterContent">
          <SelectFrame className="SelectFrame">
            <SelectButtonComponent
              className="SelectButtonComponent"
              backgroundColor={CommonData.selectType === "pharmacy" ? "#00B264" : "transparent"}
              color={CommonData.selectType === "pharmacy" ? "#FFFFFF" : "#00B264"}
              margin="15px 15px 15px 15px"
            >
              약국
            </SelectButtonComponent>
          </SelectFrame>
          {CommonData.selectType ? (
            <ContentFrame className="ContentFrame">
              <AgreementFrame className="AgreementFrame">
                <AgreementTitleFrame className="AgreementTitleFrame">
                  <AgreementLineComponent
                    className="AgreementLineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                  >
                    <AgreementLineCoreFrame className="AgreementLineCoreFrame">
                      <AgreementCheckboxInputFrame
                        className="AgreementCheckboxInputFrame"
                        width={"20px"}
                        minWidth={"20px"}
                        margin="0px 10px 0px 10px"
                        onClick={() => onClickCheckButton({ key: 0 })}
                      >
                        <AgreementCheckboxInputComponent
                          className="AgreementCheckboxInputComponent"
                          src={
                            agreeCheck.first && agreeCheck.second && agreeCheck.third
                              ? onClickCheckedCircleIcon
                              : onClickNotCheckedCircleIcon
                          }
                        ></AgreementCheckboxInputComponent>
                      </AgreementCheckboxInputFrame>
                      <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame">
                        <AgreementCheckboxTextComponent className="AgreementCheckboxTextComponent" type="title">
                          약관 전체 동의
                        </AgreementCheckboxTextComponent>
                      </AgreementCheckboxTextFrame>
                    </AgreementLineCoreFrame>
                    <AgreementLineAdditionalFrame className="AgreementLineAdditionalFrame"></AgreementLineAdditionalFrame>
                  </AgreementLineComponent>
                </AgreementTitleFrame>
                <AgreementDelimiterFrame className="AgreementDelimiterFrame">
                  <AgreementDelimiterComponent
                    className="AgreementDelimiterComponent"
                    margin="5px 0px 10px 0px"
                  ></AgreementDelimiterComponent>
                </AgreementDelimiterFrame>
                <AgreementFieldFrame className="AgreementFieldFrame">
                  <AgreementLineComponent
                    className="AgreementLineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                  >
                    <AgreementLineCoreFrame className="AgreementLineCoreFrame">
                      <AgreementCheckboxInputFrame
                        className="AgreementCheckboxInputFrame"
                        width={"15px"}
                        minWidth={"15px"}
                        margin="0px 10px 0px 10px"
                        onClick={() => onClickCheckButton({ key: 1 })}
                      >
                        <AgreementCheckboxInputComponent
                          className="AgreementCheckboxInputComponent"
                          src={agreeCheck.first ? onClickCheckedIcon : onClickNotCheckedIcon}
                        ></AgreementCheckboxInputComponent>
                      </AgreementCheckboxInputFrame>
                      <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame">
                        <AgreementCheckboxTextComponent className="AgreementCheckboxTextComponent" type="content">
                          (필수) 메듭 서비스 이용약관
                        </AgreementCheckboxTextComponent>
                      </AgreementCheckboxTextFrame>
                    </AgreementLineCoreFrame>
                    <AgreementLineAdditionalFrame className="AgreementLineAdditionalFrame">
                      <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame">
                        <AgreementCheckboxTextComponent className="AgreementCheckboxTextComponent" type="additional">
                          상세보기
                        </AgreementCheckboxTextComponent>
                      </AgreementCheckboxTextFrame>
                    </AgreementLineAdditionalFrame>
                  </AgreementLineComponent>
                  <AgreementLineComponent
                    className="AgreementLineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                  >
                    <AgreementLineCoreFrame className="AgreementLineCoreFrame">
                      <AgreementCheckboxInputFrame
                        className="AgreementCheckboxInputFrame"
                        width={"15px"}
                        minWidth={"15px"}
                        margin="0px 10px 0px 10px"
                        onClick={() => onClickCheckButton({ key: 2 })}
                      >
                        <AgreementCheckboxInputComponent
                          className="AgreementCheckboxInputComponent"
                          src={agreeCheck.second ? onClickCheckedIcon : onClickNotCheckedIcon}
                        ></AgreementCheckboxInputComponent>
                      </AgreementCheckboxInputFrame>
                      <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame">
                        <AgreementCheckboxTextComponent className="AgreementCheckboxTextComponent" type="content">
                          (필수) 개인정보 수집·이용 동의
                        </AgreementCheckboxTextComponent>
                      </AgreementCheckboxTextFrame>
                    </AgreementLineCoreFrame>
                    <AgreementLineAdditionalFrame className="AgreementLineAdditionalFrame">
                      <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame">
                        <AgreementCheckboxTextComponent className="AgreementCheckboxTextComponent" type="additional">
                          상세보기
                        </AgreementCheckboxTextComponent>
                      </AgreementCheckboxTextFrame>
                    </AgreementLineAdditionalFrame>
                  </AgreementLineComponent>
                  <AgreementLineComponent
                    className="AgreementLineComponent"
                    margin="10px 0px 10px 0px"
                    justifyContent="space-between"
                  >
                    <AgreementLineCoreFrame className="AgreementLineCoreFrame">
                      <AgreementCheckboxInputFrame
                        className="AgreementCheckboxInputFrame"
                        width={"15px"}
                        minWidth={"15px"}
                        margin="0px 10px 0px 10px"
                        onClick={() => onClickCheckButton({ key: 3 })}
                      >
                        <AgreementCheckboxInputComponent
                          className="AgreementCheckboxInputComponent"
                          src={agreeCheck.third ? onClickCheckedIcon : onClickNotCheckedIcon}
                        ></AgreementCheckboxInputComponent>
                      </AgreementCheckboxInputFrame>
                      <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame">
                        <AgreementCheckboxTextComponent className="AgreementCheckboxTextComponent" type="content">
                          (필수) 개인정보 취급·위탁
                        </AgreementCheckboxTextComponent>
                      </AgreementCheckboxTextFrame>
                    </AgreementLineCoreFrame>
                    <AgreementLineAdditionalFrame className="AgreementLineAdditionalFrame">
                      <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame">
                        <AgreementCheckboxTextComponent className="AgreementCheckboxTextComponent" type="additional">
                          상세보기
                        </AgreementCheckboxTextComponent>
                      </AgreementCheckboxTextFrame>
                    </AgreementLineAdditionalFrame>
                  </AgreementLineComponent>
                </AgreementFieldFrame>
              </AgreementFrame>
            </ContentFrame>
          ) : null}
          {CommonData.selectType ? (
            <ButtonFrame className="ButtonFrame">
              <ButtonComponent
                className="ButtonComponent"
                width={"340px"}
                border={"1px solid #0d985b"}
                backgroundColor={agreeCheck.first && agreeCheck.second && agreeCheck.third ? "#00B264" : "transparent"}
                color={agreeCheck.first && agreeCheck.second && agreeCheck.third ? "#FFFFFF" : "#00B264"}
                cursor={agreeCheck.first && agreeCheck.second && agreeCheck.third ? "pointer" : ""}
                onClick={agreeCheck.first && agreeCheck.second && agreeCheck.third ? onClickGoButton : () => {}}
              >
                본인인증하기
              </ButtonComponent>
            </ButtonFrame>
          ) : null}
        </ContainterContent>
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
export default PharmacyAgreePage;
