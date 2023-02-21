import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title pb-2 text-[42px] lg:text-[56px]">
            404 - Page not found<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text mx-auto max-w-[390px] pb-8">
            Upsss... The page you're looking for was not found. Please check the
            URL in the address bar and try again.
          </p>
          <Link to="/" className="btn inline-flex">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
