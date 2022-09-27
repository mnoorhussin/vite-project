import React from "react";

function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Mustafa Noorhussin
      </a>
      <a
        href="mailto:hi@muste.io"
        className="text-sm md:text-md hover:text-indigo-500"
      >
        hi@muste.io
      </a>
      <p className="text-xs mt-2 text-gray-500">
        {new Date().getFullYear()}. All rights reserved ©
      </p>
    </div>
  );
}

export default Footer;
