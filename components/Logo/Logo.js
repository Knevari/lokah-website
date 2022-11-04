import Image from "next/image";
import Link from "next/link";

export default function Logo({ scale = 1 }) {
  return (
    <Link href="/">
      <Image
        className="cursor-pointer"
        width={(353 / 4) * scale}
        height={(137 / 4) * scale}
        layout="fixed"
        src="/logo.png"
        alt=""
      />
    </Link>
  );
}
