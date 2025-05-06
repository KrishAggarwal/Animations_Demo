// import React, { useState } from "react";
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// import { cn } from "@/lib/utils";

// type Card = {
//   id: number;
//   name: string;
//   designation: string;
//   content: React.ReactNode;
// };

// const CARDS: Card[] = [
//   {
//     id: 0,
//     name: "Manu Arora",
//     designation: "Senior Software Engineer",
//     content: (
//       <p>
//         These cards are amazing,{" "}
//         <span className={cn("font-bold")}>I want to use them</span> in my
//         project.
//       </p>
//     ),
//   },
//   {
//     id: 1,
//     name: "Elon Musk",
//     designation: "Senior Shitposter",
//     content: (
//       <p>
//         I don’t like this Twitter thing,{" "}
//         <span className={cn("font-bold")}>deleting it right away</span>.
//       </p>
//     ),
//   },
//   {
//     id: 2,
//     name: "Tyler Durden",
//     designation: "Manager Project Mayhem",
//     content: (
//       <p>
//         The first rule of <span className={cn("font-bold")}>Fight Club</span> is
//         you do not talk about fight club.
//       </p>
//     ),
//   },
// ];

// const DRAG_THRESHOLD = -100;
// const CARD_WIDTH = 240;
// const CARD_HEIGHT = 160;
// const OVERLAP = 100;

// export const CardStack: React.FC<{ items?: Card[] }> = ({ items = CARDS }) => {
//   const [expandedId, setExpandedId] = useState<number | null>(null);

//   return (
//     <LayoutGroup>
//       {/* Collapsed scrolling stack */}
//       <div className="fixed inset-x-0 bottom-0 h-[200px] overflow-x-auto pointer-events-auto">
//         <div
//           className="flex items-end h-full relative"
//           style={{
//             width: items.length * (CARD_WIDTH - OVERLAP) + OVERLAP,
//           }}
//         >
//           {items.map((card, idx) => {
//             if (expandedId === card.id) return null;
//             return (
//               <motion.div
//                 key={card.id}
//                 layoutId={`card-${card.id}`}
//                 initial={false}
//                 animate={{
//                   width: CARD_WIDTH,
//                   height: CARD_HEIGHT,
//                   borderRadius: 16,
//                   x: idx * (CARD_WIDTH - OVERLAP),
//                   y: 0,
//                   zIndex: idx,
//                 }}
//                 transition={{ layout: { duration: 0.4, type: "spring" } }}
//                 className="absolute shadow-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-700 p-4 flex flex-col cursor-grab"
//                 drag="y"
//                 dragConstraints={{ top: DRAG_THRESHOLD, bottom: 0 }}
//                 dragElastic={0.3}
//                 onDragEnd={(_, info) => {
//                   if (info.offset.y < DRAG_THRESHOLD) setExpandedId(card.id);
//                 }}
//               >
//                 <div className="flex-1 overflow-auto">{card.content}</div>
//                 <div className="mt-4">
//                   <p className="font-medium dark:text-white">{card.name}</p>
//                   <p className="text-sm dark:text-gray-400">
//                     {card.designation}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Expanded overlay */}
//       <AnimatePresence>
//         {expandedId !== null && (
//           <motion.div
//             layoutId={`card-${expandedId}`}
//             className="fixed inset-0 z-50 bg-white dark:bg-black p-4 overflow-auto cursor-pointer"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={() => setExpandedId(null)}
//           >
//             {(() => {
//               const card = items.find((c) => c.id === expandedId)!;
//               return (
//                 <>
//                   <div className="flex-1">{card.content}</div>
//                   <div className="mt-4">
//                     <p className="font-medium dark:text-white">{card.name}</p>
//                     <p className="text-sm dark:text-gray-400">
//                       {card.designation}
//                     </p>
//                   </div>
//                 </>
//               );
//             })()}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </LayoutGroup>
//   );
// };

// "use client";
// import { useState, useId, useRef, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "@/hooks/use-outside-click";

// type Card = {
//   id: number;
//   name: string;
//   designation: string;
//   content: React.ReactNode;
// };

// export function StackedExpandableCards({ items }: { items: Card[] }) {
//   const [activeCard, setActiveCard] = useState<Card | null>(null);
//   const [hasFullyExpanded, setHasFullyExpanded] = useState(false); // Declaring state outside of map
//   const id = useId();
//   const ref = useRef(null);

//   useOutsideClick(ref, () => setActiveCard(null));

//   useEffect(() => {
//     document.body.style.overflow = activeCard ? "hidden" : "auto";
//     setHasFullyExpanded(false); // Reset when card changes
//   }, [activeCard]);

//   const offset = 100;

//   return (
//     <>
//       {/* Background overlay */}
//       <AnimatePresence>
//         {activeCard && (
//           <motion.div
//             className="fixed inset-0 bg-black/30 z-30"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           />
//         )}
//       </AnimatePresence>

//       {/* Card Stack (when collapsed) */}
//       <div className="relative w-full mx-auto mt-auto aspect-square">
//         {items.map((card, index) => {
//           const isActive = activeCard?.id === card.id;

