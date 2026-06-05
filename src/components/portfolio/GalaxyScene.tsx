import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ─── constants ─────────────────────────────────────────────── */
const PARTICLE_COUNT = 10_000;
const ARMS = 3;
const ARM_SPREAD = 0.45;
const RADIUS_MAX = 6;

/* ─── Maths helpers ─────────────────────────────────────────── */
function logSpiral(angle: number, a = 0.18) {
  return Math.exp(a * angle);
}

/* ─── Build galaxy buffer ───────────────────────────────────── */
function buildGalaxy() {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  const innerColor = new THREE.Color("#a855f7"); // purple
  const outerColor = new THREE.Color("#22d3ee"); // cyan
  const coreColor = new THREE.Color("#ffffff");  // white core

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    const arm = i % ARMS;
    const t = (i / PARTICLE_COUNT) * 1.2; // 0…1.2 (slight overrun for density)

    // Logarithmic spiral
    const angle = arm * ((Math.PI * 2) / ARMS) + t * Math.PI * 4;
    const r = logSpiral(angle * 0.26) * (RADIUS_MAX * t);
    const spread = (Math.random() - 0.5) * ARM_SPREAD * (r * 0.55 + 0.3);
    const ySpread = (Math.random() - 0.5) * 0.18 * r;

    positions[i3 + 0] = Math.cos(angle) * r + spread;
    positions[i3 + 1] = ySpread;
    positions[i3 + 2] = Math.sin(angle) * r + spread;

    // Color: white core → purple → cyan rim
    const norm = Math.min(r / RADIUS_MAX, 1);
    const mixedColor = new THREE.Color();
    if (norm < 0.08) {
      mixedColor.copy(coreColor);
    } else if (norm < 0.5) {
      mixedColor.lerpColors(coreColor, innerColor, (norm - 0.08) / 0.42);
    } else {
      mixedColor.lerpColors(innerColor, outerColor, (norm - 0.5) / 0.5);
    }
    colors[i3 + 0] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  return { positions, colors };
}

/* ─── Galaxy mesh ───────────────────────────────────────────── */
interface GalaxyMeshProps {
  scrollY: React.MutableRefObject<number>;
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
}

function GalaxyMesh({ scrollY, mouseX, mouseY }: GalaxyMeshProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const { positions, colors } = useMemo(() => buildGalaxy(), []);

  const posAttr = useMemo(
    () => new THREE.BufferAttribute(positions, 3),
    [positions]
  );
  const colAttr = useMemo(
    () => new THREE.BufferAttribute(colors, 3),
    [colors]
  );

  // Lerp targets
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);
  const currentRotX = useRef(-0.35);
  const currentRotY = useRef(0);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    // Scroll-driven Y rotation
    const scrollProgress = scrollY.current / (document.body.scrollHeight - window.innerHeight || 1);
    targetRotY.current = scrollProgress * Math.PI * 2.4;

    // Mouse parallax tilt
    targetRotX.current = -0.35 + mouseY.current * 0.18;
    const mouseTilt = mouseX.current * 0.12;

    // Smooth lerp
    currentRotX.current += (targetRotX.current - currentRotX.current) * Math.min(delta * 3, 1);
    currentRotY.current += (targetRotY.current + mouseTilt - currentRotY.current) * Math.min(delta * 2, 1);

    pointsRef.current.rotation.x = currentRotX.current;
    pointsRef.current.rotation.y = currentRotY.current;

    // Gentle constant drift
    pointsRef.current.rotation.y += delta * 0.04;
  });

  return (
    <Points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.85}
      />
    </Points>
  );
}

/* ─── Camera drift ──────────────────────────────────────────── */
function CameraDrift({
  scrollY,
}: {
  scrollY: React.MutableRefObject<number>;
}) {
  const { camera } = useThree();
  const baseZ = 9;

  useFrame((_, delta) => {
    const progress = scrollY.current / (document.body.scrollHeight - window.innerHeight || 1);
    const targetZ = baseZ - progress * 2.5;
    camera.position.z += (targetZ - camera.position.z) * Math.min(delta * 2, 1);
  });

  return null;
}

/* ─── Public component ──────────────────────────────────────── */
export function GalaxyScene() {
  const scrollY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile — skip heavy canvas on small screens
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    const onScroll = () => { scrollY.current = window.scrollY; };
    const onMouse = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });

    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  if (isMobile) {
    // CSS-only fallback for mobile
    return (
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <div className="galaxy-mobile-bg" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    >
      <Canvas
        camera={{ position: [0, 1.2, 9], fov: 65 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <CameraDrift scrollY={scrollY} />
        <GalaxyMesh scrollY={scrollY} mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
