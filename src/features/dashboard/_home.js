import React from "react";
import { Formik, FieldArray } from "formik";

import { ExpandMore, ChevronRight, Check } from "@styled-icons/material";
import { Times } from "@styled-icons/fa-solid";
import Calculator from "./../../components/calculator";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Calculator />
      </div>
    </React.Fragment>
  );
};

export default Home;
