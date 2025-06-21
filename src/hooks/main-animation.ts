import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router";

const useMainAnimation = () => {
  const firstDivControls = useAnimation();
  const secondDivControls = useAnimation();
  const thirdDivControls = useAnimation();
  const { pathname } = useLocation();

  useEffect(() => {
    const reset = () => {
      firstDivControls.set({ height: 0, opacity: 1 });
      secondDivControls.set({ marginLeft: 0 });
      thirdDivControls.set({ marginRight: 0 });
    };
    const sequence = async () => {
      reset();
      await firstDivControls.start({
        opacity: 0,
        height: "100%",
        transition: { duration: 1 },
      });

      secondDivControls.start({
        marginLeft: `-100%`,
        transition: { duration: 1 },
      });
      thirdDivControls.start({
        marginRight: "-100%",
        transition: { duration: 1 },
      });
    };
    sequence();
  }, [firstDivControls, secondDivControls, pathname, thirdDivControls]);
  return { firstDivControls, secondDivControls, thirdDivControls, pathname };
};

export default useMainAnimation;
