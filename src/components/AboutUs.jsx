import ownerImage from "../assets/owner.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">

      <div className="about-wrapper">

        <div className="about-grid">

          {/* 🔹 LEFT IMAGE CARD */}
          <div className="about-left">
            <div className="owner-card">

              <img
                src={ownerImage}
                alt="Owner"
                className="owner-img"
              />

              <h3 className="owner-name">
                Mr. Vijay Pandhare
              </h3>

              <p className="owner-role">
                Owner of <b>Vijay Sports</b>
              </p>

            </div>
          </div>

          {/* 🔹 RIGHT CONTENT */}
          <div className="about-right">

            <p className="about-title">
              About Us
            </p>

            <h1 className="about-heading">
              Built On Passion <br /> And Performance
            </h1>

            <p className="about-text">
              Vijay Sports was established in 2015 with the vision of creating a
              trusted destination for athletes and sports enthusiasts. Our goal
              has always been to provide high-quality sports equipment and apparel
              that supports performance and dedication.
            </p>

            <p className="about-text">
              From cricket gear to fitness essentials, we focus on delivering
              reliable and performance-driven products that inspire discipline,
              strength, and growth through sports.
            </p>

            <div className="about-info">
              <p><span>Owner:</span> Mr. Vijay Pandhare</p>
              <p><span>Email:</span> vijaysports@gmail.com</p>
              <p><span>Mobile:</span> +91 8554083358</p>
              <p><span>Instagram:</span> @vijaysports_official</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AboutUs;