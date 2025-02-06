import LargeHero from "@/app/components/ui/largeHero";

const Home = () => {
  return (
    <div className="container mt-6 w-3/4 justify-center mb-16 mx-auto">
      <LargeHero imageString="/home-hero.png" heading="Consulting Redefined" />
    </div>
  );
};

export default Home;
