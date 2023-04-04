import { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: NextPage = () => {
  return (
    <>
      {/* <Head></Head> */}

      <div className="navbar">
        <div className="space-between">
          <Link href="/">
            <Image
              width={40}
              height={40}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="logo"
            ></Image>
          </Link>

          <div className="login-button">
            <button className="loginclor">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
