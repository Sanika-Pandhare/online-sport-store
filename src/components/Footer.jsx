const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Vijay Sport Store</h2>
          <p className="text-gray-400 text-sm">
            Premium sports products for champions.  
            Best quality shoes, bats, kits & accessories.
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <p>📧 vijaysports@gmail.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Sports Shoes</li>
            <li>Cricket Kits</li>
            <li>Football</li>
            <li>Gym Accessories</li>
            <li>Trophies</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* DOWNLOAD + SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4">Get Our App</h3>

          <div className="flex gap-3 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-10 cursor-pointer"
            />
          </div>

          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-blue-500">🌐</span>
            <span className="cursor-pointer hover:text-pink-500">📸</span>
            <span className="cursor-pointer hover:text-blue-400">🐦</span>
            <span className="cursor-pointer hover:text-red-500">▶️</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 Vijay Sport Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
