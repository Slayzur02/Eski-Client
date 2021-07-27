import { default as Background } from "./hero-background.png";
import { Link } from "react-router-dom";

export default function HeroPage() {
  const CallToActionBtn = ({ toneIntensity, text, link }) => {
    if (toneIntensity === "light") {
      return (
        <Link to={link}>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 w-24 py-2 text-white rounded-sm m-4 transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            {text}
          </button>
        </Link>
      );
    } else {
      return (
        <Link to={link}>
        <button className="bg-gradient-to-r from-purple-600 to-purple-800 w-24 py-2 text-white rounded-sm m-4 transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          {text}
        </button>
        </Link>
      );
    }
  };
  return (
    <div
      className="w-screen relative h-screen bg-no-repeat bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="w-2/5 flex flex-col items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl mb-8">
            A tool to improve <br /> your Openings
          </h1>
          <p>
            Eski is the newest opening theory app - made <br />
            to assist you in your chess journey.
          </p>
          <br />
          <p>
            Create and learn your repertoire in your in <br /> your own books,
            with your own method.
          </p>
          <br />
          <div className="flex">
            <CallToActionBtn
              toneIntensity="heavy"
              text="Sign Up"
              link="/sign-up"
            />
            <CallToActionBtn
              toneIntensity="light"
              text="Log In"
              link="/log-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
