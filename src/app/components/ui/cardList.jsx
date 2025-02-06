import { Handshake, Lightbulb, BarChart, PartyPopper } from "lucide-react";

const features = [
  {
    title: "Power In Collaboration",
    description:
      "Unlock your business’s full potential. Our specialized knowledge and objective perspectives are the catalysts you need to drive growth.",
    icon: Handshake,
  },
  {
    title: "Harnessing Creativity",
    description:
      "We customize solutions that meet your specific needs, maximizing value without compromising on excellence.",
    icon: Lightbulb,
  },
  {
    title: "Growth in the Journey",
    description:
      "Our collaborative approach ensures continuous learning, leading to empowered and informed decisions.",
    icon: BarChart,
  },
  {
    title: "Fun Fuels Success",
    description:
      "We believe that fun is essential for productive and sustainable work. Celebrate every milestone, and achieve remarkable results.",
    icon: PartyPopper,
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-12 w-10/12 justify-center items-center">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        {features.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 items-center"
          >
            <Icon size={40} className="text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
