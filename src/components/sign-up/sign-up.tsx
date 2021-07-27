import Center from "../../common/center";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Center screen={true}>
      <h1 className="text-4xl font-bold">Sign up</h1>
      <p className="text-gray-400 text-wrap m-4">
        Start your chess journey, today.
      </p>
      <form className="w-1/3 border p-8 flex flex-col items-center">
        <div className="mb-4 w-full">
          <label htmlFor="email" className=" block font-bold font-l mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="purple-input"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="Username" className=" block font-bold font-l mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="purple-input"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="password" className=" block font-bold font-l mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password here"
            className="purple-input"
          />
        </div>
        <button className="w-24 rounded-sm bg-purple-500 my-4 p-2 text-white">
          Sign up
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/log-in" className="font-bold text-purple-500">
            Log in
          </Link>
        </p>
      </form>
    </Center>
  );
}
