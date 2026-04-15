import Topbar from "../components/Topbar";
import Intro from "../components/Intro";
import ProgramList from "../components/ProgramList";
import TrainerSection from "../components/TrainerSection";
import BottomFooter from "../components/BottomFooter";

const FitnessPage = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Topbar />

      <main>
        <Intro />
        <ProgramList />
        <TrainerSection />
      </main>

      <BottomFooter />
    </div>
  );
};

export default FitnessPage;