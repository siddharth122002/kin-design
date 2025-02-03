import Image from "next/image";
import React from "react";

function GroupPic() {
  return (
    <div className="relative w-[82vw] h-full m-auto">
      <Image
        src={
          "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2FTeam_988bbb0c2a.png&w=1080&q=100"
        }
        fill
        className="w-full h-full object-contain"
        alt="somethign"
      />
    </div>
  );
}

export default GroupPic;
