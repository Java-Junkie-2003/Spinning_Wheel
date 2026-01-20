import { useState } from 'react';
import { Gift, X } from 'lucide-react';
import './App.css'
import SpinWheel from './components/SpinWheel';
function App() {
  const [showWheel, setShowWheel] = useState(false);
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')`,
          filter: 'blur(8px) brightness(0.7)'
        }}
      />

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/30 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/30 rounded-full blur-[120px] z-0" />

      {!showWheel && (
        <button
          onClick={() => setShowWheel(true)}
          className="group relative z-10 flex flex-col items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md p-8 rounded-4xl border border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
        >
          <div className="bg-indigo-600 p-4 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <div className="text-center">
            <span className="block text-black text-2xl font-black uppercase tracking-widest">Lucky Wheel</span>
            <span className="text-blue-700 text-sm font-medium">Nhấn để nhận quà ngay!</span>
          </div>
        </button>
      )}

      {showWheel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative z-10 w-full max-w-lg p-4 animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowWheel(false)}
              className="absolute top-8 right-8 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
               <X className="w-6 h-6 text-black" />
            </button>

            <SpinWheel />
          </div>
        </div>
      )}
    </div>
  );
}

export default App
