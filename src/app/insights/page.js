import SmallHero from "@/app/components/ui/smallHero";
import TwoColBlock from "@/app/components/ui/twoColBlock";
import ArticleCard from "@/app/components/ui/articleCard";

const Insights = () => {
  return (
    <>
      <div className="container mt-6 w-10/12 justify-center mb-16 mx-auto">
        <SmallHero
          imageString="/insights-hero.png"
          heading="InvestMatch Insights"
        />
      </div>
      <div className="container mt-6 w-10/12 justify-center mb-4 mx-auto">
        <TwoColBlock
          heading={
            <>
              <span className="text-lightGray">Lessons from</span>
              <br />
              Leaders
            </>
          }
          content="InvestMatch provides business owners with thought leadership content to guide and inspire their entrepreneurial journey. This commitment reflects our passion for collaboration, fostering a supportive community where shared knowledge drives collective success."
        />
      </div>
      <div className="container min-w-dvw bg-offwhite flex justify-center py-4 mt-4 mx-auto">
        <div className="container w-10/12 justify-center mb-12 mx-auto">
          <ArticleCard
            image="/blog-5.jpg"
            heading="Unlocking Success: How to Prepare Your Business for M&A Opportunities"
            content="Mergers and acquisitions (M&A) can be a strategic move to accelerate growth, enter new markets, or gain a competitive edge. However, the success of an M&A transaction heavily depends on the level of preparation undertaken by the businesses involved."
            link="https://www.linkedin.com/pulse/unlocking-success-how-prepare-your-business-ma-opportunities-cxoyc/"
          />
          <ArticleCard
            image="/blog-1.png"
            heading="Beyond the Bot: Transforming Customer Service with AI Chatbots and Personalized Human Touch"
            content="AI chatbots handle customer inquiries efficiently, but true excellence is achieved by combining AI with live agents for a personalized touch. Discover how this blend can boost customer satisfaction by checking out the full article."
            link="https://www.linkedin.com/pulse/beyond-bot-transforming-customer-service-ai-chatbots-mrvwc/?trackingId=PBAvdwndcGq3JrovoaPiKA%3D%3D"
          />
          <ArticleCard
            image="/blog-2.png"
            heading="Talent Attraction Failures: Bridging the Gap to Secure Top Candidates"
            content="Discover effective strategies to attract and retain top talent amidst a challenging hiring landscape. Uncover actionable insights that can transform your recruitment process in the full blog post!"
            link="https://www.linkedin.com/pulse/talent-attraction-failures-bridging-gap-secure-top-3i4sc/?trackingId=DW9lTwwnEEIFNccUZakmsA%3D%3D"
          />
          <ArticleCard
            image="/blog-3.png"
            heading="Clear Targets, Confident Employees: Enhancing Motivation Through Metrics"
            content="Understanding what constitutes success in the workplace is crucial for employee growth and overall company success.  Learn best practices to developing clear metrics and targets in the full article."
            link="https://www.linkedin.com/pulse/clear-targets-confident-employees-enhancing-motivation-ke4ic/?trackingId=jum2%2BZgR1gvEMRvd7ZNzxg%3D%3D"
          />
          <ArticleCard
            image="/blog-4.png"
            heading="Operational Excellence Unveiled: The Power of People, Processes and Tools"
            content="Achieving operational excellence in business requires a balanced focus on people, processes, and tools. Learn how to effectively align these elements to navigate business challenges."
            link="https://www.linkedin.com/pulse/operational-excellence-unveiled-power-people-processes-lseuc/?trackingId=C26TSKYgLP550pWB2W9sSA%3D%3D"
          />
        </div>
      </div>
    </>
  );
};

export default Insights;
