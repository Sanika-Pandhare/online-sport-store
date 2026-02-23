import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [mobile, setMobile] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const isMobileValid = mobile.length === 10 && !isNaN(mobile);
  const isOtpValid = otp.length === 4 && !isNaN(otp);

  const handleVerify = () => {
    setShowSuccess(true);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10 relative">

      <div className="bg-white w-[420px] rounded-3xl p-8 shadow-xl">

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Vijay Sports</h1>
        </div>

        <h2 className="text-xl font-semibold text-center mb-2">
          Login to your account
        </h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          Get personalised picks & faster checkout
        </p>

        {!showOTP ? (
          <>
            <label className="block text-sm font-medium mb-2">
              Enter 10-digit mobile number
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 mb-6">
              <span className="mr-2 text-gray-700">+91</span>
              <input
                type="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full outline-none"
                placeholder="Enter mobile number"
              />
            </div>

            <button
              disabled={!isMobileValid}
              onClick={() => setShowOTP(true)}
              className={`w-full py-3 rounded-full font-medium transition ${
                isMobileValid
                  ? "bg-black text-white hover:opacity-90"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Get OTP
            </button>
          </>
        ) : (
          <>
            <label className="block text-sm font-medium mb-2">
              Enter 4-digit OTP
            </label>

            <input
              type="text"
              maxLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 mb-6 text-center tracking-widest outline-none"
              placeholder="Enter OTP"
            />

            <button
              disabled={!isOtpValid}
              onClick={handleVerify}
              className={`w-full py-3 rounded-full font-medium transition ${
                isOtpValid
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Verify
            </button>
          </>
        )}
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-[380px] text-center">

            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Welcome Back!
            </h2>

            <p className="text-gray-700 mb-6">
              Login successful.  
              Let’s continue shopping!
            </p>

            <button
              onClick={() => navigate("/")}
              className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Continue
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
