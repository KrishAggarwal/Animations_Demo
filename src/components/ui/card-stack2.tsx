// import React, { useState } from "react";
// import { motion, LayoutGroup, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

// interface Card {
//   id: number;
//   color: string;
// }

// const colors = [
//   "#F87171", // Red
//   "#60A5FA", // Blue
//   "#34D399", // Green
//   "#FBBF24", // Yellow
//   "#A78BFA", // Purple
//   "#F472B6", // Pink
//   "#38BDF8", // Light Blue
//   "#FB923C", // Orange
// ];

// const cardsData: Card[] = Array.from({ length: 8 }).map((_, idx) => ({
//   id: idx,
//   color: colors[idx % colors.length],
// }));

// // Threshold for triggering full expansion
// const DRAG_THRESHOLD = -80;

// const CardStack: React.FC = () => {
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   return (
//     <LayoutGroup>
//       {/* Collapsed Stack at Bottom */}
//       <div className="fixed bottom-0 inset-x-0 h-48 cursor-grab px-8">
//         <div className="relative h-full w-max flex items-end gap-[-4rem]">
//           {cardsData.map((card) => {
//             // motion values for drag
//             const y = useMotionValue(0);
//             // interpolate size and border radius based on drag y
//             const height = useTransform(y, [0, DRAG_THRESHOLD], [160, window.innerHeight]);
//             const width = useTransform(y, [0, DRAG_THRESHOLD], [256, window.innerWidth]);
//             const borderRadius = useTransform(y, [0, DRAG_THRESHOLD], [16, 0]);

//             return (
//               <motion.div
//                 key={card.id}
//                 layoutId={`card-${card.id}`}
//                 className="absolute bottom-0 rounded-xl shadow-lg flex-shrink-0"
//                 style={{
//                   backgroundColor: card.color,
//                   y,
//                   height,
//                   width,
//                   borderRadius,
//                 }}
//                 drag="y"
//                 dragConstraints={{ top: -window.innerHeight, bottom: 0 }}
//                 dragElastic={0.2}
//                 onDrag={(e, info) => {
//                   if (info.offset.y < DRAG_THRESHOLD && selectedId === null) {
//                     setSelectedId(card.id);
//                   }
//                 }}
//                 onDragEnd={() => {
//                   if (selectedId === null) {
//                     // reset if not expanded
//                     y.set(0);
//                   }
//                 }}
//               />
//             );
//           })}
//         </div>
//       </div>

//       {/* Expanded Overlay */}
//       <AnimatePresence>
//         {selectedId !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedId(null)}
//           >
//             <motion.div
//               layoutId={`card-${selectedId}`}
//               className="w-full h-full overflow-auto"
//               style={{ backgroundColor: cardsData.find(c => c.id === selectedId)?.color }}
//               initial={{ borderRadius: 16 }}
//               animate={{ borderRadius: 0 }}
//               exit={{ borderRadius: 16 }}
//               onClick={(e) => e.stopPropagation()}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </LayoutGroup>
//   );
// };

// export default CardStack;


import React, { useState } from "react";
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface Card {
  id: number;
  color: string;
}

const colors = [
  "#F87171", // Red
  "#60A5FA", // Blue
  "#34D399", // Green
  "#FBBF24", // Yellow
  "#A78BFA", // Purple
  "#F472B6", // Pink
  "#38BDF8", // Light Blue
  "#FB923C", // Orange
];

const cardsData: Card[] = Array.from({ length: 8 }).map((_, idx) => ({
  id: idx,
  color: colors[idx % colors.length],
}));

// Small drag to expand fully
const DRAG_THRESHOLD = -80;
const MIN_HEIGHT = 160;
const MIN_WIDTH = 256;

const CardStack: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <LayoutGroup>
      {/* Collapsed Stack */}
      <div className="fixed bottom-0 inset-x-0 h-48 overflow-x-auto cursor-grab px-8">
        <div className="relative h-full w-max flex items-end gap-[-4rem]">
          {cardsData.map((card) => {
            const y = useMotionValue(0);
            const height = useTransform(
              y,
              [0, DRAG_THRESHOLD],
              [MIN_HEIGHT, window.innerHeight],
              { clamp: true }
            );
            const width = useTransform(
              y,
              [0, DRAG_THRESHOLD],
              [MIN_WIDTH, window.innerWidth],
              { clamp: true }
            );
            const borderRadius = useTransform(
              y,
              [0, DRAG_THRESHOLD],
              [16, 0],
              { clamp: true }
            );

            return (
              <motion.div
                key={card.id}
                layoutId={`card-${card.id}`}
                className="absolute bottom-0 rounded-xl shadow-lg"
                style={{
                  backgroundColor: card.color,
                  y,
                  height,
                  width,
                  borderRadius,
                }}
                drag="y"
                dragConstraints={{ top: DRAG_THRESHOLD, bottom: 0 }}
                dragElastic={0}
                onDragEnd={(_, info) => {
                  if (info.offset.y < DRAG_THRESHOLD) {
                    setSelectedId(card.id);
                  } else {
                    y.set(0);
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Expanded Overlay */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              transition={{ layout: { duration: 0.5, ease: "easeOut" } }}
              className="relative w-full h-full"
              style={{
                backgroundColor:
                  cardsData.find((c) => c.id === selectedId)?.color,
              }}
              initial={{ borderRadius: 16 }}
              animate={{ borderRadius: 0 }}
              exit={{ borderRadius: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Collapse Button */}
              <button
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-gray-800 px-4 py-2 rounded-full shadow-md"
                onClick={() => setSelectedId(null)}
              >
                Close
              </button>
              {/* Content of expanded card can go here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default CardStack;
