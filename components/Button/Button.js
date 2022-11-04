export default function Button({ children, ...props }) {
  return (
    <button
      className="w-full px-4 py-2 bg-cyan-500 rounded-xl mt-4 text-white text-lg font-medium hover:bg-cyan-600 transition"
      {...props}
    >
      {children}
    </button>
  );
}
