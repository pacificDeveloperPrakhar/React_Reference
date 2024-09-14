import { useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";

function Component() {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate(); // Only using useAnimate now

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        // Animate the parent `ul` element
        await animate(scope.current, { opacity: 1 }, { duration: 0.5 });
        // Animate the list items
        await animate("li", { opacity: 1, x: 0 }, { scope: scope.current, delay: 0.1, stagger: 0.1 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        // Animate list items on exit
        await animate("li", { opacity: 0, x: -100 }, { scope: scope.current, stagger: 0.1 });
        // Animate the parent `ul` element
        await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
        safeToRemove(); // Remove the element after the animation
      };
      exitAnimation();
    }
  }, [isPresent, animate, scope, safeToRemove]);

  return (
    <ul ref={scope} style={{ opacity: 0 }}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

export default Component;
