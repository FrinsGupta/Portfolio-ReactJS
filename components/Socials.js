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
      <Link target="_blank" href={"https://instagram.com/frins_gupta"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link target="_blank" href={"https://twitter.com/X_FrinsGupta"} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link target="_blank" href={"https://github.com/FrinsGupta"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/prince-gupta-99a11a241/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
