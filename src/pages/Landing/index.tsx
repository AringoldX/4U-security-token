import Header from './Header'
import Introduction from "./Introduction";
import Concept from "./Concept";
import Roadmap from "./Roadmap";
import Launchapp from "./Launchapp";
import Integration from "./Integration";

const Landing = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Introduction />
			<Concept />
      <Roadmap />
      <Launchapp />
      <Integration />
    </div>
  );
};

export default Landing;
