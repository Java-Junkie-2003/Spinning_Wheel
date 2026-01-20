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

export default function Wheel({ rotation }) {
  const degreePerPrize = 360 / prizes.length; 

  return (
    <div className="relative w-80 h-80 mx-auto">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <div 
          className="w-8 h-10 bg-red-500 shadow-lg" 
          style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} 
        />
      </div>

      <div
        className="w-full h-full rounded-full border-10 border-yellow-400 shadow-[0_0_30px_rgba(0,0,0,0.15)]
        transition-transform duration-2000 cubic-bezier(0.2, 0, 0, 1) relative overflow-hidden"
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
              className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 origin-bottom flex flex-col items-center pt-8"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <span className="text-sm font-black text-white drop-shadow-md mb-2">
                {prize.label}
              </span>
              
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <IconTag className="w-6 h-6 text-white" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-yellow-400 shadow-xl z-10 flex items-center justify-center">
        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
      </div>
    </div>
  );
}