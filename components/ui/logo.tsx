import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-no-bg.png"
export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Vallabha">
      <Image src={logo} alt="VGTech Logo" width={150} height={50} />
    </Link>
  );
}
