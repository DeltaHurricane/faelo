import { Navigation } from "./Navigation";
import { NavMobile } from "./NavMobile";

export function Header() {
 
  return (
    <>
      <div
        className="md:hidden z-20 sticky top-2 left-2 w-fit m-0 pointer-events-none h-8 mt-[-2.5rem]"
      > 
        <NavMobile />
      </div>
      <div
        className="max-md:hidden z-20 sticky top-0  h-20 flex justify-start items-center  bg-white overflow-hidden"
      > 
        <Navigation />
      </div>

    </>
  );
}






