import AllGames from "@/components/home/AllGames";
import FeaturedGames from "@/components/home/FeaturedGames";

export default function Home() {
  return (
    <>
      {/* I feel like there should be a banner or some kind of third section header here */}

      <FeaturedGames />

      <AllGames />
    </>
  );
}