//           return (
//             <motion.div
//               key={card.id}
//               layoutId={`card-${card.id}-${id}`}
//               ref={isActive ? ref : undefined}
//               className={`cursor-pointer rounded-2xl shadow-md text-white p-4 bg-white dark:bg-zinc-900 w-full h-full border border-[red] ${
//                 isActive ? "z-40 fixed top-0 left-0" : "absolute"
//               }`}
//               style={{
//                 left: isActive ? 0 : index * offset,
//                 zIndex: isActive ? 40 : index,
//               }}
//               drag={!isActive ? "y" : false}
//               dragConstraints={{ top: 0, bottom: 0 }}
//               dragElastic={0.3}
//               onDragEnd={(event, info) => {
//                 if (info.offset.y < -100 && !isActive) {
//                   setActiveCard(card);
//                 }
//               }}
//               onAnimationComplete={() => {
//                 if (isActive) {
//                   setHasFullyExpanded(true);
//                 }
//               }}
//             >
//               <motion.div layoutId={`content-${card.id}-${id}`}>
//                 <h3 className="text-lg font-semibold">{card.name}</h3>
//                 <p className="text-sm text-gray-500">{card.designation}</p>
//               </motion.div>

//               {isActive && hasFullyExpanded && (
//                 <motion.div
//                   className="mt-4 text-sm text-gray-700 dark:text-white"
//                   layoutId={`details-${card.id}-${id}`}
//                 >
//                   {card.content}
//                   <button
//                     onClick={() => setActiveCard(null)}
//                     className="absolute top-3 right-3 rounded-full bg-white shadow px-2 py-1 text-black"
//                   >
//                     ✕
//                   </button>
//                 </motion.div>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

/////////////////////////////Expandable Stacked Cards///////////////////////////////////

"use client";
import { useState, useId, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import FadeInAnimation from "./FadeInAnimation";
import HorizontalScroll from "./HorizontalScroll";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export function StackedExpandableCards({ items }: { items: Card[] }) {
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [hasFullyExpanded, setHasFullyExpanded] = useState(false);
  const id = useId();
  const ref = useRef(null);

  useOutsideClick(ref, () => setActiveCard(null));

  useEffect(() => {
    document.body.style.overflow = activeCard ? "hidden" : "auto";
    setHasFullyExpanded(false); // Reset when card changes
  }, [activeCard]);

  const offset = 100;

  return (
    <>
      {/* Background overlay */}
      {/* <AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence> */}

      {/* Card Stack (when collapsed) */}
      <HorizontalScroll className="mt-auto ">
        <div className="relative w-full mx-auto aspect-square">
          {items.map((card, index) => {
            const isActive = activeCard?.id === card.id;

            return (
              <motion.div
                key={card.id}
                layoutId={`card-${card.id}-${id}`}
                ref={isActive ? ref : undefined}
                className={`cursor-pointer rounded-2xl shadow-md text-white p-4 bg-white dark:bg-zinc-900 w-full h-full border border-[red] whitespace-normal ${
                  isActive ? "z-40 fixed top-0 left-0" : "absolute"
                }`}
                style={{
                  left: isActive ? 0 : index * offset,
                  zIndex: isActive ? 40 : index,
                }}
                drag={!isActive ? "y" : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.3}
                onDragEnd={(event, info) => {
                  if (info.offset.y < -100 && !isActive) {
                    setActiveCard(card);
                  }
                }}
                animate={{
                  y: isActive ? 0 : undefined,
                  opacity: isActive ? 1 : undefined,
                  transition: { duration: 0.5 },
                }}
                onAnimationComplete={() => {
                  if (isActive) {
                    setHasFullyExpanded(true); // Trigger when the card finishes expanding
                  }
                }}
              >
                <motion.div layoutId={`content-${card.id}-${id}`}>
                  <h3 className="text-lg font-semibold">{card.name}</h3>
                  <p className="text-sm text-gray-500">{card.designation}</p>
                </motion.div>

                {isActive && hasFullyExpanded && (
                  <>
                    <button
                      onClick={() => setActiveCard(null)}
                      className="absolute top-3 right-3 rounded-full bg-white shadow px-2 py-1 text-black"
                    >
                      ✕
                    </button>
                    <FadeInAnimation direction="fadeInDown">
                      <motion.div
                        className="mt-4 text-sm text-gray-700 dark:text-white"
                        layoutId={`details-${card.id}-${id}`}
                      >
                        {card.content}
                      </motion.div>
                    </FadeInAnimation>
                    <FadeInAnimation direction="fadeInRight">
                      <motion.div
                        className="mt-4 text-sm text-gray-700 dark:text-white"
                        layoutId={`details-${card.id}-${id}`}
                      >
                        {card.content}
                      </motion.div>
                    </FadeInAnimation>
                    <FadeInAnimation direction="fadeInLeft">
                      <motion.div
                        className="mt-4 text-sm text-gray-700 dark:text-white"
                        layoutId={`details-${card.id}-${id}`}
                      >
                        {card.content}
                      </motion.div>
                    </FadeInAnimation>
                    <FadeInAnimation direction="fadeInUp">
                      <motion.div
                        className="mt-4 text-sm text-gray-700 dark:text-white"
                        layoutId={`details-${card.id}-${id}`}
                      >
                        {card.content}
                      </motion.div>
                    </FadeInAnimation>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </HorizontalScroll>
    </>
  );
}
