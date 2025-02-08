import { equiSemibold, equiBold } from "@/app/styles/fonts";
import Image from "next/image";

const features = [
  {
    title: "Power In Collaboration",
    description:
      "Unlock your business’s full potential. Our specialized knowledge and objective perspectives are the catalysts you need to drive growth.",
    image: "/handshake.svg",
  },
  {
    title: "Harnessing Creativity",
    description:
      "We customize solutions that meet your specific needs, maximizing value without compromising on excellence.",
    image: "/lightbulb.svg",
  },
  {
    title: "Growth in the Journey",
    description:
      "Our collaborative approach ensures continuous learning, leading to empowered and informed decisions.",
    image: "/graph.svg",
  },
  {
    title: "Fun Fuels Success",
    description:
      "We believe that fun is essential for productive and sustainable work. Celebrate every milestone, and achieve remarkable results.",
    image: "/celebrate.svg",
  },
];

export default function FeatureGrid() {
  return (
    <section className="w-10/12 justify-center items-center text-center">
      <span
        className={`${equiBold.className} text-5xl text-darkGray leading-tight mb-6`}
      >
        <span className="text-lightGray">Your Partner in </span>Problem-Solving
      </span>
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
        {features.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-start flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center"
          >
            <div className="basis-1/4 justify-center text-center object-center lg:ml-4">
              <Image
                src={image}
                width={75}
                height={72}
                alt={title}
                loading="lazy"
              />
            </div>
            <div className="basis-3/4 mr-4">
              <span
                className={`${equiSemibold.className} text-3xl text-darkGray leading-tight text-center sm:text-left`}
              >
                {title}
              </span>
              <p className="font-body text-lg text-darkGray mt-2 text-left">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
