// 

import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Running Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "shoes",
    },
    {
      name: "Sports T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      category: "clothing",
    },
    {
      name: "Cricket Bat",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
      category: "accessories",
    },
    {
      name: "Football",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
      category: "accessories",
    },
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <Hero />

      {/* VIJAY SPORT INFO SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
            What Makes Vijay Sport Special? 🔥
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Vijay Sport offers a complete range of sports and fitness products 
            including Kids Sports Shoes, College Shoes, Night Pants, T-Shirts, 
            Gym Protein, Premium Perfume, Smart Watches, Cricket Bats, Football, 
            and all essential sports equipment. Everything you need for training, 
            fitness, and daily active life is available in one place.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Our Products
              </h3>
              <p className="text-gray-600">
                From stylish sports shoes to performance gym protein and durable 
                cricket bats, we provide high-quality products designed for comfort, 
                strength, and long-lasting use.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Why We Are Popular
              </h3>
              <p className="text-gray-600">
                Vijay Sport is popular because of premium quality, affordable prices, 
                fast delivery, and trusted customer satisfaction. Athletes and 
                students love our stylish and durable products.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Best for Daily Life
              </h3>
              <p className="text-gray-600">
                Running Shoes, Sports T-Shirts, Night Pants, Smart Watches, and 
                Gym Protein are perfect for daily workouts, college, sports practice, 
                and maintaining a healthy lifestyle.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((p, i) => (
            <div
              key={i}
              onClick={() => navigate(`/category/${p.category}`)}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            >
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
