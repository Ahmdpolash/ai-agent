"use client";
import { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import Container from "./container";
import { UserButton, useUser } from "@stackframe/stack";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = useUser();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="backdrop-blur-sm border-b border-white/20"
    >
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen  top-0 left-0 z-10 "flex items-center justify-between px-6 py-4 backdrop-blur-sm cursor-pointer `}
      ></div>

      <Container>
        <div className="flex justify-between py-4 items-center ">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AI Hub</span>
          </div>

          {/* Desktop menu */}

          <div className="hidden md:flex items-center *:uppercase space-x-8 *:text-black *:hover:text-black">
            <NavLink href="/">Features</NavLink>
            <NavLink href="/">Demo</NavLink>
            <NavLink href="/">Pricing</NavLink>
            <NavLink href="/">About Us</NavLink>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } lg:hidden transition-all fixed z-50 duration-500 border-r border-gray-200/40 shadow-lg backdrop-blur-sm transform h-screen w-[350px] bg-whit text-black  top-0 left-0  bg-black/[0.97] `}
          >
            <button
              className="px-4 py-2 text-3xl  font-semibold flex cursor-pointer absolute right-0 mt-2"
              onClick={() => setOpen(false)}
            >
              <RxCross1 className="text-black " />
            </button>

            <div className="flex h-screen flex-col *:text-3xl p-5 gap-y-5 text-[18px] items-center justify-center">
              <NavLink href="/">Features</NavLink>
              <NavLink href="/">Demo</NavLink>
              <NavLink href="/">Pricing</NavLink>
              <NavLink href="/">About Us</NavLink>
            </div>
          </div>

          <div className="flex items-center">
            {user ? (
              <>
                <UserButton />
              </>
            ) : (
              <>
                <Link href={"/handler/signin"}>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
                    {" "}
                    SIGN IN
                  </Button>
                </Link>
              </>
            )}

            <IoMdMenu
              className="text-3xl  text-white cursor-pointer lg:hidden ml-4"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  );
}

export default Navbar;
