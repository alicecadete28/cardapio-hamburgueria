import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  activeCategory: string;
  onCategoryChange: Dispatch<SetStateAction<string>>;
}

export function Navbar({ activeCategory, onCategoryChange }: NavbarProps) {
  const categories = [
    {
      id: "hamburger",
      name: "Hambúrger",
      shortName: "Burger",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 12H4M20 12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m16 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2m16 0a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"
          />
        </svg>
      ),
    },
    {
      id: "acompanhamentos",
      name: "Acompanhamentos",
      shortName: "Acomp.",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ),
    },
    {
      id: "sobremesas",
      name: "Sobremesas",
      shortName: "Doces",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125C3.504 22.5 3 21.996 3 21.375v-5.169c0-1.08.768-2.014 1.837-2.175A47.921 47.921 0 016 13.125M12.75 3.375a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      id: "bebidas",
      name: "Bebidas",
      shortName: "Bebidas",
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="w-full bg-gradient-to-b from-white to-gray-50 shadow-lg mb-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-1 md:py-2">
        <ul className="flex justify-between md:justify-center items-center md:space-x-16">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategoryChange(category.id)}
                className={`flex flex-col items-center px-2 md:px-8 py-2 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-red-50 text-red-500 shadow-md"
                    : "text-gray-600 hover:bg-gray-50 hover:text-red-500"
                }`}
              >
                {category.icon}
                <span className="text-xs md:text-base font-medium">
                  {window.innerWidth <= 768
                    ? category.shortName
                    : category.name}
                </span>
                {activeCategory === category.id && (
                  <div className="h-1 w-8 md:w-12 bg-red-500 rounded-full mt-1 md:mt-2 animate-pulse" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
