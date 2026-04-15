import { footerItems } from "../data/data";

const BottomFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020817] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h3 className="text-2xl font-extrabold text-lime-400">FitZone</h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerItems.map((item) => (
              <a key={item} href="#" className="text-sm text-slate-400 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;