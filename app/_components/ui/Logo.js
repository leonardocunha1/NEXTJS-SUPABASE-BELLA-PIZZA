import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo({ setOpen }) {
  return (
    <div className="flex">
      <Link
        href="/"
        className="flex items-center font-[Poppins] text-xl font-bold tracking-widest text-orange-950"
        onClick={() => setOpen(false)}
      >
        <span className="mr-1">
          <Image height={40} width={40} src={logo} alt="Logo do site" />
        </span>
        <span className="hidden sm:inline">Bella Pizza</span>
      </Link>
    </div>
  );
}

export default Logo;
