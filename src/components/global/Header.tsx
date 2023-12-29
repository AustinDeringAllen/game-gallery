import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 h-16 w-full">
      <div className="max-w-screen-2xl w-full h-full mx-auto flex items-center justify-between">
        <h3 className="text-xl">
          <Link href={"/"}>Game Gallery</Link>
        </h3>
      </div>
    </header>
  );
}
