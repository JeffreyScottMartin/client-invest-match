import { equiBold } from "@/app/styles/fonts";

const TwoColBlock = (data) => {
  return (
    <div className="sm:flex items-center w-[90%] justify-center mb-4 mx-auto">
      <div className="sm:w-1/2 p-10">
        <div className="object-center text-left">
          {data.heading && (
            <span
              className={`${equiBold.className} text-5xl text-darkGray leading-tight`}
            >
              {data.heading}
            </span>
          )}
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <p className="font-body text-lg text-darkGray">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColBlock;
