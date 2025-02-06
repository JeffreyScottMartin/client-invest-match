import Image from "next/image";

const LargeHero = (props) => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center md:justify-end md:text-right">
      <div className="absolute inset-0 rounded rounded-[30px]">
        <Image
          src="/home-hero.png"
          alt="Consulting Redefined"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 rounded-[25px]"
        />
      </div>
      <div className="relative z-10 text-center md:text-right">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-equivolition text-white md:mr-20 mt-96">
          {props.heading}
        </h1>
      </div>
    </section>
  );
};

export default LargeHero;
