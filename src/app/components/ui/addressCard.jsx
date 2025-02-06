import Image from "next/image";

const AddressCard = (props) => {
  return (
    <div className="w-[90%] mx-auto p-4">
      <div className="bg-white pb-12 pt-12 shadow-md p-6 mt-8 mb-4 flex items-start flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <div className="basis-2/3 justify-center text-center object-center sm:ml-4">
          <Image
            src="/logo-single-line.png"
            width={400}
            height={70}
            alt="InvestMatch"
            loading="lazy"
            className="object-center items-center m-8"
          />
        </div>
        <div className="basis-1/3 mr-4">
          <p className="font-body text-lg text-darkGray mt-2 mr-6 text-left">
            <strong>InvestMatch Canada</strong>
            <br />
            Toronto — Financial District
            <br />
            157 Adelaide Street West
            <br />
            Suite 750
            <br />
            Toronto, ON, M5H 4E7
            <br />
            Canada
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
