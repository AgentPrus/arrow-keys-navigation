import { useMemo, useState } from "react";

import { useKeyPressEvent } from "react-use";

const useRoveFocus = (size: number) => {
  const [currentFocus, setCurrentFocus] = useState(0);
  console.log(currentFocus);

  useKeyPressEvent("ArrowDown", () =>
    setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
  );
  useKeyPressEvent("ArrowUp", () =>
    setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
  );

  return useMemo(
    () => [currentFocus, setCurrentFocus] as const,
    [currentFocus]
  );
};

export default useRoveFocus;
