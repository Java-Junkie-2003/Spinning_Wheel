import { PartyPopper, X } from "lucide-react";
import { createPortal } from "react-dom";

export default function ResultModal({ result, onClose }) {
  const modalContent = (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-100 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 w-full max-w-sm text-center relative shadow-2xl transform animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>

        <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <PartyPopper className="w-10 h-10 text-yellow-600" />
        </div>

        <h2 className="text-2xl font-black text-gray-800 mb-2">Great!</h2>
        <p className="text-gray-600 mb-6">
          You won 
          <span className="text-indigo-600 font-bold text-xl uppercase">{" " + result.label}</span>
        </p>

        <button
          onClick={onClose}
          className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 active:scale-95 transition-all"
        >
          Get it
        </button>
      </div>
    </div>
  );
  return createPortal(modalContent, document.body);
}   