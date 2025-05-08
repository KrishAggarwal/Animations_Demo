import { motion } from "framer-motion";

type FadeInAnimationProps = {
  direction: "fadeInLeft" | "fadeInRight" | "fadeInUp" | "fadeInDown" | string;
  children: React.ReactNode;
  className?: string;
};

const FadeInAnimation = ({
  direction,
  children,
  className = "",
}: FadeInAnimationProps) => {
  let animationProps = {};

  switch (direction) {
    case "fadeInLeft":
      animationProps = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      };
      break;
    case "fadeInRight":
      animationProps = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
      };
      break;
    case "fadeInUp":
      animationProps = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
      };
      break;
    case "fadeInDown":
      animationProps = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
      };
      break;
    default:
      animationProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
      break;
  }

  return (
    <motion.div
      {...animationProps}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
