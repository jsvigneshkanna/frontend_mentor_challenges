import React from "react";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center">
      <Link href="/">Home </Link>
      <Link href="/solutions/product_preview_card">preview </Link>
      <ThemeToggler />
    </div>
  );
};

export default Navbar;
