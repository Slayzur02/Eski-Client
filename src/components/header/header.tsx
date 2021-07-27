import { Link } from "react-router-dom";
import { default as logo } from "./purple-pawn.svg";

export default function Header({ active }) {
  const HeaderLeftItem = ({ id, link, children }) => {
    if (id !== active) {
      return (
        <div
          className="mx-2 px-2 border-b-2 text-gray-500 border-purple-400 border-opacity-0 
        hover:text-purple-500 hover:border-opacity-100 transition duration-100 ease-in"
        >
          <Link to={link}>{children}</Link>
        </div>
      );
    }
    return (
      <div
        className="mx-2 px-2 border-b-2 font-medium border-purple-400 border-opacity-0 
        hover:text-purple-500 hover:border-opacity-100 transition duration-100 ease-in"
      >
        <Link to={link}>{children}</Link>
      </div>
    );
  };

  const LogoAndLetter = () => {
    return (
      <div className="flex items-center">
        <img src={logo} className="max-h-8 px-4" />
        <p className="text-2xl text-gray-800 font-bold"><Link to="/">ESKI</Link></p>
      </div>
    );
  };
  return (
    <div className="relative z-10 flex shadow-md items-center text-lg text-gray-700 w-full px-4 py-4">
      <div className="flex-grow flex justify-between">
        <LogoAndLetter />
        <div className="flex px-4">
          <HeaderLeftItem id={0} link="/">
            Home
          </HeaderLeftItem>
          <HeaderLeftItem id={1} link="/test">
            Play
          </HeaderLeftItem>
          <HeaderLeftItem id={2} link="/">
            Online
          </HeaderLeftItem>
          <HeaderLeftItem id={3} link="/">
            Collection
          </HeaderLeftItem>
          <HeaderLeftItem id={4} link="/">
            Analysis
          </HeaderLeftItem>
        </div>
      </div>
    </div>
  );
}
