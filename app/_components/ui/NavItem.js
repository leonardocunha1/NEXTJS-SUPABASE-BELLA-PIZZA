import Link from "next/link";

function NavItem({ link, lastLink, i, onClickLink }) {
  return (
    <li
      key={link.name}
      className={`my-7 text-base sm:my-0 sm:ml-7 ${lastLink === i && "sm:mr-7"}`}
    >
      <Link
        href={link.link}
        className="text-stone-800 duration-500 hover:text-stone-400"
        onClick={onClickLink}
      >
        {link.name}
      </Link>
    </li>
  );
}

export default NavItem;
