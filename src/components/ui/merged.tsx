"use client";
import { useState, useId, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
// import HorizontalScroll from "./HorizontalScroll";
import {
  MdAccessTime,
  MdKeyboardArrowDown,
  MdOutlineMessage,
} from "react-icons/md";

interface RecruiterInfo {
  image: string;
  name: string;
  designation: string;
  profileLink: string;
}

interface JobListing {
  id: number;
  icon: string;
  name: string;
  designation: string;
  salary: string;
  type: string; // e.g., "Full Time", "Remote", "Contract"
  submitted: string;
  primaryRequirement: string[]; // e.g., ["5+ years", "Bachelor's Degree"]
  recruiterInfo: RecruiterInfo;
  allRequirements: string[];
}

export function StackedExpandableCards({ items }: { items: JobListing[] }) {
  const [activeCard, setActiveCard] = useState<JobListing | null>(null);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const id = useId();
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setActiveCard(null);
    setIsContentVisible(false);
  });

  useEffect(() => {
    document.body.style.overflow = activeCard ? "hidden" : "auto";
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
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence> */}

      {/* Card Stack */}
      {/* <HorizontalScroll className="h-[250px]"> */}
      <div className="absolute bottom-0 left-0 w-full h-[250px]">
        {items.map((card, index) => {
          const isActive = activeCard?.id === card.id;
          return (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}-${id}`}
              ref={isActive ? ref : undefined}
              initial={false}
              className={`p-4 whitespace-normal no-scrollbar ${
                isActive
                  ? "z-40 fixed inset-0 overflow-auto"
                  : "absolute w-[200px] h-[250px] rounded-2xl cursor-grab border-white/20"
              }`}
              style={{
                backgroundColor: "#2d3436",
                backgroundImage:
                  "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
                left: isActive ? 0 : `${index * offset}px`,
                top: isActive ? 0 : `${index % 2 == 0 ? 20 : 0}px`,
                zIndex: isActive ? 40 : index,
                boxShadow: isActive
                  ? "none"
                  : `rgb(0 0 0 / 20%) 0px 0px 1px, rgb(0 0 0 / 10%) 0px 0px 40px, rgb(157 157 157 / 10%) 0px 0px 15px inset`,
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.3}
              onDragEnd={(event, info) => {
                console.log(event);
                if (info.offset.y < -100 && !isActive) {
                  setActiveCard(card);
                } else if (isActive && info.offset.y > 50) {
                  setActiveCard(null);
                }
              }}
              onLayoutAnimationComplete={() => {
                setIsContentVisible(isActive);
              }}
              transition={{
                type: "spring",
                duration: 1.2,
                bounce: 0.3,
                stiffness: 30,
                damping: 12,
                layout: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                },
              }}
            >
              {/* Card header */}
              <div
                className={`flex gap-4 relative ${
                  isActive ? "px-8 pt-12" : "px-2 py-4"
                }`}
              >
                <div className="flex max-w-[50%]  flex-col gap-1 text-white">
                  <div className="p-2 mb-4 bg-slate-950 rounded-xl w-fit">
                    <img
                      src={card.icon}
                      width={30}
                      height={30}
                      className={`${
                        isActive ? "h-[30] w-[30]" : "w-[48] h-[48]"
                      }`}
                    />
                  </div>
                  <p
                    className={`font-thin mb-2 ${
                      isActive ? "text-lg" : "text-sm"
                    }`}
                  >
                    {card.name}
                  </p>
                  <p
                    className={`font-bold mb-4 ${
                      isActive ? "text-3xl" : "text-sm"
                    }`}
                  >
                    {card.designation}
                  </p>
                  <p
                    className={`font-semibold ${
                      isActive ? "text-lg" : "text-sm"
                    }`}
                  >
                    {card.salary}
                  </p>
                </div>
                {isActive && isContentVisible && (
                  <motion.div
                    className="absolute -right-8 h-full"
                    initial={{ opacity: 0, x: 400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      opacity: { duration: 0.4, ease: "easeInOut" },
                      x: { duration: 0.4, ease: "easeOut" },
                    }}
                  >
                    <img
                      src="/images/demo-map.jpg"
                      width={200}
                      height={250}
                      className="h-full rounded-xl object-cover"
                    />
                  </motion.div>
                )}
              </div>
              {/* Card content - using isContentVisible instead of onAnimationComplete */}
              {isActive && isContentVisible && (
                <>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-opacity">
                    <div className="flex flex-col items-center cursor-grab">
                      <MdKeyboardArrowDown className="text-2xl animate-bounce" />
                      <span className="text-xs">Drag down to close</span>
                    </div>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-4 w-3/4 p-4 text-white"
                    initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      opacity: { duration: 0.4, ease: "easeInOut" },
                      x: { duration: 0.4, ease: "easeOut" },
                    }}
                  >
                    {/* Blur Card 1 */}
                    <div className="rounded-2xl bg-white/10 backdrop-blur-lg text-white px-2 py-3 shadow-md flex-1">
                      <div className="flex flex-col items-center justify-between gap-2">
                        <MdAccessTime className="text-xl" />
                        <p className="text-sm font-semibold">{card.type}</p>
                      </div>
                    </div>

                    {/* Blur Card 2 */}
                    <div className="rounded-2xl bg-white/10 backdrop-blur-lg text-white px-2 py-3 shadow-md flex-1">
                      <div className="flex flex-col items-center justify-between gap-2">
                        <p className="font-bold">{card.submitted}</p>
                        <p className="text-sm">Submitted</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap w-full p-4 text-white"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {card.primaryRequirement.map((req, index) => (
                      <div className="p-2 rounded-2xl w-1/2" key={index + 1}>
                        <p className="font-bold text-base">{req}</p>
                        <span>Required</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, x: 400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex gap-4 items-center w-full">
                      <img
                        src={card.recruiterInfo.image}
                        width={60}
                        height={60}
                        className="rounded-2xl"
                      />
                      <div>
                        <p>{card.recruiterInfo.name}</p>
                        <p>{card.recruiterInfo.designation}</p>
                      </div>
                      <div className="flex justify-center items-center bg-white rounded-2xl h-[60px] w-[60px] text-black text-2xl ms-auto">
                        <MdOutlineMessage />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="mt-4"
                    initial="hidden"
                    animate="visible"
                  >
                    <ul className="text-white list-disc px-4">
                      {card.allRequirements.map((req, index) => (
                        <motion.li
                          key={index}
                          className="text-base mb-2"
                          initial={{ opacity: 0, x: 400 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4 + index / 10 }}
                        >
                          {req}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
      {/* </HorizontalScroll> */}
    </>
  );
}
