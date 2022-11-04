import { useCallback, useState, useMemo } from "react";

export default function useHorizontalScroll(
  scrollableElementRef,
  scrollDistance
) {
  const [isScrollMinimum, setIsScrollMinimum] = useState(true);
  const [isScrollMaximum, setIsScrollMaximum] = useState(false);

  const maxScrollDistance = useMemo(() => {
    if (!scrollableElementRef.current) return 0;
    const scrollableElement = scrollableElementRef.current;
    return scrollableElement.scrollWidth - scrollableElement.clientWidth;
  }, [scrollableElementRef]);

  const checkIfReachedMinOrMax = useCallback(() => {
    if (!scrollableElementRef.current) return;

    const scrollableElement = scrollableElementRef.current;

    if (scrollableElement.scrollLeft === 0) {
      setIsScrollMinimum(true);
    } else if (scrollableElement.scrollLeft === maxScrollDistance) {
      setIsScrollMaximum(true);
    } else {
      setIsScrollMinimum(false);
      setIsScrollMaximum(false);
    }
  }, [scrollableElementRef, maxScrollDistance]);

  const scrollLeft = useCallback(() => {
    if (!scrollableElementRef.current) return;

    const scrollableElement = scrollableElementRef.current;
    scrollableElement.scrollLeft -= scrollDistance;

    checkIfReachedMinOrMax();
  }, [scrollableElementRef, scrollDistance, checkIfReachedMinOrMax]);

  const scrollRight = useCallback(() => {
    if (!scrollableElementRef.current) return;

    const scrollableElement = scrollableElementRef.current;
    scrollableElement.scrollLeft += scrollDistance;

    checkIfReachedMinOrMax();
  }, [scrollableElementRef, scrollDistance, checkIfReachedMinOrMax]);

  return {
    scrollLeft,
    scrollRight,
    isScrollMinimum,
    isScrollMaximum,
  };
}
