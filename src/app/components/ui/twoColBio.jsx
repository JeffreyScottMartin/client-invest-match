import { equiBold } from "@/app/styles/fonts";
import Image from "next/image";
const TwoColBio = (data) => {
  return (
    <div className="sm:flex items-center w-[90%] justify-center mb-4 mx-auto">
      <div className="sm:w-1/2 py-10 flex justify-center">
        <div className="object-center text-left grid grid-cols-1 lg:grid-cols-2 -mt-12 justify-center items-center">
          <div
            className={`w-48 h-48 flex items-center justify-center rounded-full text-white text-center text-2xl bg-lightGray ${equiBold.className} text-white`}
          >
            <Image
              src="/graham_bio.png"
              alt="Graham Sogawa"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded-full shadow-md"
            />
          </div>
          <div
            className={`w-48 h-48 flex items-center justify-center rounded-full text-center text-xl bg-offwhite ${equiBold.className} text-darkGray mt-4 lg:mt-0 lg:ml-4`}
          >
            Graham Sogawa,
            <br />
            Principal
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <p className="font-body text-lg text-darkGray">
            <strong>Dear Prospective Clients,</strong>
            <br />
            <br />
            Our mission is to redefine the consulting experience by delivering
            unparalleled value and excellence. We are dedicated to creating
            raving fans of our work through innovative strategies, exceptional
            service, and a commitment to your success. Our growing network of
            professionals allows us to offer insights and solutions that drive
            incredible value for our clients and business partners. At our core,
            we believe that blending fun with learning is the secret recipe for
            achieving true success.
            <br />
            <br />
            Sincerely,
            <br />
            <strong>
              Graham Sogawa
              <br />
              InvestMatch Principal
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoColBio;
