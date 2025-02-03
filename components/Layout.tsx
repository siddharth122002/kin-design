import React from "react";
interface LayoutProps {
  layout: number;
  setLayout: React.Dispatch<React.SetStateAction<number>>;
}
function Layout({ layout, setLayout }: LayoutProps) {
  return (
    <>
      <p className="text-gray-400 uppercase">Layout</p>
      <div
        onClick={() => {
          setLayout(1);
        }}
        className={`${
          layout === 1 &&
          "w-8 h-8 flex justify-center border-[1px] border-black items-center  rounded-full"
        }  cursor-pointer`}
      >
        1
      </div>
      <div
        onClick={() => {
          setLayout(2);
        }}
        className={`${
          layout === 2 &&
          "w-8 h-8 flex justify-center border-[1px] border-black items-center  rounded-full"
        }  cursor-pointer`}
      >
        2
      </div>
    </>
  );
}

export default Layout;
