import React from "react";

const Hero = () => {
  return (
    <section className="section relative pt-40">
      <div className="container">
        <div className="grid gap-6 text-center">
          <h1 className="section-title text-[48px]">
            Find your favorite movies <span className="text-blue-600">.</span>
          </h1>
          <form className="grid gap-2">
            <input
              type="text"
              placeholder="Search a movie, tv show, or more..."
              className="flex h-[52px] w-full bg-gray-800 text-center font-title font-semibold text-white outline-none placeholder:font-sans placeholder:font-medium placeholder:-tracking-tighter placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="btn w-full"
              onClick={(e) => e.preventDefault()}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
