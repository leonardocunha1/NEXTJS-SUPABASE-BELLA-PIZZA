"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { useCarrinho } from "@/app/_contexts/CarrinhoContext";
import { signInAction, signOutAction } from "@/app/_lib/actions";

import { RiMenu3Fill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import NavItem from "./NavItem";

import SignInOutButton from "./SignInOutButton";
import { FaSignOutAlt } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";

const NavLinks = [
  { name: "Início", link: "/" },
  { name: "Cardápio", link: "/cardapio" },
];

const lastLink = NavLinks.length - 1;

function Nav({ open, setOpen, session }) {
  const menuRef = useRef(null);
  const { carrinho } = useCarrinho();

  const firstName = session?.user?.name?.split(" ")[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <>
      {carrinho.length === 0 ? (
        ""
      ) : (
        <Link
          href="/carrinho"
          className="absolute left-1/2 top-1/2 inline-block -translate-y-1/3 sm:hidden"
        >
          <TiShoppingCart className="h-7 w-7 text-orange-950 duration-500 hover:text-orange-800" />
        </Link>
      )}

      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-6 cursor-pointer text-3xl transition-transform duration-300 ease-in-out sm:hidden"
      >
        {open ? <IoClose size="30px" /> : <RiMenu3Fill size="30px" />}
      </div>

      <div
        ref={menuRef}
        className={`absolute left-0 w-full gap-3 bg-stone-50 pb-12 pl-9 transition-all duration-500 ease-in sm:static sm:z-auto sm:flex sm:w-auto sm:items-center sm:pb-0 sm:pl-0 ${
          open ? "top-20 z-50" : "top-[-490px]"
        }`}
      >
        <div className="order-1 mt-7 flex gap-3 sm:mt-0">
          {session && session?.user ? (
            <Link
              href="/account"
              className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-base text-stone-50 duration-500 hover:bg-orange-900 hover:text-stone-50"
            >
              {session?.user.image ? (
                <div className="h-7 w-7">
                  <Image
                    src={session.user.image}
                    className="h-8 rounded-full"
                    layout="responsive"
                    width={32}
                    height={32}
                    alt={session.user.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <FaUser className="h-5 w-5" />
              )}
              {firstName}
            </Link>
          ) : (
            ""
          )}

          {carrinho.length === 0 ? (
            ""
          ) : (
            <Link href="/carrinho">
              <TiShoppingCart className="hidden h-7 w-7 text-orange-950 duration-500 hover:text-orange-800 sm:block" />
            </Link>
          )}
        </div>
        <ul className="items-center sm:flex">
          {NavLinks.map((link, i) => (
            <NavItem
              link={link}
              i={i}
              onClickLink={() => setOpen(false)}
              lastLink={lastLink}
              key={link.name}
            />
          ))}

          {session && session?.user ? (
            <SignInOutButton action={signOutAction}>
              <FaSignOutAlt /> Sair
            </SignInOutButton>
          ) : (
            <SignInOutButton action={signInAction}>
              <FaSignInAlt />
              Login
            </SignInOutButton>
          )}
        </ul>
      </div>
    </>
  );
}

export default Nav;
