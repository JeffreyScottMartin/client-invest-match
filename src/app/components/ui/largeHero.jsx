import Image from "next/image";
import { equiBold } from "@/app/styles/fonts";

const LargeHero = (props) => {
  return (
    <section className="relative w-full lg:h-[575px] md:h-[500] sm:h-[450] flex items-center justify-center md:justify-end md:text-right mb-4">
      <div className="absolute inset-0 rounded rounded-[30px]">
        <Image
          src={props.imageString}
          alt="Consulting Redefined"
          fill
          style={{ objectFit: "cover", objectPosition: "bottom center" }}
          className="z-0 rounded-[25px]"
        />
      </div>
      <div className="relative z-10 text-center md:text-right">
        <h1
          className={`${equiBold.className} text-3xl md:text-3xl lg:text-5xl text-white md:mr-20 md:pt-12 mt-96`}
        >
          {props.heading}
        </h1>
      </div>
    </section>
  );
};

export default LargeHero;
