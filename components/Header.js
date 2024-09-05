// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-50 w-full h-16  flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        {/* <div className="flex flex-col lg:flex-row justify-around items-center xl:gap-y-6  xl:py-8 "> */}
        <div className="flex relative flex-col lg:flex-row justify-around items-center xl:gap-y-6   ">
        {/* <div> */}
          {/* socials */}
          {/* <Socials />
          </div> */}
           {/* logo  */}
          {/* <div className=" absolute left-60 top-24">
          <Link href={"/"}>
            <Image
              src={"/priilogo.png"}
              width={220*1.5}
              height={48*1.5}
              alt="full name/Logo svg"
              priority={true}
            />
          </Link> 
          </div> */}
          
           {/* socials  */}
          
        
            {/* logo  */}
          <div className="absolute left-0 top-10 ">

          <Link href={"/"}>
            <Image
              src={"/priilogo.png"}
              width={220*1.3}
              height={48*1.3}
              alt="full name/Logo svg"
              priority={true}
            />
          </Link> 
          </div>
          {/* <div className="absolute right-20"> */}
          <Socials />
          {/* </div> */}
          </div>
      </div>
    </header>
  );
};

export default Header;
