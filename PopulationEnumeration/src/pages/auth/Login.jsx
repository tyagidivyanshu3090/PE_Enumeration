import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate API call
    login("dummy-token");
    navigate("/otp");
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <div className="mt-1">
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send OTP
        </button>
      </div>
    </form>
  );
};

export default Login;
