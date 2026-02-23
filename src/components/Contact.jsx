import ownerImage from "../assets/owner.jpg";

const Contact = () => {
  return (
    <div className="bg-[#e3e7e6] pt-[10px] pb-16">
      
      <div className="max-w-6xl mx-auto py-16">

        <div className="grid md:grid-cols-2 items-start gap-8 px-8">

          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center">
            <div className="w-[420px] bg-white shadow-md p-6">

              <img
                src={ownerImage}
                alt="Owner"
                className="w-full h-[380px] object-cover"
              />

              <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">
                Mr. Vijay Pandhare
              </h3>

              <p className="text-center text-gray-700 italic mt-1">
                Owner of Vijay Sports
              </p>

            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="px-8 md:px-16">
            
            <p className="text-3xl tracking-wide text-teal-900 uppercase mb-6 font-bold">
              About Us
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug mb-8">
              Built On Passion <br /> And Performance
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              Vijay Sports was established in 2015 with the vision of creating a
              trusted destination for athletes and sports enthusiasts. Our goal
              has always been to provide high-quality sports equipment and apparel
              that supports performance and dedication.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From cricket gear to fitness essentials, we focus on delivering
              reliable and performance-driven products that inspire discipline,
              strength, and growth through sports.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 text-gray-700 text-sm">
              <p><span className="font-medium">Owner:</span> Mr. Vijay Pandhare</p>
              <p><span className="font-medium">Email:</span> vijaysports@gmail.com</p>
              <p><span className="font-medium">Mobile:</span> +91 8554083358</p>
              <p><span className="font-medium">Instagram:</span> @vijaysports_official</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
