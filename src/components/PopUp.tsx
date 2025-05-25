import { Dialog } from "./ui/dialog";

interface PopUpProps {
  onClose: () => void;
  title: string;
  description: string;
}

export function PopUp({ onClose, title, description }: PopUpProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="animate-slide-up bg-white rounded-lg shadow-xl p-6 mx-4 max-w-sm w-full transform transition-all">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-center mb-4">{description}</p>
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
