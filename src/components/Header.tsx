import { FaMotorcycle } from "react-icons/fa";

export function Header() {
  return (
    <header className="relative w-full h-[300px] md:h-[420px] bg-gradient-to-br from-zinc-900 via-red-900 to-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
        {/* Círculo decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-red-600/20 blur-3xl animate-pulse"></div>

        {/* Logo/Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider relative">
          <span className="text-red-500">Red</span> Burger
        </h1>

        {/* Subtítulo/Endereço */}
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <p className="text-gray-300 text-sm md:text-base font-light tracking-wide">
            Rua dev sucesso, 12, Campo Grande, MS
          </p>

          {/* Horário de Funcionamento */}
          <div className="px-6 py-2 rounded-full bg-red-500/10 backdrop-blur-sm border border-red-500/20">
            <p className="text-white text-sm md:text-base font-medium">
              Seg a Dom • 18h às 22h
            </p>
          </div>
        </div>

        {/* Badges decorativos */}
        <div className="flex gap-4 mt-6">
          <span className="px-4 py-1 bg-white/10 rounded-full text-xs md:text-sm text-white backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <FaMotorcycle className="w-4 h-4" />
              Delivery
            </span>
          </span>
          <span className="px-4 py-1 bg-white/10 rounded-full text-xs md:text-sm text-white backdrop-blur-sm">
            Artesanal
          </span>
          <span className="px-4 py-1 bg-white/10 rounded-full text-xs md:text-sm text-white backdrop-blur-sm">
            Premium
          </span>
        </div>
      </div>
    </header>
  );
}
