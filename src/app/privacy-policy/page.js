import TwoColBlock from "@/app/components/ui/twoColBlock";
import AddressCard from "../components/ui/addressCard";

const Page = () => {
  return (
    <>
      <div className="container mt-6 w-10/12 justify-center mb-4 mx-auto">
        <TwoColBlock
          heading={
            <>
              <span className="text-lightGray">Privacy Policy for</span>
              <br />
              InvestMatch
            </>
          }
          content="At InvestMatch, we are committed to safeguarding the privacy and security of our clients, partners, and visitors. This Privacy Policy explains how we collect, use, and protect your personal information in compliance with Ontario's privacy laws and regulations."
        />
      </div>
      <div className="container mt-6 w-2/3 justify-center mb-4 mx-auto">
        <ul className="list-decimal font-body list-inside font-body text-lg text-darkGray">
          <li>
            Information We Collect
            <br />
            Personal Information: We may collect personal information such as
            your name, email address, phone number, and company details when you
            engage with our services or contact us.
            <br />
            Usage Data: We automatically collect information about your
            interactions with our website, including your IP address, browser
            type, pages visited, and time spent on the site.
            <br />
            Cookies and Tracking Technologies: We use cookies and similar
            tracking technologies to enhance your experience on our website and
            analyze usage patterns.
          </li>
          <li className="mt-4">
            How We Use Your Information
            <br />
            Service Delivery: To provide and maintain our services, communicate
            with you, and respond to your inquiries.
            <br />
            Improvement and Development: To analyze usage patterns and improve
            our website, services, and offerings.
            <br />
            Marketing: To send you promotional materials and updates about our
            services, with your consent.
            <br />
            Compliance and Legal Obligations: To comply with applicable laws,
            regulations, and legal processes.
          </li>
          <li className="mt-4">
            Sharing Your Information
            <br />
            We do not sell or rent your personal information to third parties.
            We may share your information with:
            <br />
            Service Providers: Trusted third parties who assist us in operating
            our website and delivering our services.
            <br />
            Legal Authorities: When required by law or to protect our rights and
            interests.
          </li>
          <li className="mt-4">
            Data Security
            <br />
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction.
          </li>
          <li className="mt-4">
            Your Rights
            <br />
            You have the right to:
            <br />
            Access: Request access to the personal information we hold about
            you.
            <br />
            Correction: Request correction of inaccurate or incomplete personal
            information.
            <br />
            Deletion: Request deletion of your personal information, subject to
            legal obligations.
            <br />
            Objection: Object to the processing of your personal information
            under certain circumstances.
            <br />
            Withdrawal of Consent: Withdraw your consent to receive marketing
            communications at any time.
          </li>
          <li className="mt-4">
            Changes to This Privacy Policy
            <br />
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy on our
            website.
          </li>
          <li className="mt-4">
            Contact Us
            <br />
            If you have any questions or concerns about this Privacy Policy or
            would like your data deleted, please contact us at:
          </li>
        </ul>
      </div>

      <div className="container w-10/12 justify-center mb-12 mx-auto">
        <AddressCard />
      </div>
    </>
  );
};

export default Page;
