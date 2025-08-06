import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { FiEye, FiEyeOff } from "react-icons/fi";
import registerBg from "../assets/register.jpg";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-exo">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${registerBg})` }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-white px-10 text-center">
          <h2 className="text-5xl font-bold mb-4 leading-tight">Join Us Today</h2>
          <p className="text-lg">
            Sign up and start your journey with our amazing community of learners.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f5f7fa] px-6 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Create Account
          </h1>

          <form onSubmit={submitHandler} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-[#f8f8f8] border border-gray-700 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-[#f8f8f8] border border-gray-700 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#f8f8f8] border border-gray-700 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-900"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#f8f8f8] border border-gray-700 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-900"
                >
                  {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF7A30] hover:bg-[#f49d6e] transition-all duration-300 text-white font-semibold py-3 rounded-md disabled:opacity-50"
            >
              Register
            </button>

            {isLoading && <Loader />}
          </form>

          <div className="text-center mt-6 text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1e90ff] hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
