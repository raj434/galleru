import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white/30 backdrop-blur-sm text-black py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pintrate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
