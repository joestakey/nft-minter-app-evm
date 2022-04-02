import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useViewanimation = () => {
    // By default, Framer Motion runs animations once the page loads. 
  // useAnimation hook gives you more control over when the animation begins and ends (.start, .stop)
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  //define the animation
  const variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      originX: 0.5,
      originY: "0px",
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return {controls, variants, ref}
}