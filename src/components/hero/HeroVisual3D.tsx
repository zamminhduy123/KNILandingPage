"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";

const ORANGE = "#f97316";
const ORANGE_SOFT = "#fb923c";
const ORANGE_LIGHT = "#fed7aa";

const HTML_DISTANCE = 4.15;

function CurvedConnector({
  points,
  opacity = 0.26,
  lineWidth = 1,
}: {
  points: THREE.Vector3[];
  opacity?: number;
  lineWidth?: number;
}) {
  const curvePoints = useMemo(() => {
    return new THREE.CatmullRomCurve3(points).getPoints(48);
  }, [points]);

  return (
    <>
      <Line
        points={curvePoints}
        color={ORANGE_LIGHT}
        lineWidth={lineWidth + 2}
        transparent
        opacity={0.1}
      />
      <Line
        points={curvePoints}
        color={ORANGE_SOFT}
        lineWidth={lineWidth}
        transparent
        opacity={opacity}
      />
    </>
  );
}

function PortalRings({ reducedMotion }: { reducedMotion: boolean }) {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (reducedMotion) return;

    const t = state.clock.getElapsedTime();

    if (outerRef.current) outerRef.current.rotation.z = t * 0.045;
    if (innerRef.current) innerRef.current.rotation.z = -t * 0.035;
  });

  return (
    <group position={[0, 0.02, -0.75]}>
      <group ref={outerRef} rotation={[0.14, 0.08, 0]}>
        <mesh>
          <torusGeometry args={[1.95, 0.012, 16, 160]} />
          <meshBasicMaterial color={ORANGE_LIGHT} transparent opacity={0.22} />
        </mesh>
      </group>

      <group ref={innerRef} rotation={[-0.08, 0.12, Math.PI / 5]}>
        <mesh>
          <torusGeometry args={[1.45, 0.018, 16, 160]} />
          <meshBasicMaterial color={ORANGE_SOFT} transparent opacity={0.2} />
        </mesh>
      </group>

      <mesh>
        <circleGeometry args={[1.35, 80]} />
        <meshBasicMaterial
          color={ORANGE_LIGHT}
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Platform({ reducedMotion }: { reducedMotion: boolean }) {
  const platformRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (reducedMotion) return;

    if (platformRef.current) {
      platformRef.current.rotation.z = state.clock.getElapsedTime() * 0.025;
    }
  });

  return (
    <group
      ref={platformRef}
      position={[0, -1.75, -0.4]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <mesh>
        <ringGeometry args={[0.8, 2.1, 160]} />
        <meshBasicMaterial
          color="#fff7ed"
          transparent
          opacity={0.26}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh>
        <torusGeometry args={[1.85, 0.018, 16, 160]} />
        <meshBasicMaterial color={ORANGE_LIGHT} transparent opacity={0.3} />
      </mesh>

      <mesh>
        <torusGeometry args={[1.05, 0.012, 16, 120]} />
        <meshBasicMaterial color={ORANGE_SOFT} transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function ScoreCard() {
  return (
    <Html transform center distanceFactor={HTML_DISTANCE} pointerEvents="none">
      <div className="w-[178px] select-none rounded-[1.35rem] border border-orange-100/90 bg-white/92 p-4 shadow-[0_24px_70px_rgba(249,115,22,0.2)] backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[8px] font-black uppercase tracking-[0.22em] text-slate-400">
            TestAS Score
          </span>

          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[8px] font-black text-orange-600">
            KNI
          </span>
        </div>

        <div className="flex items-end gap-1.5">
          <span className="text-5xl font-black leading-none tracking-tight text-slate-950">
            114
          </span>
          <span className="mb-1 text-sm font-bold text-slate-400">/130</span>
        </div>

        <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-orange-100 to-transparent" />

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
              Percentile
            </p>
            <p className="text-3xl font-black leading-none text-orange-500">
              95%
            </p>
          </div>

          <div className="flex h-9 items-end gap-1">
            {[26, 34, 42, 50, 64, 78].map((h, index) => (
              <span
                key={index}
                className="w-1.5 rounded-full bg-orange-400/85"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-full bg-orange-50/85 px-3 py-2">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.9)]" />
            <span className="text-[10px] font-black text-slate-700">
              Top 5% — KNI
            </span>
          </div>
        </div>
      </div>
    </Html>
  );
}

function GhostRadarCard() {
  return (
    <Html transform center distanceFactor={HTML_DISTANCE} pointerEvents="none">
      <div className="w-[126px] select-none rounded-2xl border border-orange-100/60 bg-white/55 p-3 opacity-75 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <p className="mb-1.5 text-[9px] font-black text-slate-600">
          Điểm yếu
        </p>

        <div className="relative mx-auto h-16 w-16">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <polygon
              points="50,8 88,36 75,84 25,84 12,36"
              fill="none"
              stroke="#fed7aa"
              strokeWidth="1"
            />
            <polygon
              points="50,23 75,41 66,72 33,75 26,43"
              fill="rgba(249,115,22,0.2)"
              stroke="#f97316"
              strokeWidth="2"
            />
            {[
              ["50", "23"],
              ["75", "41"],
              ["66", "72"],
              ["33", "75"],
              ["26", "43"],
            ].map(([cx, cy], index) => (
              <circle key={index} cx={cx} cy={cy} r="2.2" fill="#f97316" />
            ))}
          </svg>
        </div>
      </div>
    </Html>
  );
}

function GhostProgressCard() {
  return (
    <Html transform center distanceFactor={HTML_DISTANCE} pointerEvents="none">
      <div className="w-[116px] select-none rounded-2xl border border-orange-100/60 bg-white/55 p-3 opacity-75 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
        <p className="mb-2 text-center text-[9px] font-black text-slate-600">
          Tiến độ
        </p>

        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange-50/80">
          <div
            className="grid place-items-center rounded-full"
            style={{
              width: 46,
              height: 46,
              background:
                "conic-gradient(#f97316 0deg 342deg, #ffedd5 342deg 360deg)",
            }}
          >
            <div className="grid h-8 w-8 place-items-center rounded-full bg-white">
              <span className="text-[10px] font-black text-orange-500">
                95%
              </span>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}

function OpportunityChip({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <Html transform center distanceFactor={HTML_DISTANCE} pointerEvents="none">
      <div className="select-none rounded-full border border-orange-100/80 bg-white/88 px-3.5 py-2 shadow-[0_16px_45px_rgba(249,115,22,0.14)] backdrop-blur-xl">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-xs">{icon}</span>
          <span className="text-[11px] font-black text-slate-800">
            {label}
          </span>
        </div>
      </div>
    </Html>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const scoreRef = useRef<THREE.Group>(null);
  const radarRef = useRef<THREE.Group>(null);
  const progressRef = useRef<THREE.Group>(null);
  const vguRef = useRef<THREE.Group>(null);
  const scholarshipRef = useRef<THREE.Group>(null);
  const germanyRef = useRef<THREE.Group>(null);

  const paths = useMemo(
    () => ({
      vgu: [
        new THREE.Vector3(-0.1, -0.1, 0.05),
        new THREE.Vector3(-0.55, -0.65, 0.12),
        new THREE.Vector3(-1.35, -1.12, 0.18),
      ],
      scholarship: [
        new THREE.Vector3(0, -0.12, 0.05),
        new THREE.Vector3(0, -0.75, 0.14),
        new THREE.Vector3(0, -1.35, 0.22),
      ],
      germany: [
        new THREE.Vector3(0.1, -0.1, 0.05),
        new THREE.Vector3(0.55, -0.65, 0.12),
        new THREE.Vector3(1.35, -1.12, 0.18),
      ],
    }),
    []
  );

  useFrame((state) => {
    if (reducedMotion) return;

    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * -0.045,
        0.04
      );

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.075,
        0.04
      );
    }

    if (scoreRef.current) {
      scoreRef.current.rotation.x = THREE.MathUtils.lerp(
        scoreRef.current.rotation.x,
        pointer.y * -0.07,
        0.06
      );

      scoreRef.current.rotation.y = THREE.MathUtils.lerp(
        scoreRef.current.rotation.y,
        pointer.x * 0.1,
        0.06
      );

      scoreRef.current.position.y = 0.18 + Math.sin(time * 1.05) * 0.035;
    }

    if (radarRef.current) {
      radarRef.current.position.y = 0.86 + Math.sin(time * 0.8 + 0.4) * 0.025;
    }

    if (progressRef.current) {
      progressRef.current.position.y = 0.86 + Math.sin(time * 0.8 + 1.8) * 0.025;
    }

    if (vguRef.current) {
      vguRef.current.position.y = -1.08 + Math.sin(time * 0.9) * 0.025;
    }

    if (scholarshipRef.current) {
      scholarshipRef.current.position.y =
        -1.33 + Math.sin(time * 0.9 + 2) * 0.025;
    }

    if (germanyRef.current) {
      germanyRef.current.position.y = -1.08 + Math.sin(time * 0.9 + 4) * 0.025;
    }
  });

  return (
    <group ref={groupRef} scale={0.95}>
      <Sparkles
        count={22}
        scale={[4.4, 2.9, 1]}
        size={1.6}
        speed={reducedMotion ? 0 : 0.15}
        opacity={0.24}
        color={ORANGE_SOFT}
      />

      <PortalRings reducedMotion={reducedMotion} />
      <Platform reducedMotion={reducedMotion} />

      <CurvedConnector points={paths.vgu} opacity={0.28} lineWidth={1} />
      <CurvedConnector points={paths.scholarship} opacity={0.32} lineWidth={1.1} />
      <CurvedConnector points={paths.germany} opacity={0.28} lineWidth={1} />

      <group ref={radarRef} position={[-1.55, 0.86, -0.08]}>
        <GhostRadarCard />
      </group>

      <group ref={progressRef} position={[1.55, 0.86, -0.08]}>
        <GhostProgressCard />
      </group>

      <group ref={scoreRef} position={[0, 0.18, 0.35]}>
        <ScoreCard />
      </group>

      <group ref={vguRef} position={[-1.35, -1.08, 0.2]}>
        <OpportunityChip icon="🎓" label="VGU" />
      </group>

      <group ref={scholarshipRef} position={[0, -1.33, 0.26]}>
        <OpportunityChip icon="🏆" label="Học bổng" />
      </group>

      <group ref={germanyRef} position={[1.35, -1.08, 0.2]}>
        <OpportunityChip icon="🇩🇪" label="Du học Đức" />
      </group>
    </group>
  );
}

export default function HeroVisual3D() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReducedMotion(mq.matches);

    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mq.addEventListener("change", handler);

    return () => {
      mq.removeEventListener("change", handler);
    };
  }, []);

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[640px] select-none overflow-visible pointer-events-auto sm:h-[380px] lg:h-[480px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[66%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/14 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[34%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/45 blur-2xl" />

      <Canvas
        camera={{ position: [0, 0, 7.6], fov: 43 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={1.7} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} />
        <pointLight
          position={[0, 1.5, 2]}
          intensity={1}
          color={ORANGE_LIGHT}
        />
        <Scene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}