import React from "react";

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact <b>Vijay Sports</b></h1>

        <div style={styles.details}>
          <p><strong>Owner:</strong> Mr. Vijay Pandhare</p>
          <p><strong>Email:</strong> vijaysports@gmail.com</p>
          <p><strong>Mobile:</strong> +91 8554083358</p>
          <p><strong>Instagram:</strong> @vijaysports_official</p>
        </div>

        <div style={styles.locationSection}>
          <h2 style={styles.subtitle}>Shop Location</h2>
          <p>
            Vijay Sports, Main Market Road,  
            Near Bus Stand, Pune, Maharashtra – 411001
          </p>

          {/* Google Map */}
          <div style={styles.mapContainer}>
            <iframe
              title="Shop Location"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #f5f7fa, #e4ecf7)",
    padding: "40px"
  },

  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    width: "600px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "28px",
    color: "#333"
  },

  subtitle: {
    marginTop: "25px",
    marginBottom: "10px",
    fontSize: "20px",
    color: "#201c1c"
  },

  details: {
    lineHeight: "2",
    fontSize: "16px",
    color: "#555"
  },

  locationSection: {
    marginTop: "20px"
  },

  mapContainer: {
    marginTop: "15px"
  }
};

export default ContactPage;