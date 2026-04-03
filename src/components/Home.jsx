import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>

      {/* 🎥 HERO WITH VIDEO */}
      <section className="relative h-[90vh] w-full overflow-hidden">

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/Hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vijay Sports
          </h1>

          <p className="max-w-xl text-gray-200 mb-6">
            Premium sports gear, apparel & accessories designed for performance.
          </p>

          <button
            onClick={() => navigate("/categories")}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </button>
        </div>

      </section>

    </div>
  );
};

export default Home;