import { heroContent } from "../data/data";

const Intro = () => {
  return (
    <section id="home" className="py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold text-lime-400 md:text-base">
            {heroContent.tag}
          </p>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-lime-400 px-6 py-3 font-semibold text-black"
            >
              {heroContent.primaryButton}
            </a>

            <a
              href="#pricing"
              className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white"
            >
              {heroContent.secondaryButton}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroContent.image}
            alt="Fitness training"
            className="w-full max-w-md rounded-[2rem] object-cover md:h-[460px] md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;