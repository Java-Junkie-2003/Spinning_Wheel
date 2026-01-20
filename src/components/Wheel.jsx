import { 
  Percent, 
  Truck, 
  RotateCcw, 
  Star 
} from "lucide-react";
import { prizes } from "../data/prizes"; 

const getPrizeIcon = (prize) => {
  if (prize.label.includes("OFF")) return Percent;
  if (prize.label === "Free Ship") return Truck;
  if (prize.label === "Try Again") return RotateCcw;
  return Star;
};

function Wheel({ rotation }) {
  const degreePerPrize = 360 / prizes.length;

  return (
    <div className="relative w-full aspect-square mx-auto max-w-[90vw] md:max-w-sm">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div 
          className="w-6 h-8 sm:w-8 sm:h-10 bg-red-500 shadow-lg" 
          style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} 
        />
      </div>

      <div
        className="w-full h-full rounded-full border-8 sm:border-10 border-yellow-400 shadow-[0_0_30px_rgba(0,0,0,0.15)]
        transition-transform duration-4000 cubic-bezier(0.2, 0, 0, 1) relative overflow-hidden"
        style={{ 
          transform: `rotate(${rotation}deg)`,
          background: `conic-gradient(from -${degreePerPrize / 2}deg, 
            #ef4444 0deg 60deg, #f97316 60deg 120deg, 
            #eab308 120deg 180deg, #22c55e 180deg 240deg, 
            #06b6d4 240deg 300deg, #6366f1 300deg 360deg
          )`
        }}
      >
        {prizes.map((prize, i) => {
          const IconTag = getPrizeIcon(prize);
          const angle = i * degreePerPrize;
          
          return (
            <div 
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 origin-bottom flex flex-col items-center justify-start"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md mt-4 sm:mt-6 text-center px-2 leading-tight">
                {prize.label}
              </span>
              
              <div className="bg-white/20 p-1.5 sm:p-2 rounded-full backdrop-blur-sm mt-1 sm:mt-2">
                <IconTag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border-3 sm:border-4 border-yellow-400 shadow-xl z-10 flex items-center justify-center">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

export default Wheel;