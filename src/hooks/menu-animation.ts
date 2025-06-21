import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const useMenuAnimation = (open: boolean) => {
  const mainDiv = useAnimation();
  const innerDiv = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await mainDiv.start({
        height: open ? "auto" : 0,
        transition: { duration: 0.2 },
      });

      innerDiv.start({
        width: open ? "auto" : 0,
        transition: { duration: 1, delay: 1 },
      });
    };
    sequence();
  }, [open, innerDiv, mainDiv]);
  return { mainDiv, innerDiv };
};

export default useMenuAnimation;
