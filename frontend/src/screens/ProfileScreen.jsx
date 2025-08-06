import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const ProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/med-one-group/image/upload/q_auto/v1641310292/Website/Images/Blog/understanding-overuse-underuse-and-misuse-of-medical-care_zytpbn.webp')",
      }}
    >
      <FormContainer>
        <div className="relative backdrop-blur-md bg-white/70 shadow-2xl rounded-2xl p-12 max-w-2xl w-full border border-white/40">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center">
            Update Profile
          </h1>
          <p className="text-center text-gray-600 mb-8 text-base">
            Make changes to your account information below.
          </p>

          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/90 text-gray-800 text-md"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/90 text-gray-800 text-md"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                New Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/90 text-gray-800 text-md"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/90 text-gray-800 text-md"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg rounded-lg transition-all duration-200 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </button>

            {isLoading && <Loader />}
          </form>
        </div>
      </FormContainer>
    </div>
  );
};

export default ProfileScreen;
