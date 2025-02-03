import Link from "next/link";
import React from "react";

function Insta() {
  return (
    <>
      <div className="text-xs flex flex-col justify-between mb-3 text-[#30302d] ml-16 font-semibold">
        <a className="underline" href="mailto:support@example.com">
          SAYHI@BY-KIN.COM
        </a>
        <div className="underline flex flex-col">
          <Link href={"https://instagram.com"}>INSTAGRAM</Link>
          <Link href={"https://.com"}>LINKEDIN</Link>
        </div>
      </div>
    </>
  );
}

export default Insta;
