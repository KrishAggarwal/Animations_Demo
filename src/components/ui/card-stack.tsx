import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const CARDS: Card[] = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing,{" "}
        <span className={cn("font-bold")}>I want to use them</span> in my
        project.
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I don’t like this Twitter thing,{" "}
        <span className={cn("font-bold")}>deleting it right away</span>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of <span className={cn("font-bold")}>Fight Club</span> is
        you do not talk about fight club.
      </p>
    ),
  },
];

const DRAG_THRESHOLD = -100;
const CARD_WIDTH = 240;
const CARD_HEIGHT = 160;
const OVERLAP = 100;

export const CardStack: React.FC<{ items?: Card[] }> = ({ items = CARDS }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <LayoutGroup>
      {/* Collapsed scrolling stack */}
      <div className="fixed inset-x-0 bottom-0 h-[200px] overflow-x-auto pointer-events-auto">
        <div
          className="flex items-end h-full relative"
          style={{
            width: items.length * (CARD_WIDTH - OVERLAP) + OVERLAP,
          }}
        >
          {items.map((card, idx) => {
            if (expandedId === card.id) return null;
            return (
              <motion.div
                key={card.id}
                layoutId={`card-${card.id}`}
                initial={false}
                animate={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  borderRadius: 16,
                  x: idx * (CARD_WIDTH - OVERLAP),
                  y: 0,
                  zIndex: idx,
                }}
                transition={{ layout: { duration: 0.4, type: "spring" } }}
                className="absolute shadow-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-700 p-4 flex flex-col cursor-grab"
                drag="y"
                dragConstraints={{ top: DRAG_THRESHOLD, bottom: 0 }}
                dragElastic={0.3}
                onDragEnd={(_, info) => {
                  if (info.offset.y < DRAG_THRESHOLD) setExpandedId(card.id);
                }}
              >
                <div className="flex-1 overflow-auto">{card.content}</div>
                <div className="mt-4">
                  <p className="font-medium dark:text-white">{card.name}</p>
                  <p className="text-sm dark:text-gray-400">
                    {card.designation}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {expandedId !== null && (
          <motion.div
            layoutId={`card-${expandedId}`}
            className="fixed inset-0 z-50 bg-white dark:bg-black p-4 overflow-auto cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpandedId(null)}
          >
            {(() => {
              const card = items.find((c) => c.id === expandedId)!;
              return (
                <>
                  <div className="flex-1">{card.content}</div>
                  <div className="mt-4">
                    <p className="font-medium dark:text-white">{card.name}</p>
                    <p className="text-sm dark:text-gray-400">
                      {card.designation}
                    </p>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};
