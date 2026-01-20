import { useState } from "react";
import Wheel from "./Wheel";
import ResultModal from "./ResultModal";
import { prizes } from "../data/prizes";
import { Loader2 } from "lucide-react";

export default function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (spinning) return;

    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const degreePerPrize = 360 / prizes.length;
    
    // Thêm vòng quay (5 vòng * 360 độ) và trừ đi góc quay để mũi tên chỉ đúng điểm
    // Ta lấy (360 - góc của phần tử đó) để kim chỉ vào đúng vị trí trên cùng
    const extraRounds = 360 * 8; 
    const currentRotation = rotation - (rotation % 360); // Reset góc về mốc 0 cũ
    const targetRotation = currentRotation + extraRounds + (360 - (prizeIndex * degreePerPrize));

    setSpinning(true);
    setRotation(targetRotation);

    setTimeout(() => {
      setResult(prizes[prizeIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="min-h-125 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center w-full max-w-md border border-white/50">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight italic uppercase">
            Grabbing <span className="text-indigo-600">Deals</span>
          </h1>
          <p className="text-gray-500 text-sm font-medium mt-1">Spin to win, try your luck now!!</p>
        </div>

        <Wheel rotation={rotation} />

        <button
          onClick={spinWheel}
          disabled={spinning}
          className={`mt-10 w-full py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
            ${spinning 
              ? "bg-gray-300 cursor-not-allowed" 
              : "bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-100 hover:-translate-y-1 active:translate-y-0"
            }`}
        >
          {spinning ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Spinning...
            </>
          ) : (
            "Start Spinning"
          )}
        </button>
        {result && (
          <ResultModal
            result={result}
            onClose={() => setResult(null)}
          />
        )}
      </div>
    </div>
  );
}