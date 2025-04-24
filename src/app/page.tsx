import CreatorServices from "@/components/CreatorPage/CreatorServices";
import CreatorSteps from "@/components/CreatorPage/CreatorSteps";
import CreatorsVideos from "@/components/CreatorPage/CreatorsVideos";
import FAQS from "@/components/FAQS";
import HeroGlobalBrands from "@/components/HomePage/HeroGlobalBrands";
import HeroSection from "@/components/HomePage/HeroSection";
import LetTalk from "@/components/LetTalk";
import TestimonialGrid from "@/components/TestimonialGrid";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CreatorsVideos />
      <HeroGlobalBrands/>
      <CreatorSteps />
      <CreatorServices />
      <FAQS />
      <TestimonialGrid />
      <LetTalk />
    </div>
  );
}
