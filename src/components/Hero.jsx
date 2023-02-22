import React from "react";

const Hero = () => {
  return (
    <section className="section relative pt-40 xl:pt-48">
      {/* gradient */}
      <div className="absolute -top-[60px] -left-[150px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-purple-600 to-pink-400 blur-[120px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />

      <div className="container relative">
        <div className="grid gap-8">
          <div className="text-center">
            <h1 className="section-title pb-3 text-[42px] lg:text-[56px]">
              Find your favorite movies <span className="text-blue-600">.</span>
            </h1>
            <p className="section-text mx-auto max-w-[310px]">
              Millions of Movies, TV Show, and People to discover. Explore now.
            </p>
          </div>

          <form className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-self-center">
            <input
              type="text"
              placeholder="Search a movie, tv show, or more..."
              className="flex h-[52px] w-full bg-gray-800 px-4 text-center font-title font-semibold text-white outline-none placeholder:font-sans placeholder:font-medium placeholder:-tracking-tighter placeholder:text-gray-400 sm:w-[350px] sm:text-left lg:w-[450px]"
            />
            <button
              type="submit"
              className="btn"
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
