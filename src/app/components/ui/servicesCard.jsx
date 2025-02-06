import Services from "@/app/services/page";
import Image from "next/image";
import React from "react";
import { equiBold } from "@/app/styles/fonts";

const ServicesCard = (props) => {
  return (
    <div className="w-[90%] mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 flex items-start flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <div className="basis-1/4 justify-center text-center object-center sm:ml-4">
          <div
            className={`w-48 h-48 flex items-center justify-center rounded-full text-white text-center text-2xl ${props.color} ${equiBold.className} text-white`}
          >
            {props.heading.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="basis-3/4 mr-4">
          <p className="font-body text-lg text-darkGray mt-2 mr-6 text-center sm:text-left">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
