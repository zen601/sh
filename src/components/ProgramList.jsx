import { programs } from "../data/data";

const ProgramList = () => {
  return (
    <section id="programs" className="bg-[#031020] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Our Programs
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-lg">
            Choose the workout style that matches your goals
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-[1.5rem] border border-white/10 bg-[#0b1830] p-6 md:p-8"
            >
              <div className="text-3xl">{program.icon}</div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {program.title}
              </h3>
              <p className="mt-3 text-slate-400">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramList;