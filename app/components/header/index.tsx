import { Navigation } from "./Navigation";
import { NavMobile } from "./NavMobile";

export function Header() {
 
  return (
    <>
      <div
        className="md:hidden flex z-30 sticky top-2 left-2 w-12 m-0 pointer-events-none h-12 rounded-full mt-[-2.5rem] bg-Eyellow-400/20 items-center justify-center"
      > 
        <NavMobile />
      </div>
      <div
        className="max-md:hidden z-20 sticky top-0  h-20 flex justify-start items-center  bg-white/25 overflow-hidden"
      > 
        <Navigation />
      </div>

    </>
  );
}






