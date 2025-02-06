import LargeHero from "@/app/components/ui/largeHero";
import TwoColBlock from "@/app/components/ui/twoColBlock";
import TwoColEqual from "@/app/components/ui/twoColEqual";
import CardList from "@/app/components/ui/cardList";
import QuickGlanceServices from "@/app/components/ui/quickGlanceServices";
import { equiBold } from "./styles/fonts";
import FullWidthCard from "@/app/components/ui/fullWidthCard";
import ReverseFullWidthCard from "@/app/components/ui/reverseFullWidthCard";

const Home = () => {
  return (
    <>
      <div className="container mt-6 w-10/12 justify-center mb-4 mx-auto">
        <LargeHero
          imageString="/home-hero.png"
          heading="Consulting Redefined"
        />
        <TwoColBlock
          heading={
            <>
              <span className="text-lightGray">
                Dream Big,
                <br />
                Achieve Together.
              </span>
              <br />
              Driving Bold,
              <br />
              Innovative Solutions
            </>
          }
          content="In an ever-evolving landscape, the need for innovative and adaptive consulting has never been more crucial. At InvestMatch, we provide tailored solutions to help business owners overcome challenges and unlock growth potential. Recognizing the needs of growing enterprises, we provide access to expert advisors to guide informed decision-making."
        />
      </div>
      <div className="container min-w-dvw bg-offwhite flex justify-center py-12 mt-8 mb-8 mx-auto">
        <CardList />
      </div>
      <div className="container mt-6 w-10/12 justify-center mb-4 mx-auto">
        <TwoColBlock
          heading={
            <>
              <span className="text-lightGray">Your Success,</span>
              <br />
              Powered by Our Expertise
            </>
          }
          content="We collaborate with diverse clients of all sizes, leveraging our expertise to deliver impactful results.  Through our network of channel partners, we continuously expand our capabilities to provide comprehensive support to companies across various industries."
        />
      </div>
      <div className="container mt-12 w-10/12 justify-center mb-12 mx-auto">
        <QuickGlanceServices />
        <h3
          className={`${equiBold.className} text-5xl text-center text-darkGray leading-tight mt-20 mb-20`}
        >
          <span className="text-lightGray">Connecting Networks, </span>
          Amplifying Success
        </h3>
      </div>
      <div className="container mt-12 w-10/12 justify-center mb-4 mx-auto">
        <FullWidthCard />
      </div>
      <div className="container w-10/12 justify-center mb-12 mx-auto">
        <ReverseFullWidthCard />
      </div>
    </>
  );
};

export default Home;
