import React from 'react';
import { Activity, ShieldCheck, Zap, Database, BarChart3, Sparkles, Search, Code2 } from 'lucide-react';

interface DeviceMockupProps {
  type: 'ultrawide' | 'laptop' | 'desktop' | 'mobile' | 'browser-duo' | 'perspective-3d' | 'tablet';
  title?: string;
  image?: string;
  mobileImage?: string;
  url?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  type,
  image,
  url = 'violink.space',
}) => {
  // 1. 3D Isometric Perspective iPhone Mockup (VioLink Studio - Perfectly Fitted without Clipping)
  if (type === 'mobile') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 select-none [perspective:1200px] group/mobile">
        {/* Soft Ambient Radial Glow Behind 3D Phone */}
        <div className="absolute w-44 sm:w-56 aspect-square bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-purple-500/15 rounded-full blur-2xl opacity-70 group-hover/mobile:opacity-95 transition-all duration-700 pointer-events-none" />

        {/* 3D Angled Phone Chassis - Proportional Height to Prevent Overflow */}
        <div className="relative w-[165px] sm:w-[180px] lg:w-[188px] aspect-[9/18.5] rounded-[2rem] sm:rounded-[2.2rem] bg-[#0E131F] border-[5px] sm:border-[6px] border-[#181F2E] shadow-[-12px_18px_36px_-6px_rgba(0,0,0,0.3),0_8px_16px_-4px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between transform [transform:rotateX(8deg)_rotateY(-12deg)_rotateZ(3deg)] group-hover/mobile:[transform:rotateX(3deg)_rotateY(-5deg)_rotateZ(1deg)_scale(1.02)] transition-all duration-700 ease-out">
          {/* Dynamic Island Notch Pill */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-2.5 sm:h-3 bg-black rounded-full z-30 flex items-center justify-between px-1.5 shadow-xs">
            <div className="w-1 h-1 rounded-full bg-neutral-800" />
            <div className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>

          {/* Screen Content */}
          {image ? (
            <div className="relative flex-1 w-full bg-[#0A0E1A] overflow-hidden">
              <img
                src={image}
                alt="Mobile project 3D preview"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="w-full h-full bg-[#FAFAFA] text-neutral-900 pt-7 p-3 flex flex-col justify-between font-sans">
              <div className="flex justify-between items-center border-b border-neutral-200 pb-1.5">
                <span className="font-serif font-black tracking-widest text-xs uppercase">VESTUDIO</span>
                <span className="text-[10px] font-mono font-semibold bg-neutral-900 text-white px-1.5 py-0.5 rounded-full">BAG (2)</span>
              </div>

              <div className="my-auto flex flex-col items-center text-center">
                <div className="w-full h-24 sm:h-28 bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-xl overflow-hidden flex items-center justify-center relative shadow-inner">
                  <div className="w-16 h-20 bg-neutral-800 rounded-lg shadow-md transform -rotate-6 transition-transform group-hover:rotate-0 flex items-center justify-center text-white text-[9px] font-mono">
                    SS26
                  </div>
                </div>
                <h4 className="font-medium text-xs mt-2 text-neutral-900">Structured Minimal Coat</h4>
                <span className="text-[10px] text-neutral-500 font-mono mt-0.5">$380 USD</span>
              </div>

              <div className="w-full bg-neutral-950 text-white rounded-xl py-2 text-center text-[10px] font-semibold tracking-wide shadow-md">
                ADD TO BAG • 60 FPS
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. Tablet / iPad POS Terminal Mockup
  if (type === 'tablet') {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 select-none group/tablet">
        <div className="absolute inset-8 bg-emerald-500/10 rounded-3xl blur-2xl opacity-50 group-hover/tablet:opacity-80 transition-opacity pointer-events-none" />

        <div className="relative w-full max-w-[510px] aspect-[16/10.5] sm:aspect-[16/10] rounded-[1.6rem] sm:rounded-[2rem] bg-[#0E131F] border-[7px] sm:border-[9px] border-[#181F2E] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-800 border border-neutral-700 z-30" />

          <div className="relative flex-1 w-full overflow-hidden bg-[#0A0E1A]">
            {image && (
              <img
                src={image}
                alt="POS Terminal screen preview"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/tablet:scale-[1.02]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="w-20 sm:w-28 h-2 sm:h-2.5 bg-gradient-to-b from-[#2A3344] to-[#161D2B] rounded-b-md shadow-md -mt-0.5" />
      </div>
    );
  }

  // 3. MacBook Pro Laptop Mockup
  if (type === 'laptop') {
    return (
      <div className="w-full flex flex-col items-center justify-center p-2 sm:p-4 select-none">
        <div className="w-full max-w-lg aspect-[16/10] rounded-t-xl bg-[#090D16] border-[6px] sm:border-[8px] border-[#181D27] border-b-0 shadow-2xl overflow-hidden relative group/laptop">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-800 border border-neutral-700 z-30" />
          
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-20" />

          {image ? (
            <div className="w-full h-full bg-[#0A0E1A] overflow-hidden">
              <img
                src={image}
                alt="MacBook project preview"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/laptop:scale-[1.02]"
              />
            </div>
          ) : (
            <div className="w-full h-full bg-[#0A0E1A] text-white p-3 sm:p-4 flex flex-col justify-between font-sans">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-[9px] font-bold text-white">
                    D
                  </div>
                  <span className="font-bold tracking-tight text-xs">Drift Portfolio</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                  <span className="text-white font-medium">$148,920.40</span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px]">+$12,480 (9.1%)</span>
                </div>
              </div>

              <div className="my-auto py-1">
                <div className="h-16 sm:h-20 w-full relative flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="driftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,60 Q40,40 80,50 T160,25 T240,30 T300,10 L300,80 L0,80 Z" fill="url(#driftGradient)" />
                    <path d="M0,60 Q40,40 80,50 T160,25 T240,30 T300,10" fill="none" stroke="#818CF8" strokeWidth="2.5" />
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-1.5 mt-2">
                  <div className="bg-white/[0.04] p-1.5 rounded border border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-neutral-400">ETH Vault</span>
                    <span className="font-semibold text-white">4.82% APY</span>
                  </div>
                  <div className="bg-white/[0.04] p-1.5 rounded border border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-neutral-400">BTC Alpha</span>
                    <span className="font-semibold text-emerald-400">+18.4%</span>
                  </div>
                  <div className="bg-white/[0.04] p-1.5 rounded border border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-neutral-400">Stable Pool</span>
                    <span className="font-semibold text-white">$45,000</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-[106%] max-w-[530px] h-3 bg-gradient-to-b from-[#2B313D] via-[#1E232E] to-[#12161F] rounded-b-lg shadow-xl relative flex justify-center">
          <div className="w-16 h-1 bg-[#10141D] rounded-b-sm" />
        </div>
      </div>
    );
  }

  // 4. Ultrawide Curved Screen
  if (type === 'ultrawide') {
    return (
      <div className="w-full flex flex-col items-center justify-center p-2 sm:p-4 select-none">
        <div className="w-full max-w-xl aspect-[21/9] sm:aspect-[2.2/1] rounded-2xl bg-[#090D16] border-[5px] sm:border-[8px] border-[#1E293B] shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20" />
          
          <div className="w-full h-full bg-[#0B0F19] text-white p-3 sm:p-5 flex flex-col justify-between font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 font-medium ml-2 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-cyan-400" /> helix.app/telemetry
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> LIVE CLOUD
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-white/[0.03] border border-white/10 rounded-lg p-2 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-neutral-400">
                  <span>Req / Sec</span>
                  <Zap className="w-3 h-3 text-amber-400" />
                </div>
                <div className="text-sm sm:text-base font-bold tracking-tight text-white mt-1">
                  48,290 <span className="text-[9px] text-emerald-400 font-normal">↑ 14%</span>
                </div>
                <div className="flex items-end gap-0.5 h-4 mt-1.5">
                  {[30, 45, 25, 60, 80, 50, 95, 70, 85, 100].map((h, idx) => (
                    <div key={idx} style={{ height: `${h}%` }} className="flex-1 bg-cyan-400/70 rounded-xs" />
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-lg p-2 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-neutral-400">
                  <span>P99 Latency</span>
                  <BarChart3 className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-sm sm:text-base font-bold tracking-tight text-white mt-1">
                  12.4 ms <span className="text-[9px] text-emerald-400 font-normal">↓ 2.1ms</span>
                </div>
                <div className="flex items-end gap-0.5 h-4 mt-1.5">
                  {[70, 65, 55, 40, 35, 30, 25, 20, 18, 15].map((h, idx) => (
                    <div key={idx} style={{ height: `${h}%` }} className="flex-1 bg-emerald-400/70 rounded-xs" />
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-lg p-2 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-neutral-400">
                  <span>Uptime</span>
                  <ShieldCheck className="w-3 h-3 text-indigo-400" />
                </div>
                <div className="text-sm sm:text-base font-bold tracking-tight text-white mt-1">
                  99.995% <span className="text-[9px] text-neutral-400 font-normal">Global</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[99%]" />
                </div>
              </div>
            </div>

            <div className="h-6 sm:h-8 w-full bg-white/[0.02] border border-white/5 rounded-md flex items-center px-2 justify-between">
              <div className="flex items-center gap-1.5 text-[9px] text-neutral-400">
                <Database className="w-3 h-3 text-neutral-500" />
                <span>ClickHouse cluster syncing 1.2M rows/s</span>
              </div>
              <span className="font-mono text-[9px] text-cyan-400">US-EAST-1</span>
            </div>
          </div>
        </div>

        <div className="w-10 sm:w-16 h-4 sm:h-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A] -mt-1 rounded-b-sm" />
        <div className="w-24 sm:w-36 h-1.5 sm:h-2 bg-[#1E293B] rounded-full shadow-lg" />
      </div>
    );
  }

  // 5. Desktop Window Mockup
  return (
    <div className="w-full flex flex-col items-center justify-center p-2 sm:p-4 select-none">
      <div className="w-full max-w-lg aspect-[16/10] rounded-xl bg-[#080B11] border-[6px] border-[#181F2C] shadow-2xl overflow-hidden relative">
        <div className="w-full h-full bg-[#090D15] text-white p-3 flex flex-col font-sans text-xs">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-rose-500/70" />
              <div className="w-2 h-2 rounded-full bg-amber-500/70" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
            </div>
            <div className="flex-1 bg-white/5 rounded px-2 py-0.5 text-[10px] text-neutral-400 flex items-center justify-between font-mono">
              <span className="flex items-center gap-1.5">
                <Search className="w-2.5 h-2.5 text-neutral-400" />
                docs.nova.dev/api/v2/embeddings
              </span>
              <span className="bg-white/10 px-1 rounded text-[8px]">⌘K</span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-12 gap-2 pt-2">
            <div className="col-span-4 border-r border-white/5 pr-1 flex flex-col gap-1 text-[10px] text-neutral-400">
              <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-semibold">GETTING STARTED</span>
              <div className="bg-white/10 text-white px-2 py-1 rounded text-[10px] font-medium flex items-center gap-1">
                <Code2 className="w-3 h-3 text-cyan-400" /> Quickstart
              </div>
              <div className="px-2 py-0.5 text-neutral-400">Authentication</div>
              <div className="px-2 py-0.5 text-neutral-400">Vector Search</div>
              <div className="px-2 py-0.5 text-neutral-400">Neural Embeddings</div>
            </div>

            <div className="col-span-8 bg-[#0D121F] rounded-lg p-2 border border-white/10 font-mono text-[10px] flex flex-col justify-between">
              <div className="text-neutral-400 flex items-center justify-between pb-1 border-b border-white/5 text-[9px]">
                <span>query_vector.ts</span>
                <span className="text-emerald-400">200 OK (18ms)</span>
              </div>
              <div className="space-y-0.5 text-[9px] sm:text-[10px] text-neutral-300 py-1">
                <p><span className="text-purple-400">const</span> client = <span className="text-blue-400">new</span> <span className="text-yellow-300">NovaClient</span>();</p>
                <p><span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> client.<span className="text-cyan-300">search</span>({`{`}</p>
                <p className="pl-3 text-emerald-300">"vector": <span className="text-neutral-400">[0.124, 0.982, 0.455]</span>,</p>
                <p className="pl-3 text-emerald-300">"topK": <span className="text-amber-400">5</span></p>
                <p>{`}`});</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded px-2 py-1 text-[9px] flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> AI Engine initialized
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
