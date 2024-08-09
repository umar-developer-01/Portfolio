import React from "react";
import { useAuth } from "../context/appContext";
import Intro from "../components/intro";
import Experience from "../components/experience";
import Portfolio from "../components/protfolio";
import Hireme from "../components/hireme";

const Homepage = () => {

  const { setRef } = useAuth();

  return (
    <>
      <Intro ref={(ref_) => setRef("intro", ref_)} />
      <Portfolio ref={(ref_) => setRef("portfolio", ref_)} />
      <Experience ref={(ref_) => setRef("experience",ref_)} />
      <Hireme ref={(ref_) => setRef("hireme", ref_)} />
    </>
  );
};

export default Homepage;
