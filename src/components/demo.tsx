'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useRef } from "react"
 
export function SplineSceneBasic() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const canvas = containerRef.current.querySelector('canvas');
    if (!canvas) return;
    
    // Only forward if the pointer is not already over the canvas
    if (e.target !== canvas) {
      const event = new PointerEvent('pointermove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true,
        cancelable: true,
        pointerId: e.pointerId,
        pointerType: e.pointerType,
        isPrimary: e.isPrimary,
      });
      canvas.dispatchEvent(event);
    }
  };

  return (
    <Card 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pointer-events-auto">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg pointer-events-auto">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative z-10">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
