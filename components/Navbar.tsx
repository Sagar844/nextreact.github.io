import { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SearchApi from "./SearchApi";

const Navbar: NextPage = () => {
  const [pop, setpop] = useState(false);
  return (
    <>
      {/* <Head></Head> */}

      <div className="navbar">
        <div className="space-between">
          <Link href="/" passHref>
            <Image
              width={40}
              height={40}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="logo"
            ></Image>
          </Link>
          {pop && <SearchApi />}
          <div>
            {/* <h1 onClick={() => setpop(!pop)} style={{ color: "white", cursor: "pointer" }}>
              <BiSearchAlt />
            </h1> */}
          </div>
          <div>
            <Link style={{ color: "white" }} href="/CartPgae" passHref>
              xcart
            </Link>
          </div>

          <div className="login-button">
            <button className="loginclor">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
