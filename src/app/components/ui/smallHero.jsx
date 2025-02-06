import Image from "next/image";

const SmallHero = (props) => {
  return (
    <section className="relative w-full h-[250px] flex items-center justify-center md:justify-start md:text-left">
      <div className="absolute inset-0 rounded rounded-[30px]">
        <Image
          src={props.imageString}
          alt="Consulting Redefined"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 rounded-[25px]"
        />
      </div>
      <div className="relative z-10 text-center md:text-left">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-equivolition text-white md:ml-20">
          {props.heading}
        </h1>
      </div>
    </section>
  );
};

export default SmallHero;
