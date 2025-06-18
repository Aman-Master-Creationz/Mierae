import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Entrance animation
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Zoom loop (starts after entrance)
const zoomLoop = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const NameBadge = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      // First fade-in, then zoom loop
      controls.start("visible").then(() => {
        controls.start(zoomLoop.animate);
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      className="mb-3"
    >
      <span className="badge_banner">
        Mr. Ravi From Andhra Pradesh
      </span>
    </motion.div>
  );
};

export default NameBadge;
