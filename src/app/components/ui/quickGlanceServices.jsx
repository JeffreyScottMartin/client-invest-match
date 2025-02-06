import { equiBold } from "@/app/styles/fonts";
import React from "react";
const QuickGlanceServices = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%] flex flex-wrap text-center justify-center gap-4 p-4 sm:justify-between">
        {[
          { text: "Advisory Services", color: "bg-lightGray" },
          { text: "Financial Insight", color: "bg-darkGray" },
          { text: "M&A Preparedness", color: "bg-brandLightBlue" },
          { text: "AI Readiness", color: "bg-brandMidBlue" },
          { text: "Culture Strategy", color: "bg-brandDarkBlue" },
        ].map((item, index) => (
          <div
            key={index}
            className={`w-48 h-48 flex items-center justify-center rounded-full text-white text-center text-2xl ${item.color} ${equiBold.className} text-white`}
          >
            {item.text.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word}
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickGlanceServices;
