import TwoColBlock from "@/app/components/ui/twoColBlock";
import ContactForm from "@/app/components/ui/contact";
const contactUs = () => {
  return (
    <>
      <div className="container mt-6 w-10/12 justify-center mb-4 mx-auto">
        <TwoColBlock
          heading={
            <>
              <span className="text-lightGray">Collaborative Excellence,</span>
              <br />
              Collective Success
            </>
          }
          content="At InvestMatch, we're always on the lookout for new channel partnerships. We love to connect with companies that thrive in collaborative environments and value fun as much as we do. Together, let's work on impactful projects and provide outstanding support for our clients!"
        />
      </div>
      <div className="container min-w-dvw bg-offwhite flex justify-center py-12 mt-8 mb-8 mx-auto">
        <ContactForm />
      </div>
    </>
  );
};

export default contactUs;
