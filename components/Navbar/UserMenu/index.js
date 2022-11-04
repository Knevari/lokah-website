import Image from "next/image";
import Link from "next/link";

import { BsChat } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";

const MenuItem = ({ path, children, icon }) => {
  return (
    <Link href={path}>
      <span className="flex gap-3 p-3 items-center hover:bg-cyan-200 cursor-pointer transition rounded-sm">
        {icon}
        {children}
      </span>
    </Link>
  );
};

const Divider = () => {
  return <hr className="w-full h-px mx-auto bg-gray-700" />;
};

export default function UserMenu() {
  return (
    <div className="group p-0.5 rounded-full border-2 border-cyan-900 relative">
      {/* User Menu Button */}
      <div className="rounded-full overflow-hidden bg-cyan-500 w-14 h-14 relative cursor-pointer hover:grayscale transition-all">
        <Image
          src="/user.webp"
          layout="fill"
          className="object-cover"
          alt="user profile image"
        />
      </div>

      {/* User Menu */}
      <div className="hidden absolute group-hover:flex flex-col top-19 right-0 w-96 bg-white shadow-2xl border-2 rounded-lg p-3 z-50">
        <MenuItem path="/account" icon={<VscAccount />}>
          Minha Conta
        </MenuItem>
        <Divider />
        <MenuItem path="/chat" icon={<BsChat />}>
          Mensagens
        </MenuItem>
        <Divider />
        <MenuItem path="/annoucements" icon={<HiOutlineSquares2X2 />}>
          Meus Anúncios
        </MenuItem>
        <MenuItem path="/account" icon={<BiShoppingBag />}>
          Minhas Compras
        </MenuItem>
        <Divider />
        <MenuItem path="/quit" icon={<MdOutlineLogout />}>
          Sair
        </MenuItem>
      </div>
    </div>
  );
}
