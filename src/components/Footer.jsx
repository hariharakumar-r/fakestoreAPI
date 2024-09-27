import React from "react";

const Footer = () => {
  return (
    // returns the footer with the textcontent, nothing else:
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
        <p className="text-center text-white">
          Copyright &copy; Ecommerce Shop 2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
