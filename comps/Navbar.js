/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg">
      <div className="logo">
        <Image src="/image.jpg" width="128px" height="77px" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
