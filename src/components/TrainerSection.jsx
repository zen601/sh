import { trainers } from "../data/data";

const TrainerSection = () => {
  return (
    <section id="trainers" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Meet Our Trainers
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-lg">
            Learn from experienced and motivating coaches
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#071225]"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-[260px] w-full object-cover md:h-[320px]"
              />

              <div className="bg-[#030b1c] px-5 py-5">
                <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                <p className="mt-2 text-lime-400">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;