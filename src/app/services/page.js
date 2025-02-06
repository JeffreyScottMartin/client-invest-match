import SmallHero from "@/app/components/ui/smallHero";
import TwoColBlock from "@/app/components/ui/twoColBlock";
import ServicesCard from "@/app/components/ui/servicesCard";

const Services = () => {
  return (
    <>
      <div className="container mt-6 w-10/12 justify-center mb-16 mx-auto">
        <SmallHero imageString="/services-hero.png" heading="Our Strengths" />
      </div>
      <div className="container mt-6 w-10/12 justify-center mb-4 mx-auto">
        <TwoColBlock
          heading={
            <>
              <span className="text-lightGray">Empowering Your</span>
              <br />
              Success with
              <br />
              Experience
            </>
          }
          content="Our core strengths are derived from our extensive experience in supporting businesses across a wide array of sectors and industries. This diverse background equips us with unique insights and versatile solutions tailored to your specific needs."
        />
      </div>
      <div className="container min-w-dvw bg-offwhite flex justify-center py-12 mt-8 mx-auto">
        <div className="container w-10/12 justify-center mb-12 mx-auto">
          <ServicesCard
            color="bg-lightGray"
            heading="Advisory Services"
            content="Designed to address the unique challenges and opportunities of growing businesses. We provide solutions that focus on early-stage needs such as market entry strategies, efficient operations, and scalable growth plans."
          />
          <ServicesCard
            color="bg-darkGray"
            heading="Financial Insight"
            content="Create a solid financial foundation essential for future growth. Comprehensive solutions that include accurate bookkeeping, financial analysis, and strategic planning tailored to your unique needs."
          />
          <ServicesCard
            color="bg-brandLightBlue"
            heading="M&A Preparedness"
            content="Ensure a seamless transition and maximize value for your business. With our insights, experience and meticulous planning, we help you navigate every stage of the process, from due diligence to integration, ensuring your goals are achieved efficiently and effectively."
          />
          <ServicesCard
            color="bg-brandMidBlue"
            heading="AI Readiness"
            content="Expertise to empower businesses to harness AI-driven insights for strategic decision-making, enhance operational efficiencies, and drive sustainable growth. With a focus on tailored AI applications, InvestMatch guides companies through the complexities of AI adoption."
          />
          <ServicesCard
            color="bg-brandDarkBlue"
            heading="Culture Strategy"
            content="Guidance for leaders to help hire for cultural fit, developing comprehensive onboarding, and evaluating performance with a focus on core values. This approach ensures a cohesive, motivated, and high-performing workplace."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
