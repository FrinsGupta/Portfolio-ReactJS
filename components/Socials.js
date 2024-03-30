// links
import Link from "next/link";

// icons
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg head" >
      <Link href={"https://instagram.com/nikhilism_1515"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://twitter.com/nikhilism_1515"} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={"https://github.com/nikhilj007"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://linkedin.com/in/nikhilj007"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
