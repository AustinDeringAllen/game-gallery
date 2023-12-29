import Section from "../global/Section";

export default function FeaturedGames() {
  return (
    <Section className="mt-12">
      <h2 className="text-5xl">Featured Games</h2>
      <div className="w-9/12 grid grid-cols-4 grid-rows-6 gap-6">
        <div className="w-full h-[28rem] col-span-4 row-span-4 bg-blue-500 cursor-pointer rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 cursor-pointer rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 cursor-pointer rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 cursor-pointer rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 cursor-pointer rounded-md"></div>
      </div>
    </Section>
  );
}
