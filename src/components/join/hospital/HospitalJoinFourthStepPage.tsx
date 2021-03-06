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

import { PostPublicSignupHospital } from "../../../services/hospital/PostPublicSignupHospital";
import { PostPublicSignupHospitalFiles } from "../../../services/hospital/PostPublicSignupHospitalFiles";

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
  const CommonData = useStore().CommonData;

  const onClickGoButton = () => {
    const PostPublicSignupHospitalFunction = async () => {
      let tempDelegatorDoctorDepratmentsData = [];
      for (let i = 0; i < HospitalData.delegatorDoctorDepratmentsData.length; i++) {
        if (HospitalData.delegatorDoctorDepratmentsData[i].flag === true) {
          tempDelegatorDoctorDepratmentsData.push(HospitalData.delegatorDoctorDepratmentsData[i].name);
        }
      }
      let tempDelegatorDoctorDiseasesData = [];
      for (let i = 0; i < HospitalData.delegatorDoctorDiseasesData.length; i++) {
        if (HospitalData.delegatorDoctorDiseasesData[i].flag === true) {
          tempDelegatorDoctorDiseasesData.push(HospitalData.delegatorDoctorDiseasesData[i].name);
        }
      }
      const PostPublicSignupHospitalData = {
        businessInfo: {
          businessRegName: HospitalData.businessNameData,
          businessRegNum: HospitalData.businessLicenseNumberData,
          businessRegAddress: HospitalData.businessAddressData,
          businessRegLocation: HospitalData.businessLocationData,
          corpNum: HospitalData.corporateNumberData,
          ownerName: HospitalData.delegatorNameData,
          ownerBirthday: HospitalData.delegatorBirthdayData,
          ownerPhoneNum: HospitalData.delegatorPhoneNumberData,
          ownerEmail: HospitalData.delegatorEmailData,
          ownerCi: CommonData.certificationData?.ci,
        },
        manager: {
          isEmpty: !HospitalData.managerExistData,
          name: HospitalData.managerNameData,
          email: HospitalData.managerEmailData,
          phoneNum: HospitalData.managerPhoneNumberData,
          dmAddress: HospitalData.managerAddressData,
          dmLocation: HospitalData.managerLocationData,
        },
        settlementInfo: {
          bankName:
            HospitalData.bankNameData === "????????????" || !HospitalData.bankNameData
              ? HospitalData.customBankNameData
              : HospitalData.bankNameData,
          accountNumber: HospitalData.bankAccountNumberData,
          accountHolderName: HospitalData.bankAccountOwnerNameData,
          email: HospitalData.settlementEmailData,
        },
        operationInfo: {
          accountId: HospitalData.accountIDData,
          password: HospitalData.accountPasswordData,
          name: HospitalData.hospitalNameData,
          phoneNum: HospitalData.hospitalPhoneNumberData,
          faxNum: HospitalData.hospitalFaxNumberData,
          address: HospitalData.hospitalAddressData,
          location: HospitalData.hospitalLocationData,
        },
        doctorInfo: {
          name: HospitalData.delegatorDoctorNameData,
          birthday: HospitalData.delegatorBirthdayData,
          phoneNum: HospitalData.delegatorDoctorPhoneNumberData,
          email: HospitalData.delegatorDoctorEmailData,
          licenseNum: HospitalData.delegatorDoctorLicenseNumberData,
          specialistDepartment: HospitalData.delegatorDoctorSpecialistDepartmentData,
          departments: tempDelegatorDoctorDepratmentsData,
          diseases: tempDelegatorDoctorDiseasesData,
          ci: CommonData.certificationData?.ci,
          /* code: "", */
        },
        doctorPhoneNumList: HospitalData.companionDoctorPhoneNumberListData,
      };

      const response = await PostPublicSignupHospital(PostPublicSignupHospitalData);
      if (response.status === 201) {
        const PostPublicSignupHospitalFilesData = new FormData();
        PostPublicSignupHospitalFilesData.append(
          "data",
          JSON.stringify({
            settlementImgFiles: [HospitalData.bankBookImageData],
            businessImgFiles: [HospitalData.businessLicenseImageData],
          })
        );
        if (HospitalData.businessLicenseImageFileData) {
          PostPublicSignupHospitalFilesData.append("files", HospitalData.businessLicenseImageFileData);
        }
        if (HospitalData.bankBookImageFileData) {
          PostPublicSignupHospitalFilesData.append("files", HospitalData.bankBookImageFileData);
        }
        const response = await PostPublicSignupHospitalFiles(PostPublicSignupHospitalFilesData);
        if (response.status === 201) {
          setValidateFlag(false);
          history.push({ pathname: "/hospital/join/complete" });
        } else {
          window.alert("?????? ???????????? ??????");
        }
        return response;
      } else {
        window.alert("?????? ???????????? ??????");
      }
      return response;
    };
    PostPublicSignupHospitalFunction();
  };
  const onClickBackButton = () => {
    setValidateFlag(false);
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
    "??????",
    "???????????????",
    "?????????",
    "??????",
    "??????????????????",
    "?????????",
    "?????????????????????",
    "???????????????",
    "?????????",
    "???????????????",
    "????????????",
    "????????????",
    "????????????",
    "??????",
    "??????",
    "???????????????",
    "????????????",
    "????????????",
    "?????????????????????",
    "?????????????????????",
    "???????????????",
    "???????????????",
    "?????????????????????",
    "?????????????????????",
    "????????????",
    "???????????????",
    "?????????",
    "?????????????????????",
    "????????????",
    "???????????????",
    "???????????????",
    "?????????",
    "???????????????",
    "??????????????????????????????",
    "?????????????????????",
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
    "??????",
    "???????????????",
    "???????????????",
    "??????????????????",
    "???????????????",
    "?????????",
    "?????????????????????",
    "????????????",
    "??????",
    "????????????/???????????????",
    "?????????/????????????",
    "??????",
    "???????????????",
    "????????????",
    "???????????????",
  ];

  const DoctorDiseasesListData = [
    "??????/??????",
    "?????????/????????????",
    "??????",
    "??????",
    "??????",
    "?????????/??????",
    "?????????",
    "?????????",
    "?????????",
    "??????",
    "?????????",
    "??????",
    "????????????",
    "????????? ????????????",
  ];

  useEffect(() => {
    HospitalData.setDelegatorDoctorDepratmentsData([
      { name: "??????", flag: false },
      { name: "???????????????", flag: false },
      { name: "???????????????", flag: false },
      { name: "??????????????????", flag: false },
      { name: "???????????????", flag: false },
      { name: "?????????", flag: false },
      { name: "?????????????????????", flag: false },
      { name: "????????????", flag: false },
      { name: "??????", flag: false },
      { name: "????????????/???????????????", flag: false },
      { name: "?????????/????????????", flag: false },
      { name: "??????", flag: false },
      { name: "???????????????", flag: false },
      { name: "????????????", flag: false },
      { name: "???????????????", flag: false },
    ]);

    HospitalData.setDelegatorDoctorDiseasesData([
      { name: "??????/??????", flag: false },
      { name: "?????????/????????????", flag: false },
      { name: "??????", flag: false },
      { name: "??????", flag: false },
      { name: "??????", flag: false },
      { name: "?????????/??????", flag: false },
      { name: "?????????", flag: false },
      { name: "?????????", flag: false },
      { name: "?????????", flag: false },
      { name: "??????", flag: false },
      { name: "?????????", flag: false },
      { name: "??????", flag: false },
      { name: "????????????", flag: false },
      { name: "????????? ????????????", flag: false },
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
                        ?????? ?????? ??????
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
                        ??????
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
                        ????????????
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
                        ????????? ??????
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
                        value={HospitalData.delegatorDoctorEmailData ? HospitalData.delegatorDoctorEmailData : ""}
                        onChange={(event) => HospitalData.setDelegatorDoctorEmailData(event.target.value)}
                        border={validateFlag && !HospitalData.delegatorDoctorEmailData ? "2.5px solid #FF3B30" : ""}
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
                        ?????? ???????????? ??????
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
                        *?????? ?????? ??????
                      </PlainTextComponent>
                    </PlainTextFrame>
                  </LineCoreFrame>
                  <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                    <InputTextFrame className="InputTextFrame" width={"100%"}>
                      <InputTextComponent
                        className="InputTextComponent"
                        width={"100%"}
                        placeholder="?????? ????????? ????????? ?????????."
                        value={
                          HospitalData.delegatorDoctorLicenseNumberData
                            ? HospitalData.delegatorDoctorLicenseNumberData
                            : ""
                        }
                        onChange={(event) => HospitalData.setDelegatorDoctorLicenseNumberData(event.target.value)}
                        border={
                          validateFlag && !HospitalData.delegatorDoctorLicenseNumberData ? "2.5px solid #FF3B30" : ""
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
                        *????????? ??????
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
                        *?????? App ?????? ????????? (?????? 4???)
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
                                        ? DoctorDepartmentsData === "??????"
                                          ? InternalMedicineIcon
                                          : DoctorDepartmentsData === "???????????????"
                                          ? FamilyMedicineIcon
                                          : DoctorDepartmentsData === "???????????????"
                                          ? OtolaryngologyIcon
                                          : DoctorDepartmentsData === "??????????????????"
                                          ? PediatricsIcon
                                          : DoctorDepartmentsData === "???????????????"
                                          ? UrologyIcon
                                          : DoctorDepartmentsData === "?????????"
                                          ? DermatologyIcon
                                          : DoctorDepartmentsData === "?????????????????????"
                                          ? PsychiatryIcon
                                          : DoctorDepartmentsData === "????????????"
                                          ? ObGynIcon
                                          : DoctorDepartmentsData === "??????"
                                          ? OphthalmologyIcon
                                          : DoctorDepartmentsData === "????????????/???????????????"
                                          ? OrthopedicsIcon
                                          : DoctorDepartmentsData === "?????????/????????????"
                                          ? NeurologyIcon
                                          : DoctorDepartmentsData === "??????"
                                          ? DentistIcon
                                          : DoctorDepartmentsData === "???????????????"
                                          ? EmergencyMedicineIcon
                                          : DoctorDepartmentsData === "????????????"
                                          ? PlasticSurgeryIcon
                                          : DoctorDepartmentsData === "???????????????"
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
                        *?????? App ?????? ?????? (?????? ??????)
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
                        ?????? ??????
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
                        ?????? ??????
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
                                        ? DoctorDiseasesData === "??????/??????"
                                          ? ColdIcon
                                          : DoctorDiseasesData === "?????????/????????????"
                                          ? MuscleAndBackPainIcon
                                          : DoctorDiseasesData === "??????"
                                          ? StomachacheIcon
                                          : DoctorDiseasesData === "??????"
                                          ? HeadacheIcon
                                          : DoctorDiseasesData === "??????"
                                          ? RhinitisIcon
                                          : DoctorDiseasesData === "?????????/??????"
                                          ? HypertensionAndDiabetesIcon
                                          : DoctorDiseasesData === "?????????"
                                          ? PeriodPainIcon
                                          : DoctorDiseasesData === "?????????"
                                          ? AcneIcon
                                          : DoctorDiseasesData === "?????????"
                                          ? AtopyIcon
                                          : DoctorDiseasesData === "??????"
                                          ? ObesityIcon
                                          : DoctorDiseasesData === "?????????"
                                          ? CystitisIcon
                                          : DoctorDiseasesData === "??????"
                                          ? HairLossIcon
                                          : DoctorDiseasesData === "????????????"
                                          ? MorningAfterPillIcon
                                          : DoctorDiseasesData === "????????? ????????????"
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
                        ?????? ?????? ??????
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
                        (??????) ??????(?????????)??? ?????? ????????? ??????
                      </AgreementCheckboxTextComponent>
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="left"
                        designType="content"
                      >
                        ???????????? ????????? ?????????????? ???????????? ????????? ????????????,
                      </AgreementCheckboxTextComponent>
                      <AgreementCheckboxTextComponent
                        className="AgreementCheckboxTextComponent"
                        justifyContent="left"
                        designType="content"
                      >
                        ?????? ??? ??????(?????????)??? ????????? ????????? ???????????????.
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
                        (??????) ???????????? ?????????????? ??????
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
                        ????????????
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
                        (??????) ???????????? ??????????????
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
                        ????????????
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
                        ?????? ????????? ??????
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
                      ?????? ?????? ??? ???????????? ?????? ??????,
                    </PlainTextComponent>
                    <PlainTextComponent className="PlainTextComponent" designType="additional" cursor="text">
                      ????????? ???????????? ?????? ?????? URL??? ????????? ?????????
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
                        *?????? ????????? ??????
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
                          + ?????? ????????????
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
                                *?????? {key} ????????????
                              </PlainTextComponent>
                            </PlainTextFrame>
                          </LineCoreFrame>
                          <LineAdditionalFrame className="LineAdditionalFrame" width={"100%"}>
                            <InputTextFrame className="InputTextFrame" width={"100%"}>
                              <InputTextComponent
                                className="InputTextComponent"
                                width={"100%"}
                                placeholder="-?????? ????????? ????????? ?????????."
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
                                - ?????? ????????????
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
              ??????
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
                  : () => setValidateFlag(true)
              }
            >
              ?????? (4/4)
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
