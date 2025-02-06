import SmallHero from "@/app/components/ui/smallHero";
import TwoColBlock from "@/app/components/ui/twoColBlock";
import AboutUsCardGrid from "@/app/components/ui/aboutUsCardGrid";
import { equiBold } from "@/app/styles/fonts";
import TwoColBio from "@/app/components/ui/twoColBio";
import AddressCard from "@/app/components/ui/addressCard";
const aboutUs = () => {
  return (
    <>
      <div className="container mt-6 w-10/12 justify-center mb-16 mx-auto">
        <SmallHero imageString="/about-us-hero.png" heading="Our Journey" />
      </div>
      <div className="container mt-6 w-10/12 justify-center mb-4 mx-auto">
        <TwoColBlock
          heading={
            <>
              <span className="text-lightGray">Empowering Futures:</span>
              <br />
              Our Story, Your Success
            </>
          }
          content="InvestMatch was founded by a team of seasoned leaders passionate about solving problems, driving innovation, and providing coaching and mentoring. By combining their expertise and experience, the founders aimed to bridge this gap and empower businesses to thrive while moving beyond traditional consulting."
        />
      </div>
      <div className="container min-w-dvw bg-offwhite flex justify-center py-12 mt-8 mb-8 mx-auto">
        <AboutUsCardGrid />
      </div>
      <div className="container mt-12 w-10/12 justify-center mb-12 mx-auto">
        <h3
          className={`${equiBold.className} text-5xl text-center text-darkGray leading-tight mt-20 mb-20`}
        >
          <span className="text-lightGray">Driven by </span>
          Your Success
        </h3>
      </div>
      <div className="container mt-12 w-10/12 justify-center mb-12 mx-auto">
        <TwoColBio />
      </div>
      <div className="container min-w-dvw bg-offwhite flex justify-center py-12 mt-8 mx-auto">
        <div className="container w-10/12 justify-center mb-12 mx-auto">
          <SmallHero imageString="/toronto.png" heading="" />
          <div className="container mt-10 w-[90%] justify-center mx-auto font-body text-lg text-darkGray">
            <p className="mb-4">
              Our Toronto office provides InvestMatch with access to a thriving
              network of industry leaders. This enables us to stay at the
              forefront of market trends and leverage a rich ecosystem of
              resources.
            </p>
            <p className="mb-8">
              Whether you're local or international, our team will provide you
              with the best opportunities and insights to drive your company
              forward.
            </p>
            <AddressCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
