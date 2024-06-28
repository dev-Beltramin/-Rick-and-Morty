import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="bg-slate-950 h-32">
          <Link href={"/"}>
        <div className="flex items-center h-full">
            <h2 className="text-6xl text-fuchsia-50 mx-auto w-11/12 justify-center flex font-bold">
              Rick and Morty{" "}
            </h2>
        </div>
          </Link>
      </header>
    </div>
  );
};

export default Header;
