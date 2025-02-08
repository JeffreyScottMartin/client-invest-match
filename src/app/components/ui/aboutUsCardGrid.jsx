import { equiSemibold } from "@/app/styles/fonts";

const AboutUsCardGrid = () => {
  return (
    <section className="w-10/12 justify-center items-center text-center">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3
            className={`${equiSemibold.className} text-3xl text-darkGray leading-tight text-left`}
          >
            Vision Statement
          </h3>
          <p className="font-body text-lg text-darkGray text-left sm:text-left mt-2">
            Thriving economies fueled by the success of bold innovators.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3
            className={`${equiSemibold.className} text-3xl text-darkGray leading-tight text-left`}
          >
            Mission Statement
          </h3>
          <p className="font-body text-lg text-darkGray text-left sm:text-left mt-2">
            To redefine the consulting experience and empower our clients with
            innovative solutions and transformative learning opportunities.
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h3
            className={`${equiSemibold.className} text-3xl text-darkGray leading-tight text-left`}
          >
            InvestMatch Ethos
          </h3>
          <p className="font-body text-lg text-darkGray text-left mt-2">
            Our ethos drives our approach to every partnership. We believe in
            the power of collaboration to achieve shared goals, fostering
            creativity to spark innovation, prioritizing continuous learning to
            stay ahead, and embracing fun to create a vibrant, dynamic work
            environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCardGrid;
