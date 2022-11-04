import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Imóveis, automóveis, eletrodomésticos..."
        className="w-full h-9 md:h-16 mt-2 px-6 rounded-3xl border-2 border-gray-50 outline-none shadow-cyan-200 shadow-sm font-light md:font-medium text-sm md:text-lg"
      />
      <AiOutlineSearch className="text-cyan-500 absolute text-xl md:text-2xl right-4 top-1/2 -translate-y-1/4" />
    </div>
  );
}
