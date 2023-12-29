import Section from "../global/Section";
import { Button } from "../ui/button";

export default function AllGames() {
  return (
    <Section>
      <h2 className="text-5xl">All Games</h2>
      <div className="w-9/12 grid grid-cols-4 grid-rows-2 gap-6">
        <div className="col-span-1 h-[212px] row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 h-[212px] row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 h-[212px] row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
        <div className="col-span-1 row-span-2 bg-blue-500 rounded-md"></div>
      </div>
      <Button>All Games / Pagination?</Button>
    </Section>
  );
}
