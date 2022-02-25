import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import LogoImageIcon from "../../../assets/icons/LogoImageIcon.png";
import onClickCheckedToggleIcon from "../../../assets/icons/onClickCheckedToggleIcon.svg";
import onClickNotCheckedToggleIcon from "../../../assets/icons/onClickNotCheckedToggleIcon.svg";
import onClickNotCheckedCircleIcon from "../../../assets/icons/onClickNotCheckedCircleIcon.svg";
import onClickCheckedCircleIcon from "../../../assets/icons/onClickCheckedCircleIcon.svg";
import onClickNotCheckedIcon from "../../../assets/icons/onClickNotCheckedIcon.svg";
import onClickCheckedIcon from "../../../assets/icons/onClickCheckedIcon.svg";

import AcneIcon from "../../../assets/icons/AcneIcon.svg";
import AtopyIcon from "../../../assets/icons/AtopyIcon.svg";
import ColdIcon from "../../../assets/icons/ColdIcon.svg";
import CoronaIcon from "../../../assets/icons/CoronaIcon.svg";
import CystitisIcon from "../../../assets/icons/CystitisIcon.svg";
import DentistIcon from "../../../assets/icons/DentistIcon.svg";
import DermatologyIcon from "../../../assets/icons/DermatologyIcon.svg";
import EmergencyMedicineIcon from "../../../assets/icons/EmergencyMedicineIcon.svg";
import FamilyMedicineIcon from "../../../assets/icons/FamilyMedicineIcon.svg";
import HairLossIcon from "../../../assets/icons/HairLossIcon.svg";
import HeadacheIcon from "../../../assets/icons/HeadacheIcon.svg";
import HypertensionAndDiabetesIcon from "../../../assets/icons/HypertensionAndDiabetesIcon.svg";
import InternalMedicineIcon from "../../../assets/icons/InternalMedicineIcon.svg";
import KoreanMedicineIcon from "../../../assets/icons/KoreanMedicineIcon.svg";
import MorningAfterPillIcon from "../../../assets/icons/MorningAfterPillIcon.svg";
import MuscleAndBackPainIcon from "../../../assets/icons/MuscleAndBackPainIcon.svg";
import NeurologyIcon from "../../../assets/icons/NeurologyIcon.svg";
import ObesityIcon from "../../../assets/icons/ObesityIcon.svg";
import ObGynIcon from "../../../assets/icons/ObGynIcon.svg";
import OphthalmologyIcon from "../../../assets/icons/OphthalmologyIcon.svg";
import OrthopedicsIcon from "../../../assets/icons/OrthopedicsIcon.svg";
import OtolaryngologyIcon from "../../../assets/icons/OtolaryngologyIcon.svg";
import PediatricsIcon from "../../../assets/icons/PediatricsIcon.svg";
import PeriodPainIcon from "../../../assets/icons/PeriodPainIcon.svg";
import PlasticSurgeryIcon from "../../../assets/icons/PlasticSurgeryIcon.svg";
import PsychiatryIcon from "../../../assets/icons/PsychiatryIcon.svg";
import RhinitisIcon from "../../../assets/icons/RhinitisIcon.svg";
import StomachacheIcon from "../../../assets/icons/StomachacheIcon.svg";
import UrologyIcon from "../../../assets/icons/UrologyIcon.svg";

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
/* const InputFakeComponent = styled.input`
  display: none;
`; */
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
  border: ${(props) => (props.border ? props.border : "")};

  box-sizing: border-box;
  border-radius: 4px;

  cursor: ${(props) => (props.cursor ? props.cursor : "")};
