"use client";

import { useEffect, useRef } from "react";

import { useCarrinho } from "@/app/_contexts/CarrinhoContext";
import { signOutAction } from "@/app/_lib/actions";

import { RiMenu3Fill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import NavItem from "./NavItem";

import { FaSignOutAlt } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import Button from "./Button";

const NavLinks = [
  { name: "Início", link: "/" },
  { name: "Cardápio", link: "/cardapio" },
];

const lastLink = NavLinks.length - 1;

function Nav({ open, setOpen, session }) {
  //   console.log(session);
  const menuRef = useRef(null);
  const { carrinho } = useCarrinho();

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
          className="fixed right-6 top-24 inline-block -translate-y-1/3"
        >
          <TiShoppingCart className="h-10 w-10 text-orange-950 duration-500 hover:text-orange-800" />
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
        className={`absolute left-0 w-full gap-3 bg-stone-50 pb-12 pl-9 shadow-lg transition-all duration-500 ease-in sm:static sm:z-auto sm:flex sm:w-auto sm:items-center sm:pb-0 sm:pl-0 sm:shadow-none ${
          open ? "top-20 z-50" : "top-[-490px]"
        }`}
      >
        <div className="order-1 mt-7 flex gap-3 sm:mt-0">
          {session && session?.user ? (
            <Button
              type="link"
              href="/account"
              icon={<FaUser className="h-5 w-5" />}
              onClick={() => setOpen(false)}
            >
              Meus pedidos
            </Button>
          ) : (
            ""
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

          {session ? (
            <button
              onClick={() => signOutAction()}
              className="flex items-center gap-2 text-base text-stone-800 duration-300 hover:text-stone-400"
            >
              <FaSignOutAlt className="h-5 w-5" />
              Sair
            </button>
          ) : (
            <Link
              href="/auth/signin"
              className="flex gap-2 text-base text-stone-800 duration-300 hover:text-stone-400"
            >
              <PiSignInBold className="h-5 w-5" />
              Entrar
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}

export default Nav;
