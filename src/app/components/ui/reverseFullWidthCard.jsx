import { equiSemibold, equiBold } from "@/app/styles/fonts";
import Link from "next/link";

const ReverseFullWidthCard = () => {
  return (
    <div className="w-full lg:w-[90%] mx-auto lg:p-4">
      <div className="bg-offwhite rounded-lg shadow-md p-6 flex items-start flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <div className="basis-3/4 my-6 lg:ml-12">
          <span className={`text-darkGray text-2xl ${equiBold.className}`}>
            Collaborative Excellence, Collective Success
          </span>
          <p className="font-body text-lg text-darkGray mt-2 lg:mr-6 text-left">
            At InvestMatch, we're always on the lookout for new channel
            partnerships. We love to connect with companies that thrive in
            collaborative environments and value fun as much as we do. Together,
            let's work on impactful projects and provide outstanding support for
            our clients!
          </p>
        </div>
        <div className="basis-1/4 justify-center text-center object-center lg:ml-4">
          <Link
            href="/contact-us"
            className={`px-4 py-2 bg-brandDarkBlue ${equiSemibold.className} text-xl text-white rounded-full hover:bg-brandLightBlue transition`}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReverseFullWidthCard;
