import Link from "next/link";
import Logo from "components/Logo";

import { GiHamburgerMenu } from "react-icons/gi";
import { HiPlus } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChat } from "react-icons/bs";

import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <nav className="shadow-sm bg-white">
      <div className="container flex justify-between items-center px-3 py-4 mx-auto">
        <Logo />
        <ul className="gap-4 font-medium hidden md:flex md:items-center my-auto">
          <li className="hover:text-cyan-500 transition cursor-pointer">
            <Link href="#">
              <span className="flex items-center gap-2">
                <BsChat /> Mensagens
              </span>
            </Link>
          </li>
          <li className="hover:text-cyan-500 transition cursor-pointer">
            <Link href="#">
              <span className="flex items-center gap-2">
                <IoMdNotificationsOutline /> Notificações
              </span>
            </Link>
          </li>
          <li className="px-4 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-700 transition cursor-pointer">
            <Link href="#">
              <span className="flex items-center gap-2">
                <HiPlus /> Anunciar
              </span>
            </Link>
          </li>
          <li className="px-4 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-700 transition cursor-pointer">
            <Link href="login">
              <span className="flex items-center gap-2">
                <BiLogIn /> Entrar
              </span>
            </Link>
          </li>
          {/* <li>
            <UserMenu />
          </li> */}
        </ul>
        <span className="my-auto p-4 rounded-full text-cyan-500 hover:text-white hover:bg-cyan-500 transition cursor-pointer md:hidden">
          <GiHamburgerMenu className="text-md sm:text-lg" />
        </span>
      </div>
    </nav>
  );
}
