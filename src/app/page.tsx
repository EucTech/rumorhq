import GetMatched from "@/components/HomePage/GetMatched";
import HeroSection from "@/components/HomePage/HeroSection";
import LetTalk from "@/components/LetTalk";
import Steps from "@/components/HomePage/Steps";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Steps/>
      <GetMatched/>
      <LetTalk/>
    </div>
  );
}
