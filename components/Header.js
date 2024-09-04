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
        <div className="flex flex-col lg:flex-row justify-around items-center xl:gap-y-6 mt-48 xl:py-8 ">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/priilogo.png"}
              width={220*2}
              height={48*2}
              alt="full name/Logo svg"
              priority={true}
            />
          </Link> 
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
