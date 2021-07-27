import Center from "../../common/center";
import {Link} from "react-router-dom"

export default function LogIn() {
  return (
    <Center screen = {true}>
      <h1 className = "text-4xl font-bold">
        Log in.
      </h1>
      <p className = "text-gray-400 text-wrap m-4" >
        Log in with the data that you entered during registration
      </p>
      <form className = "w-1/3 max-w-xl border p-8 flex flex-col items-center">
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
        <button className = "w-24 rounded-sm bg-purple-500 my-4 p-2 text-white">
          Log in
        </button>
        <p>Don't have an account? <Link to = "/sign-up" className = "font-bold text-purple-500">Sign up</Link></p>
        <Link className = "font-bold text-purple-500 mt-2">Forgot your password?</Link>
      </form>
    </Center>
  );
}
