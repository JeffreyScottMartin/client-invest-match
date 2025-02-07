import Image from "next/image";
import React from "react";
import { equiSemibold } from "@/app/styles/fonts";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ArticleCard = (props) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="block md:hidden flex px-3 py-3">
        <div className="max-w-sm bg-white shadow-md overflow-hidden">
          <Image
            className="w-full"
            width={766}
            height={606}
            src={props.image}
            alt={props.heading}
          />
          <div className="px-6 py-4">
            <div
              className={`${equiSemibold.className} text-2xl text-darkGray leading-tight`}
            >
              {props.heading}
            </div>
            <p className="text-gray-700 text-base">{props.content}</p>
          </div>
          <div className="px-6 py-4">
            <Link
              href={props.link}
              className={`max-w-[120px] text-center px-4 py-2 bg-brandDarkBlue ${equiSemibold.className} text-md text-white rounded-full hover:bg-brandLightBlue transition`}
            >
              Read More &#8250;
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full mx-auto mt-8">
        <div className="flex gap-3 bg-white shadow-md overflow-hidden items-center justify-start">
          <div className="relative w-64 h-72 flex-shrink-0 basis-1/3">
            <Image
              className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
              loading="lazy"
              src={props.image}
              height={766}
              width={606}
              alt={props.heading}
            />
          </div>

          <div className="flex flex-col gap-2 py-2 basis-2/3 ml-8 mr-6">
            <p
              className={`${equiSemibold.className} text-2xl mt-4 text-darkGray leading-tight text-left`}
            >
              {props.heading}
            </p>

            <p className="font-body text-lg text-darkGray text-left sm:text-left mt-2">
              {props.content}
            </p>

            <Link
              href={props.link}
              className={`max-w-[120px] text-center px-4 py-2 bg-brandDarkBlue ${equiSemibold.className} text-md text-white rounded-full hover:bg-brandLightBlue transition`}
            >
              Read More &#8250;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
