import "./App.css";
// import Iphone15Pro from "./components/magicui/iphone-15-pro";
import WarpOverlay from "./components/ui/iphone-wrapper";
// import { CardStack } from "./components/ui/card-stack";
// import { ExpandableCardDemo } from "./components/ui/expandable-card";
import { StackedExpandableCards } from "./components/ui/merged";
import { jobListings } from "./constant";
// import FadeInAnimation from "./components/ui/FadeInAnimation";
import { motion } from "framer-motion";
// import CardStack from "./components/ui/card-stack2";

function App() {
  return (
    <div className="flex justify-center items-center">
      {/* <Iphone15Pro/> */}
      <WarpOverlay>
        <div className="flex flex-col w-full p-8 flex-[1] overflow-auto no-scrollbar">
          {/* <CardStack /> */}
          {/* <ExpandableCardDemo /> */}
          <motion.div
            className="text-black mt-4 text-3xl font-semibold"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Product
            <br />
            Designer
            <br />
            Vacancies
          </motion.div>
        </div>
        <StackedExpandableCards items={jobListings} />
      </WarpOverlay>
    </div>
  );
}

export default App;
