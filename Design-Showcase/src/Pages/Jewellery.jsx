import React, { useEffect, useRef, useState } from 'react';
import { ViewerApp, AssetManagerPlugin, GBufferPlugin, ProgressivePlugin, TonemapPlugin, SSRPlugin, SSAOPlugin, BloomPlugin, TemporalAAPlugin, GroundPlugin, DiamondPlugin, FrameFadePlugin, RandomizedDirectionalLightPlugin, AssetImporter, Color, Mesh } from 'webgi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';

const RingConfigurator = () => {
  const canvasRef = useRef(null);
  const [nightMode, setNightMode] = useState(false);
  const [musicPlay, setMusicPlay] = useState(false);
  const audioRef = useRef(new Audio('./assets/sounds/music_loop.mp3'));
  
  useEffect(() => {
    const setupViewer = async () => {
      const canvas = canvasRef.current;
      const viewer = new ViewerApp({
        canvas,
        useGBufferDepth: true,
        isAntialiased: false
      });

      viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 1);
      
      // Initialize plugins
      const manager = await viewer.addPlugin(AssetManagerPlugin);
      await viewer.addPlugin(GBufferPlugin);
      await viewer.addPlugin(new ProgressivePlugin(32));
      await viewer.addPlugin(TonemapPlugin);
      await viewer.addPlugin(SSRPlugin);
      await viewer.addPlugin(SSAOPlugin);
      await viewer.addPlugin(BloomPlugin);
      await viewer.addPlugin(TemporalAAPlugin);
      await viewer.addPlugin(GroundPlugin);
      await viewer.addPlugin(DiamondPlugin);
      await viewer.addPlugin(FrameFadePlugin);
      await viewer.addPlugin(RandomizedDirectionalLightPlugin);

      viewer.setBackground(new Color('#EEB7B5').convertSRGBToLinear());

      // Load model
      await manager.addFromPath("./assets/ring_webgi.glb");
      
      // Setup animation and interactivity
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({
        duration: 2.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        mouseMultiplier: 1,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    };

    setupViewer();
  }, []);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  const toggleMusic = () => {
    if (!musicPlay) {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
      audioRef.current.loop = true;
    } else {
      audioRef.current.pause();
    }
    setMusicPlay(!musicPlay);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Canvas Container */}
      <div id="webgi-canvas-container" className="absolute inset-0">
        <canvas
          ref={canvasRef}
          id="webgi-canvas"
          className="w-full h-full"
        />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-10 p-4 ${nightMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Ring Configurator</div>
          <div className="flex gap-4">
            <button
              onClick={toggleNightMode}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {nightMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={toggleMusic}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {musicPlay ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white rounded-lg shadow-lg p-4 flex gap-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {/* Implement customize handler */}}
          >
            Customize
          </button>
          <button 
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => {/* Implement exit handler */}}
          >
            Exit
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      <div className="loader absolute inset-0 bg-white z-20 flex items-center justify-center">
        <div className="w-full h-1 bg-gray-200">
          <div className="progress h-full bg-blue-500 transform scale-x-0 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default Jewellery;