import { motion } from "framer-motion";

const AboutStore = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
            alt="Vijay Sport Store"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            About Vijay Sport 🏆
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Vijay Sport is your ultimate destination for premium sports gear 
            and athletic essentials. We provide high-quality equipment designed 
            for champions who strive for excellence.
          </p>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            From professional athletes to fitness enthusiasts, our mission is 
            to empower every player with durable, stylish, and performance-driven products.
          </p>

          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg">
            Explore Our Collection
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutStore;
