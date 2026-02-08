import { LiquidOcean } from "@/components/ui/liquid-ocean"
import Navbar from "./Navbar";

// Basic usage - exact original appearance
export function LiquidBackground() {
return (
  <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden pointer-events-none">
    <LiquidOcean oceanFragments={30} boatCount={8} boatSpread={8} waveAmplitude={0.15} showGrid={false} className="absolute inset-0 w-full h-full">
        
        <div className="mx-[200px] text-white">
            <Navbar />
        </div>

        
    </LiquidOcean>
  </div>
);
}

