const SignIn = ({ setIsSignedIn }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-xl text-white w-96">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <input
          placeholder="Email"
          className="w-full p-2 mb-4 bg-black/40 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-black/40 rounded"
        />
        <button
          onClick={() => setIsSignedIn(true)}
          className="w-full bg-white text-black py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
