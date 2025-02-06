import LargeHero from "@/app/components/ui/largeHero";
import TwoColBlock from "@/app/components/ui/twoColBlock";
import {
  equiBold,
  equiMedium,
  equiRegular,
  equiSemibold,
} from "@/app/styles/fonts";
import CardList from "@/app/components/ui/cardList";

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
    </>
  );
};

export default Home;
