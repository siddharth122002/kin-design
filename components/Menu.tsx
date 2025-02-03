import KinSvg from "./KinSvg";
interface HeroProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ open, setOpen }: HeroProps) {
  return (
    <div className="bg-[#FF6542] min-h-screen w-full text-white px-6 md:px-12">
      {/* Navbar */}
      <div className="flex justify-between items-center py-6">
        <div className="w-16 h-16 md:w-20 md:h-20 p-2">
          <KinSvg />
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer text-xl md:text-3xl font-semibold underline"
        >
          Close
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 md:mt-48 text-center md:text-left">
        {/* Address */}
        <div className="text-xs font-semibold mb-6 md:mb-0">
          COLONY <br /> FLINT GLASS WORKS -<br />
          64 JERSEY ST
          <br /> MANCHESTER
          <br /> M4 6JW
        </div>

        {/* Navigation Links */}
        <div className="text-4xl md:text-7xl underline decoration-4 underline-offset-[1vw] font-semibold flex flex-col gap-3 md:ml-48">
          <p>About</p>
          <p>Work</p>
          <p>Journal</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16">
        <div className="flex flex-col text-center md:text-left">
          <p className="uppercase text-xs font-semibold">
            Signup for our ‘kin quarterly newsletter
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-2">
            <input
              placeholder="NAME..."
              className="bg-[#362A29] text-xs outline-none opacity-60 w-full md:w-1/3 p-3"
              type="text"
            />
            <input
              placeholder="EMAIL ADDRESS..."
              className="bg-[#362A29] outline-none text-xs w-full md:w-2/3 opacity-60 p-3"
              type="text"
            />
          </div>
          <button className="mt-2 flex justify-between items-center bg-white text-[#362A29] p-3">
            <p className="text-xs font-semibold">Subscribe</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.7824 7.33327L7.20637 3.75726L8.14917 2.81445L13.3346 7.99993L8.14917 13.1853L7.20637 12.2425L10.7824 8.6666H2.66797V7.33327H10.7824Z"
                fill="#111214"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
