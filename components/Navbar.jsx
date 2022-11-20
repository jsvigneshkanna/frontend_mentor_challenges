import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import VkLogo from "./VkLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const displayMenu = () => {
    if (isMenuOpen) {
      return "flex flex-col justify-center items-center gap-8 py-8 border-t-2 mt-2 border-slate-500 font-semibold";
    } else {
      return "hidden";
    }
  };
  return (
    <div className="bg-slate-700 dark:bg-slate-200 px-4 md:px-8 lg:px-72 text-white dark:text-black  ">
      <div className="justify-between items-center py-3 hidden md:flex">
        <div className="flex gap-8 font-semibold">
          <Link href="/">Home </Link>
          <Link href="/aboutme">About Me</Link>
        </div>
        <ThemeToggler />
      </div>
      <div>
        <div className="flex justify-between items-center py-3 md:hidden lg:hidden">
          <ThemeToggler />
          <VkLogo />
          <p onClick={showMenu}>{isMenuOpen ? <AiOutlineClose size={25} /> : <MdMenu size={25} />}</p>
        </div>
        <div className={displayMenu()}>
          <Link href="/" onClick={showMenu}>
            Home
          </Link>
          <Link href="/aboutme" onClick={showMenu}>
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
