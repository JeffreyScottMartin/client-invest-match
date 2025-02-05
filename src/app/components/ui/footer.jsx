import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaTiktok } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/InvestMatchCanada",
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    url: "https://twitter.com/InvestMatchCanada",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://tiktok.com/@InvestMatchCanada",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/investmatch-canada",
  },
];

const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex left-0 bg-darkGray font-equivolition text-white py-6 w-full items-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="items-center text-center lg:mt-4 md:text-left md:w-1/3 mb-4 md:mb-0">
          <p className="text-3xl md:ml-6">
            Trusted Partner
            <br />
            for Unleashing
            <br />
            Business Growth
          </p>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex flex-col items-center md:w-1/3 mb-4 md:mb-0 md:border-r-4 md:border-l-4 md:border-white">
          <div className="flex items-center space-x-6">
            <ul>
              {socialLinks.map(({ name, icon, url }) => (
                <li key={name} className="font-equivolition text-xl mb-2">
                  <Link
                    name={name}
                    aria-label={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-brandLightBlue transition"
                  >
                    {icon}
                    {name === "LinkedIn" ? (
                      <span>InvestMatch-Canada</span>
                    ) : (
                      <span>InvestMatchCanada</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-center items-center md:text-left md:w-1/3 md:pl-8 lg:pl-12">
          <p>Inquiries should be directed to</p>
          <p className="font-semibold text-lg">
            <Link
              href="mailto:info@investmatch.ca?subject=Hello.&body=Type your message here."
              className="hover:text-brandLightBlue"
            >
              info@investmatch.ca
            </Link>
          </p>
          <p className="mt-2">
            Share your journey with InvestMatch Canada, contact us, let’s get
            started!
          </p>
          <p className="mt-2 font-semibold">
            <Link href="/privacy-policy" className="hover:text-brandLightBlue">
              InvestMatch Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
