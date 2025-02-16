import Image from "next/image";

const FullWidthCard = (props) => {
  return (
    <div className="w-full lg:w-[90%] mx-auto lg:p-4">
      <div className="bg-offwhite rounded-lg shadow-md p-6 flex items-start flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <div className="basis-1/3 justify-center text-center object-center lg:ml-4">
          <span className="hidden lg:block">
            <Image
              src="/accelerator-logo.png"
              width={200}
              height={141}
              alt="InvestMatch Accelerator"
              loading="lazy"
              className="object-center items-center m-8"
            />
          </span>
          <span className="block lg:hidden">
            <Image
              src="/accelerator-logo.png"
              width={135}
              height={95}
              alt="InvestMatch Accelerator"
              loading="lazy"
              className="object-center items-center"
            />
          </span>
        </div>
        <div className="basis-2/3 lg:mr-4">
          <p className="font-body text-lg text-darkGray mt-2 lg:mr-6 text-left">
            When you engage InvestMatch, you also gain access to our
            ever-expanding network of passionate partner companies dedicated to
            supporting our clients. InvestMatch Accelerators bring specialized
            expertise to drive your business forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullWidthCard;
