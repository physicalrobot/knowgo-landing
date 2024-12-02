import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;




const styles = {
  footer: {
    backgroundColor: "#3f4547", // Corrected to camelCase
    color: "white",
    textAlign: "center", // Centers text horizontally
    display: "flex", // Enables flexbox
    justifyContent: "center", // Centers content horizontally
    alignItems: "center", // Centers content vertically
    padding: "30px",
    position: "relative",
    bottom: "0",
    width: "100%",
    height: "60px", // Optional: Ensures consistent height
  },
};