import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
    <div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        {" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Michael Chuang</a>
        </Link>
      </h1>

      <hr></hr>
    </div>
    </>
  );
};

export default Footer;
