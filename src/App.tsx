import "./App.css";
import Iphone15Pro from "./components/magicui/iphone-15-pro";
import WarpOverlay from "./components/ui/iphone-wrapper";
import { CardStack } from "./components/ui/card-stack";
import { ExpandableCardDemo } from "./components/ui/expandable-card";
import { StackedExpandableCards } from "./components/ui/merged";
import { cards, cards2 } from "./constant";
// import CardStack from "./components/ui/card-stack2";

function App() {
  return (
    <div className="flex justify-center items-center">
      {/* <Iphone15Pro/> */}
      <WarpOverlay>
        <div className="h-full flex items-center justify-center w-full">
          {/* <CardStack /> */}
          {/* <ExpandableCardDemo /> */}
          <StackedExpandableCards items={cards2}/>
        </div>
      </WarpOverlay>
    </div>
  );
}

export default App;
