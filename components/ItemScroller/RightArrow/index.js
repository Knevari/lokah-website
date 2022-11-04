import { AiOutlineArrowRight } from "react-icons/ai";

export default function RightArrow({ onClick, isDisabled }) {
  return (
    <div className="right-0 translate-x-1/2 arrow" onClick={onClick}>
      <AiOutlineArrowRight className="text-lg md:text-xl text-cyan-200" />
    </div>
  );
}
