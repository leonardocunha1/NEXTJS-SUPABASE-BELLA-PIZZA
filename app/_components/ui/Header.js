import { auth } from "@/auth";
import HeaderClient from "./HeaderClient";

async function Header() {
  const session = await auth();

  return (
    <header className="fixed left-0 top-0 z-50 w-full shadow-md">
      <div className="relative h-[72px] items-center justify-between bg-stone-50 px-7 py-4 sm:flex sm:px-10">
        <HeaderClient session={session} />
      </div>
    </header>
  );
}

export default Header;
