import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Stock } from "@styled-icons/remix-fill";

const StoneShelfFont = styled.h4`
  font-family: "Playfair_Display";
  font-weight: 300;
`;

const LoginDisplay = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex text-white">
      <span className="mr-2">
        <Stock size="32" />
      </span>
      <StoneShelfFont>{t("sitename")}</StoneShelfFont>
    </div>
  );
};

export default LoginDisplay;
