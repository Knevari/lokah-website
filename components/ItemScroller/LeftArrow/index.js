import { AiOutlineArrowLeft } from "react-icons/ai";

export default function LeftArrow({ onClick, isDisabled }) {
  return (
    <div className="arrow -translate-x-1/2 left-0 " onClick={onClick}>
      <AiOutlineArrowLeft className="text-lg md:text-xl text-cyan-200" />
    </div>
  );
}
