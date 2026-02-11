const SignUp = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-xl text-white w-96">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <input placeholder="Name" className="w-full p-2 mb-3 bg-black/40 rounded" />
        <input placeholder="Email" className="w-full p-2 mb-3 bg-black/40 rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-black/40 rounded" />
        <button className="w-full bg-white text-black py-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
