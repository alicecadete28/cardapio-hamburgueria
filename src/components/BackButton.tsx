import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-6 left-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 p-3 rounded-full shadow-lg transition-all duration-200 group"
    >
      <svg
        className="w-6 h-6 text-gray-800 group-hover:-translate-x-1 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
