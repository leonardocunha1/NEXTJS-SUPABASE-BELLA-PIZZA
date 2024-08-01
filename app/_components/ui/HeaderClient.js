"use client";

import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function HeaderClient({ session }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Logo setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} session={session} />
    </>
  );
}

export default HeaderClient;
