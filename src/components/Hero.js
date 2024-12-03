import React from "react";
import logo from "../assets/knowgologo.png";

const Hero = () => {
  return (
    <section className= 'hero' style={styles.hero}>
    <h1 style={styles.title}>
      Welcome to <span style={styles.know}>Know</span>
      <span style={styles.go}>Go</span>!
    </h1>
    <div style={styles.logo}>
      <img className='logo' src={logo} alt="the site logo" style={styles.image} />
    </div>
    <p style={styles.subtitle}>
      “I learned very early the difference between knowing the name of
      something and knowing something.” - Richard Feynman
    </p>
    <button style={styles.ctaButton}>Coming Soon</button>
  </section>
);
};

export default Hero;



const styles = {
  hero: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#3f4547",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100vw",
    padding:'30px'
  },
  title: {
    fontSize: "3rem",
    fontFamily: "'Quicksand', Arial, sans-serif",
    marginBottom: "20px",
  },
  logo: {
    marginBottom: "20px",
  },
  image: {
    height: "500px",
    width: "500px",
    objectFit: "cover",
  },
  subtitle: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  ctaButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#407ea6",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    position: "relative",
    top: "20px",
  },
  know: {
    color: "#407ea6",
  },
  go: {
    color: "#ff723b",
  },
};
