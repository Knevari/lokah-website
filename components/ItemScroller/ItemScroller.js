import { useRef } from "react";
import ItemCard from "components/ItemCard";
import useHorizontalScroll from "hooks/useHorizontalScroll";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

export default function ItemScroller({ name, items, scrollDistance = 500 }) {
  const scrollableElementRef = useRef();

  const { scrollLeft, scrollRight, isScrollMinimum, isScrollMaximum } =
    useHorizontalScroll(scrollableElementRef, scrollDistance);

  return (
    <>
      <h3 className="text-cyan-600 text-lg md:text-2xl font-medium">{name}</h3>
      <div className="relative">
        <LeftArrow onClick={scrollLeft} isDisabled={isScrollMinimum} />
        <div
          ref={scrollableElementRef}
          className="flex gap-7 py-4 md:my-5 items-start w-full h-full overflow-x-scroll scroll scroll-smooth scrollbar-hide"
        >
          {items.map(({ id, thumbnail, name, price }) => (
            <ItemCard
              key={id}
              thumbnail={thumbnail}
              name={name}
              price={price}
            />
          ))}
        </div>
        <RightArrow onClick={scrollRight} isDisabled={isScrollMaximum} />
      </div>
    </>
  );
}
