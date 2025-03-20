import FeaturedAssistant from "../_components/FeaturedAssistant";
import Feedback from "../_components/feedback";
import History from "../_components/history";

export default function Dashboard() {
  return (
    <>
      <div>
        <FeaturedAssistant />

        <div className="grid grid-cols-1 md:grid-cols-2 justify-around gap-8">
          <History />
          <Feedback />
        </div>
      </div>
    </>
  );
}
