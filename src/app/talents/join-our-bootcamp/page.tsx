import BootcampHeroSection from "@/components/TalentPage/TalentBootcamp/BootcampHeroSection";
import Events from "@/components/TalentPage/TalentBootcamp/Events";
import Steps from "@/components/TalentPage/TalentBootcamp/Steps";
import React from "react";

const page = () => {
  return (
    <div>
      <BootcampHeroSection/>
      <Steps />
      <Events/>
    </div>
  );
};

export default page;
