"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NavLink = motion(Link);
const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="text-cyan-500  rounded-full flex items-center justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50 hover-bn
        "
      aria-label={"home"}
      name={"home"}
      prefetch={false}
    >
      <span className="relative  w-14 h-14 p-4  hover:text-blue-900 shadow-cyan-500/50">
        <Home className="w-full h-auto" strokeWidth={1.5} />

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background  text-foreground text-sm rounded-md shadow-lg whitespace-nowrap ">
          Home
        </span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </NavLink>
  );
};

export default HomeBtn;
