"use client";

import { useEffect, useRef } from "react";

interface VibeBackgroundProps {
  isDark: boolean;
}

export function VibeBackground({ isDark }: VibeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Initialize the vibe animation worker
    const initAnimation = async () => {
      try {
        // Random hue value (0-360) excluding green (60-150)
        // Ranges: 0-60 (red/orange/yellow), 150-360 (blue/purple/pink/red)
        const excludeGreen = Math.random() < 0.5 
          ? Math.floor(Math.random() * 60) // 0-60: red to yellow
          : Math.floor(Math.random() * 210) + 150; // 150-360: cyan to purple to red
        const randomHue = excludeGreen;
        
        // Create offscreen canvas for the worker
        const offscreen = canvas.transferControlToOffscreen();
        
        // Load the vibeAnimation worker script
        const worker = new Worker("/vibeAnimation.js");
        
        worker.postMessage(
          {
            type: "vibe-animation-worker-init",
            payload: {
              canvas: offscreen,
              collectionHue: randomHue,
              fps: 60,
              shaderOptions: {
                transparent: false,
                antialias: true,
                canvasSize: {
                  mobileSizePx: 600,
                  desktopSizePx: 600,
                  mobileScale: 0.5,
                  desktopScale: 0.5,
                },
              },
            },
          },
          [offscreen]
        );

        // Apply initial settings
        worker.postMessage({
          type: "vibe-animation-worker-apply-settings",
          payload: {
            backgroundColor: isDark ? 0 : 1,
            energy: 0.4,
            baseScale: 1,
          },
        });

        // Start play animation
        worker.postMessage({
          type: "vibe-animation-worker-play-animation",
          payload: {
            hue: randomHue,
            collectionHue: randomHue,
            energy: 0.5,
          },
        });

        animationRef.current = worker;
      } catch (error) {
        console.error("Failed to initialize vibe animation:", error);
      }
    };

    initAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.postMessage({
          type: "vibe-animation-worker-disable",
        });
        animationRef.current.terminate();
      }
    };
  }, []);

  useEffect(() => {
    // Wait a bit to ensure worker is ready
    const timer = setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.postMessage({
          type: "vibe-animation-worker-apply-settings",
          payload: {
            backgroundColor: isDark ? 0 : 1,
          },
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <div className="fixed inset-0 -z-10" style={{
      background: isDark ? "#000000" : "#e8e8e8",
    }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