`;
const InputCheckboxFrame = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};

  cursor: pointer;
`;
const InputCheckboxComponent = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
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
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : "")};
  justify-content: center;

  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const AgreementCheckboxTextComponent = styled.span<Props>`
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

  cursor: ${(props) => (props.designType === "additional" ? "pointer" : "")};
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

const HospitalJoinFourthStepPage = observer((props: any) => {
  const { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  const HospitalData = useStore().HospitalData;

  const onClickGoButton = () => {
    /* TODO */
  };
  const onClickBackButton = () => {
    history.push({ pathname: "/hospital/join/thirdStep" });
  };

  /*  */

  useEffect(() => {
    if (
      HospitalData.delegatorDoctorEmailData &&
      HospitalData.delegatorDoctorLicenseNumberData &&
      HospitalData.delegatorDoctorDepratmentsData.filter(
        (delegatorDoctorDepratmentData) => delegatorDoctorDepratmentData.flag === true
      ).length !== 0 &&
      HospitalData.delegatorDoctorDiseasesData.filter(
        (delegatorDoctorDiseaseData) => delegatorDoctorDiseaseData.flag === true
      ).length !== 0
    ) {
      HospitalData.setJoinFourthPageValidateCheckFlagData(true);
    } else {
      HospitalData.setJoinFourthPageValidateCheckFlagData(false);
    }
  }, [
    HospitalData.delegatorDoctorEmailData,
    HospitalData.delegatorDoctorLicenseNumberData,
    HospitalData.delegatorDoctorDepratmentsData,
    HospitalData.delegatorDoctorDiseasesData,
    HospitalData,
  ]);

  /*  */

  useEffect(() => {
    if (!HospitalData.delegatorDoctorNameData) {
      HospitalData.setDelegatorDoctorNameData(HospitalData.delegatorNameData);
    }
    if (!HospitalData.delegatorDoctorBirthdayData) {
      HospitalData.setDelegatorDoctorBirthdayData(HospitalData.delegatorBirthdayData);
    }
    if (!HospitalData.delegatorDoctorPhoneNumberData) {
      HospitalData.setDelegatorDoctorPhoneNumberData(HospitalData.delegatorPhoneNumberData);
    }
    if (!HospitalData.delegatorDoctorEmailData) {
      HospitalData.setDelegatorDoctorEmailData(HospitalData.delegatorEmailData);
    }
    if (!HospitalData.delegatorBusinessNameData) {
      HospitalData.setDelegatorBusinessNameData(HospitalData.businessNameData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*  */

  const onClickSpecialistCheckButton = () => {
    HospitalData.setDelegatorDoctorSpecialistFlagData(!HospitalData.delegatorDoctorSpecialistFlagData);
  };
  const onClickCompanionCheckButton = () => {
    HospitalData.setCompanionDoctorFlagData(!HospitalData.companionDoctorFlagData);
  };

  const DoctorSpecialistDepartmentsListData = [
    "선택",
    "가정의학과",
    "결핵과",
    "내과",
    "소아청소년과",
    "신경과",
    "정신건강의학과",
    "재활의학과",
    "피부과",
    "비뇨의학과",
    "산부인과",
    "성형외과",
    "신경외과",
    "안과",
    "외과",
    "이비인후과",
    "정형외과",
    "흉부외과",
    "마취통증의학과",
    "방사선종양학과",
    "영상의학과",
    "응급의학과",
    "직업환경의학과",
    "진단검사의학과",
    "핵의학과",
    "예방의학과",
    "병리과",
    "한방재활의학과",
    "한방내과",
    "한방부인과",
    "한방소아과",
    "침구과",
    "사상의학과",
    "한방안이비인후피부과",
    "한방신경정신과",
  ];

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

  const onClickCompanionPlusButton = () => {
    HospitalData.pushCompanionDoctorPhoneNumberListData("");
  };

  const onChangeCompanionDoctorPhoneNumberListData = (props: any) => {
    const { event, key } = props;
    const tempcompanionDoctorPhoneNumberListData = [...HospitalData.companionDoctorPhoneNumberListData];
    tempcompanionDoctorPhoneNumberListData[key] = event.target.value;
    HospitalData.setCompanionDoctorPhoneNumberListData(tempcompanionDoctorPhoneNumberListData);
  };

  const onClickCompanionMinusButton = (props: any) => {
    const { key } = props;
    HospitalData.spliceCompanionDoctorPhoneNumberListData(key);
  };

  const DoctorDepartmentsListData = [
    "내과",
    "가정의학과",
    "이비인후과",
    "소아청소년과",
    "비뇨의학과",
    "피부과",
    "정신건강의학과",
    "산부인과",
    "안과",
    "정형외과/재활의학과",
    "신경과/신경외과",
    "치과",
    "응급의학과",
    "성형외과",
    "한방의학과",
  ];

  const DoctorDiseasesListData = [
    "감기/몸살",
    "근육통/허리통증",
    "복통",
    "두통",
    "비염",
    "고혈압/당뇨",
    "생리통",
    "여드름",
    "아토피",
    "비만",
    "방광염",
    "탈모",
    "사후피임",
    "코로나 재택치료",
  ];

  useEffect(() => {
    HospitalData.setDelegatorDoctorDepratmentsData([
      { name: "내과", flag: false },
      { name: "가정의학과", flag: false },
      { name: "이비인후과", flag: false },
      { name: "소아청소년과", flag: false },
      { name: "비뇨의학과", flag: false },
      { name: "피부과", flag: false },
      { name: "정신건강의학과", flag: false },
      { name: "산부인과", flag: false },
      { name: "안과", flag: false },
      { name: "정형외과/재활의학과", flag: false },
      { name: "신경과/신경외과", flag: false },
      { name: "치과", flag: false },
      { name: "응급의학과", flag: false },
      { name: "성형외과", flag: false },
      { name: "한방의학과", flag: false },
    ]);

    HospitalData.setDelegatorDoctorDiseasesData([
      { name: "감기/몸살", flag: false },
      { name: "근육통/허리통증", flag: false },
      { name: "복통", flag: false },
      { name: "두통", flag: false },
      { name: "비염", flag: false },
      { name: "고혈압/당뇨", flag: false },
      { name: "생리통", flag: false },
      { name: "여드름", flag: false },
      { name: "아토피", flag: false },
      { name: "비만", flag: false },
      { name: "방광염", flag: false },
      { name: "탈모", flag: false },
      { name: "사후피임", flag: false },
      { name: "코로나 재택치료", flag: false },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickDepartmentsCheckButton = (props: any) => {
    const { key } = props;
    if (
      HospitalData.delegatorDoctorDepratmentsData.filter(
        (delegatorDoctorDepratmentsData) => delegatorDoctorDepratmentsData.flag === true
      ).length > 3
    ) {
      let tempDelegatorDoctorDepratmentsData = JSON.parse(JSON.stringify(HospitalData.delegatorDoctorDepratmentsData));
      if (HospitalData.delegatorDoctorDepratmentsData[key].flag === true) {
        tempDelegatorDoctorDepratmentsData[key].flag = false;
      }
      HospitalData.setDelegatorDoctorDepratmentsData(tempDelegatorDoctorDepratmentsData);
    } else {
      let tempDelegatorDoctorDepratmentsData = JSON.parse(JSON.stringify(HospitalData.delegatorDoctorDepratmentsData));
      if (HospitalData.delegatorDoctorDepratmentsData[key].flag === true) {
        tempDelegatorDoctorDepratmentsData[key].flag = false;
      } else if (HospitalData.delegatorDoctorDepratmentsData[key].flag === false) {
        tempDelegatorDoctorDepratmentsData[key].flag = true;
      }
      HospitalData.setDelegatorDoctorDepratmentsData(tempDelegatorDoctorDepratmentsData);
    }
  };

  const onClickDiseasesCheckButton = (props: any) => {
    const { key } = props;
    if (key === -1) {
      let tempDelegatorDoctorDiseasesData = JSON.parse(JSON.stringify(HospitalData.delegatorDoctorDiseasesData));
      for (let i = 0; i < tempDelegatorDoctorDiseasesData.length; i++) {
        tempDelegatorDoctorDiseasesData[i].flag = true;
      }
      HospitalData.setDelegatorDoctorDiseasesData(tempDelegatorDoctorDiseasesData);
    } else if (key === 0) {
      let tempDelegatorDoctorDiseasesData = JSON.parse(JSON.stringify(HospitalData.delegatorDoctorDiseasesData));
      for (let i = 0; i < tempDelegatorDoctorDiseasesData.length; i++) {
        tempDelegatorDoctorDiseasesData[i].flag = false;
      }
      HospitalData.setDelegatorDoctorDiseasesData(tempDelegatorDoctorDiseasesData);
    } else {
      let tempDelegatorDoctorDiseasesData = JSON.parse(JSON.stringify(HospitalData.delegatorDoctorDiseasesData));
      if (HospitalData.delegatorDoctorDiseasesData[key - 1].flag === true) {
        tempDelegatorDoctorDiseasesData[key - 1].flag = false;
      } else if (HospitalData.delegatorDoctorDiseasesData[key - 1].flag === false) {
        tempDelegatorDoctorDiseasesData[key - 1].flag = true;
      }
      HospitalData.setDelegatorDoctorDiseasesData(tempDelegatorDoctorDiseasesData);
    }
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
                        대표 원장 정보
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
                        성명
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"}>
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        {HospitalData.delegatorDoctorNameData ? HospitalData.delegatorDoctorNameData : ""}
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
                        생년월일
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"}>
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        {HospitalData.delegatorDoctorBirthdayData ? HospitalData.delegatorDoctorBirthdayData : ""}
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
                        휴대폰 번호
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"}>
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        {HospitalData.delegatorDoctorPhoneNumberData ? HospitalData.delegatorDoctorPhoneNumberData : ""}
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
                        value={HospitalData.delegatorDoctorEmailData ? HospitalData.delegatorDoctorEmailData : ""}
                        onChange={(event) => HospitalData.setDelegatorDoctorEmailData(event.target.value)}
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
                        소속 의료기관 이름
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"}>
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        {HospitalData.delegatorBusinessNameData ? HospitalData.delegatorBusinessNameData : ""}
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
                        *의사 면허 번호
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="면허 번호를 입력해 주세요."
                        value={
                          HospitalData.delegatorDoctorLicenseNumberData
                            ? HospitalData.delegatorDoctorLicenseNumberData
                            : ""
                        }
                        onChange={(event) => HospitalData.setDelegatorDoctorLicenseNumberData(event.target.value)}
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
                        *전문의 여부
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputCheckboxFrame
                      className="InputCheckboxFrame"
                      minWidth="40px"
                      maxWidth="40px"
                      margin="0px 15px 0px 0px"
                      backgroundColor={"#E1E1E1"}
                      border={"1px solid #E0E0E0"}
                      onClick={() => {
                        onClickSpecialistCheckButton();
                      }}
                    >
                      <InputCheckboxComponent
                        className="InputCheckboxComponent"
                        src={
                          HospitalData.delegatorDoctorSpecialistFlagData
                            ? onClickCheckedToggleIcon
                            : onClickNotCheckedToggleIcon
                        }
                      ></InputCheckboxComponent>
                    </InputCheckboxFrame>
                    {HospitalData.delegatorDoctorSpecialistFlagData ? (
                      <InputTextFrame className="InputTextFrame" width={"100%"}>
                        <SelectTextComponent
                          className="SelectTextComponent"
                          width={"100%"}
                          value={
                            HospitalData.delegatorDoctorSpecialistDepartmentData
                              ? HospitalData.delegatorDoctorSpecialistDepartmentData
                              : ""
                          }
                          onChange={(event) =>
                            HospitalData.setDelegatorDoctorSpecialistDepartmentData(event.target.value)
                          }
                        >
                          {DoctorSpecialistDepartmentsListData.map((DoctorSpecialistDepartment, key) => {
                            return (
                              <OptionTextComponent
                                className="OptionTextComponent"
                                key={key}
                                value={DoctorSpecialistDepartment}
                              >
                                {DoctorSpecialistDepartment}
                              </OptionTextComponent>
                            );
                          })}
                        </SelectTextComponent>
                      </InputTextFrame>
                    ) : null}
                  </LineAdditionalFrame>
                </LineComponent>
                {/*  */}
                <LineComponent
                  className="LineComponent"
                  margin="10px 0px 0px 0px"
                  justifyContent="space-between"
                  height={"35px"}
                >
                  <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *메듭 App 노출 진료과 (최대 4개)
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                </LineComponent>
                <LineComponent className="LineComponent" margin="0px 0px 10px 0px" justifyContent="space-between">
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"} flexWrap="wrap">
                    {HospitalData.delegatorDoctorDepratmentsData.length !== 0
                      ? DoctorDepartmentsListData.map((DoctorDepartmentsData, key) => {
                          return (
                            <InputButtonFrame className="InputButtonFrame" key={key} margin="5px 0px 5px 0px">
                              <InputButtonComponent
                                className="InputButtonComponent"
                                margin="0px 10px 0px 0px"
                                backgroundColor={
                                  HospitalData.delegatorDoctorDepratmentsData[key].flag ? "#F7FDFA" : "#FFFFFF"
                                }
                                border={
                                  HospitalData.delegatorDoctorDepratmentsData[key].flag
                                    ? "1px solid #00B264"
                                    : "1px solid #E3E3E3"
                                }
                                color={"#393939"}
                                cursor={"pointer"}
                                justifyContent="center"
                                flexDirection="row"
                                alignItems="center"
                                onClick={() => {
                                  onClickDepartmentsCheckButton({ key: key });
                                }}
                              >
                                <InputCheckboxFrame
                                  className="InputCheckboxFrame"
                                  minWidth="15px"
                                  maxWidth="15px"
                                  margin="0px 5px 0px 0px"
                                  backgroundColor={"#E1E1E1"}
                                  border={"1px solid #E0E0E0"}
                                >
                                  <InputCheckboxComponent
                                    className="InputCheckboxComponent"
                                    src={
                                      DoctorDepartmentsData
                                        ? DoctorDepartmentsData === "내과"
                                          ? InternalMedicineIcon
                                          : DoctorDepartmentsData === "가정의학과"
                                          ? FamilyMedicineIcon
                                          : DoctorDepartmentsData === "이비인후과"
                                          ? OtolaryngologyIcon
                                          : DoctorDepartmentsData === "소아청소년과"
                                          ? PediatricsIcon
                                          : DoctorDepartmentsData === "비뇨의학과"
                                          ? UrologyIcon
                                          : DoctorDepartmentsData === "피부과"
                                          ? DermatologyIcon
                                          : DoctorDepartmentsData === "정신건강의학과"
                                          ? PsychiatryIcon
                                          : DoctorDepartmentsData === "산부인과"
                                          ? ObGynIcon
                                          : DoctorDepartmentsData === "안과"
                                          ? OphthalmologyIcon
                                          : DoctorDepartmentsData === "정형외과/재활의학과"
                                          ? OrthopedicsIcon
                                          : DoctorDepartmentsData === "신경과/신경외과"
                                          ? NeurologyIcon
                                          : DoctorDepartmentsData === "치과"
                                          ? DentistIcon
                                          : DoctorDepartmentsData === "응급의학과"
                                          ? EmergencyMedicineIcon
                                          : DoctorDepartmentsData === "성형외과"
                                          ? PlasticSurgeryIcon
                                          : DoctorDepartmentsData === "한방의학과"
                                          ? KoreanMedicineIcon
                                          : ""
                                        : ""
                                    }
                                  ></InputCheckboxComponent>
                                </InputCheckboxFrame>
                                {DoctorDepartmentsData}
                              </InputButtonComponent>
                            </InputButtonFrame>
                          );
                        })
                      : null}
                  </LineAdditionalFrame>
                </LineComponent>
                <LineComponent
                  className="LineComponent"
                  margin="10px 0px 0px 0px"
                  justifyContent="space-between"
                  height={"35px"}
                >
                  <LineCoreFrame className="LineCoreFrame" minWidth={"175px"}>
                    <PlainTextFrame className="PlainTextFrame">
                      <PlainTextComponent className="PlainTextComponent" designType="content">
                        *메듭 App 노출 질환 (제한 없음)
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px" maxWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={() => {
                          onClickDiseasesCheckButton({ key: -1 });
                        }}
                        backgroundColor={"#FFFFFF"}
                        border={"1px solid #E3E3E3"}
                        color={"#393939"}
                        cursor={"pointer"}
                      >
                        전체 선택
                      </InputButtonComponent>
                    </InputButtonFrame>
                    <InputButtonFrame className="InputButtonFrame" minWidth="70px" maxWidth="70px">
                      <InputButtonComponent
                        className="InputButtonComponent"
                        margin="0px 0px 0px 5px"
                        onClick={() => {
                          onClickDiseasesCheckButton({ key: 0 });
                        }}
                        backgroundColor={"#FFFFFF"}
                        border={"1px solid #E3E3E3"}
                        color={"#393939"}
                        cursor={"pointer"}
                      >
                        전체 해제
                      </InputButtonComponent>
                    </InputButtonFrame>
                  </LineAdditionalFrame>
                </LineComponent>
                <LineComponent className="LineComponent" margin="0px 0px 10px 0px" justifyContent="space-between">
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"} flexWrap="wrap">
                    {HospitalData.delegatorDoctorDiseasesData.length !== 0
                      ? DoctorDiseasesListData.map((DoctorDiseasesData, key) => {
                          return (
                            <InputButtonFrame className="InputButtonFrame" key={key} margin="5px 0px 5px 0px">
                              <InputButtonComponent
                                className="InputButtonComponent"
                                margin="0px 10px 0px 0px"
                                backgroundColor={
                                  HospitalData.delegatorDoctorDiseasesData[key].flag ? "#F7FDFA" : "#FFFFFF"
                                }
                                border={
                                  HospitalData.delegatorDoctorDiseasesData[key].flag
                                    ? "1px solid #00B264"
                                    : "1px solid #E3E3E3"
                                }
                                color={"#393939"}
                                cursor={"pointer"}
                                justifyContent="center"
                                flexDirection="row"
                                alignItems="center"
                                onClick={() => {
                                  onClickDiseasesCheckButton({ key: key + 1 });
                                }}
                              >
                                <InputCheckboxFrame
                                  className="InputCheckboxFrame"
                                  minWidth="15px"
                                  maxWidth="15px"
                                  margin="0px 5px 0px 0px"
                                  backgroundColor={"#E1E1E1"}
                                  border={"1px solid #E0E0E0"}
                                >
                                  <InputCheckboxComponent
                                    className="InputCheckboxComponent"
                                    src={
                                      DoctorDiseasesData
                                        ? DoctorDiseasesData === "감기/몸살"
                                          ? ColdIcon
                                          : DoctorDiseasesData === "근육통/허리통증"
                                          ? MuscleAndBackPainIcon
                                          : DoctorDiseasesData === "복통"
                                          ? StomachacheIcon
                                          : DoctorDiseasesData === "두통"
                                          ? HeadacheIcon
                                          : DoctorDiseasesData === "비염"
                                          ? RhinitisIcon
                                          : DoctorDiseasesData === "고혈압/당뇨"
                                          ? HypertensionAndDiabetesIcon
                                          : DoctorDiseasesData === "생리통"
                                          ? PeriodPainIcon
                                          : DoctorDiseasesData === "여드름"
                                          ? AcneIcon
                                          : DoctorDiseasesData === "아토피"
                                          ? AtopyIcon
                                          : DoctorDiseasesData === "비만"
                                          ? ObesityIcon
                                          : DoctorDiseasesData === "방광염"
                                          ? CystitisIcon
                                          : DoctorDiseasesData === "탈모"
                                          ? HairLossIcon
                                          : DoctorDiseasesData === "사후피임"
                                          ? MorningAfterPillIcon
                                          : DoctorDiseasesData === "코로나 재택치료"
                                          ? CoronaIcon
                                          : ""
                                        : ""
                                    }
                                  ></InputCheckboxComponent>
                                </InputCheckboxFrame>
                                {DoctorDiseasesData}
                              </InputButtonComponent>
                            </InputButtonFrame>
                          );
                        })
                      : null}
                  </LineAdditionalFrame>
                </LineComponent>
              </FieldFrame>
            </Frame>
            <AgreementFrame className="AgreementFrame">
              <AgreementTitleFrame className="AgreementTitleFrame">
                <AgreementLineComponent
                  className="AgreementLineComponent"
                  margin="10px 0px 5px 0px"
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
                    <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame" flexDirection="row">
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="center"
                        designType="title"
                      >
                        약관 전체 동의
                      </AgreementCheckboxTextComponent>
                    </AgreementCheckboxTextFrame>
                  </AgreementLineCoreFrame>
                  <AgreementLineAdditionalFrame className="AgreementLineAdditionalFrame"></AgreementLineAdditionalFrame>
                </AgreementLineComponent>
              </AgreementTitleFrame>
              <AgreementDelimiterFrame className="AgreementDelimiterFrame">
                <AgreementDelimiterComponent className="AgreementDelimiterComponent"></AgreementDelimiterComponent>
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
                    <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame" flexDirection="column">
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="left"
                        designType="content"
                      >
                        (필수) 본인(의료진)은 의료 행위를 하는
                      </AgreementCheckboxTextComponent>
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="left"
                        designType="content"
                      >
                        의료진의 정보를 거짓·허위 표시하지 않음에 확약하며,
                      </AgreementCheckboxTextComponent>
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="left"
                        designType="content"
                      >
                        위반 시 본인(의료진)이 법적인 책임을 부담합니다.
                      </AgreementCheckboxTextComponent>
                    </AgreementCheckboxTextFrame>
                  </AgreementLineCoreFrame>
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
                    <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame" flexDirection="row">
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="center"
                        designType="content"
                      >
                        (필수) 개인정보 수집·이용 동의
                      </AgreementCheckboxTextComponent>
                    </AgreementCheckboxTextFrame>
                  </AgreementLineCoreFrame>
                  <AgreementLineAdditionalFrame className="AgreementLineAdditionalFrame">
                    <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame" flexDirection="row">
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="center"
                        designType="additional"
                      >
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
                    <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame" flexDirection="row">
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="center"
                        designType="content"
                      >
                        (필수) 개인정보 취급·위탁
                      </AgreementCheckboxTextComponent>
                    </AgreementCheckboxTextFrame>
                  </AgreementLineCoreFrame>
                  <AgreementLineAdditionalFrame className="AgreementLineAdditionalFrame">
                    <AgreementCheckboxTextFrame className="AgreementCheckboxTextFrame" flexDirection="row">
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="center"
                        designType="additional"
                      >
                        상세보기
                      </AgreementCheckboxTextComponent>
                    </AgreementCheckboxTextFrame>
                  </AgreementLineAdditionalFrame>
                </AgreementLineComponent>
              </AgreementFieldFrame>
            </AgreementFrame>
            <Frame className="Frame">
              <TitleFrame className="TitleFrame">
                <LineComponent className="LineComponent" margin="10px 0px 5px 0px" justifyContent="space-between">
                  <LineCoreFrame className="LineCoreFrame">
                    <PlainTextFrame className="PlainTextFrame" margin="0px 10px 0px 10px">
                      <PlainTextComponent className="PlainTextComponent" designType="title">
                        소속 의료진 추가
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
                  <PlainTextFrame className="PlainTextFrame" padding={"0px 10px 0px 10px"} flexDirection="column">
                    <PlainTextComponent className="PlainTextComponent" designType="additional" cursor="text">
                      대표 원장 외 의료진이 있을 경우,
                    </PlainTextComponent>
                    <PlainTextComponent className="PlainTextComponent" designType="additional" cursor="text">
                      의사를 추가하여 메듭 가입 URL을 전송해 주세요
                    </PlainTextComponent>
                  </PlainTextFrame>
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
                        *추가 의료진 여부
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputCheckboxFrame
                      className="InputCheckboxFrame"
                      minWidth="40px"
                      maxWidth="40px"
                      margin="0px 15px 0px 0px"
                      backgroundColor={"#E1E1E1"}
                      border={"1px solid #E0E0E0"}
                      onClick={() => {
                        onClickCompanionCheckButton();
                      }}
                    >
                      <InputCheckboxComponent
                        className="InputCheckboxComponent"
                        src={
                          HospitalData.companionDoctorFlagData ? onClickCheckedToggleIcon : onClickNotCheckedToggleIcon
                        }
                      ></InputCheckboxComponent>
                    </InputCheckboxFrame>
                    {HospitalData.companionDoctorFlagData ? (
                      <InputButtonFrame className="InputButtonFrame" minWidth="110px" maxWidth="110px">
                        <InputButtonComponent
                          className="InputButtonComponent"
                          margin="0px 0px 0px 5px"
                          onClick={() => {
                            onClickCompanionPlusButton();
                          }}
                          backgroundColor={"#FFFFFF"}
                          border={"1px solid #0D985B"}
                          color={"#00B264"}
                          cursor={"pointer"}
                        >
                          + 의사 추가하기
                        </InputButtonComponent>
                      </InputButtonFrame>
                    ) : null}
                  </LineAdditionalFrame>
                </LineComponent>
                {HospitalData.companionDoctorFlagData
                  ? HospitalData.companionDoctorPhoneNumberListData.map((companionDoctorPhoneNumberData, key) => {
                      return (
                        <LineComponent
                          className="LineComponent"
                          margin="10px 0px 10px 0px"
                          justifyContent="space-between"
                          height={"35px"}
                          key={key}
                        >
                          <LineCoreFrame className="LineCoreFrame" minWidth={"105px"}>
                            <PlainTextFrame className="PlainTextFrame">
                              <PlainTextComponent className="PlainTextComponent" designType="content">
                                *의사 {key} 전화번호
                              </PlainTextComponent>
                            </PlainTextFrame>
                          </LineCoreFrame>
                          <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                            <InputTextFrame className="InputTextFrame" width={"100%"}>
                              <InputTextComponent
                                className="InputTextComponent"
                                width={"100%"}
                                placeholder="-없이 숫자만 입력해 주세요."
                                value={
                                  HospitalData.companionDoctorPhoneNumberListData[key]
                                    ? HospitalData.companionDoctorPhoneNumberListData[key]
                                    : ""
                                }
                                onChange={(e) => onChangeCompanionDoctorPhoneNumberListData({ event: e, key: key })}
                              ></InputTextComponent>
                            </InputTextFrame>
                            <InputButtonFrame className="InputButtonFrame" minWidth="110px" maxWidth="110px">
                              <InputButtonComponent
                                className="InputButtonComponent"
                                margin="0px 0px 0px 5px"
                                onClick={() => {
                                  onClickCompanionMinusButton({ key: key });
                                }}
                                backgroundColor={"#FFFFFF"}
                                border={"1px solid #0D985B"}
                                color={"#00B264"}
                                cursor={"pointer"}
                              >
                                - 의사 삭제하기
                              </InputButtonComponent>
                            </InputButtonFrame>
                          </LineAdditionalFrame>
                        </LineComponent>
                      );
                    })
                  : null}
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
              backgroundColor={
                HospitalData.joinFourthPageValidateCheckFlagData &&
                agreeCheck.first &&
                agreeCheck.second &&
                agreeCheck.third
                  ? "#00B264"
                  : "transparent"
              }
              color={
                HospitalData.joinFourthPageValidateCheckFlagData &&
                agreeCheck.first &&
                agreeCheck.second &&
                agreeCheck.third
                  ? "#FFFFFF"
                  : "#00B264"
              }
              cursor={
                HospitalData.joinFourthPageValidateCheckFlagData &&
                agreeCheck.first &&
                agreeCheck.second &&
                agreeCheck.third
                  ? "pointer"
                  : ""
              }
              onClick={
                HospitalData.joinFourthPageValidateCheckFlagData &&
                agreeCheck.first &&
                agreeCheck.second &&
                agreeCheck.third
                  ? onClickGoButton
                  : () => {}
              }
            >
              완료 (4/4)
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
export default HospitalJoinFourthStepPage;
