import CreatorHeroSection from "@/components/CreatorPage/CreatorHeroSection";
import CreatorServices from "@/components/CreatorPage/CreatorServices";
import CreatorSteps from "@/components/CreatorPage/CreatorSteps";
import CreatorsVideos from "@/components/CreatorPage/CreatorsVideos";
import GlobalBrands from "@/components/CreatorPage/GlobalBrands";
import FAQS from "@/components/FAQS";
import LetTalk from "@/components/LetTalk";
import TestimonialGrid from "@/components/TestimonialGrid";

export default function Home() {
  return (
    <div>
      <CreatorHeroSection />
      <CreatorsVideos />
      <GlobalBrands />
      <CreatorSteps />
      <CreatorServices />
      <FAQS />
      <TestimonialGrid />
      <LetTalk />
    </div>
  );
}
