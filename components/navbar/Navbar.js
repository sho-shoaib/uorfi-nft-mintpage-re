import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo/logo.png";
import WalletConnect from "../connectButton/WalletConnect";

const Navbar = ({ setAddress }) => {
  return (
    <nav>
      <div className='main-nav'>
        <Link href='/'>
          <div className='img-container'>
            <Image src={logo} />
          </div>
        </Link>
        <div>
          <WalletConnect setAddress={setAddress} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
