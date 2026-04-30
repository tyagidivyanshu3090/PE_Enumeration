import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    navigate("/app/dashboard");
  };

  return (
    <form className="space-y-6" onSubmit={handleVerify}>
      <div>
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
          Enter OTP
        </label>
        <div className="mt-1">
          <input
            id="otp"
            name="otp"
            type="text"
            maxLength="6"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-center tracking-widest"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Verify OTP
        </button>
      </div>
    </form>
  );
};

export default OTP;
