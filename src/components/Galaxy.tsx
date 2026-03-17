import type { CSSProperties } from "react";
import GalaxyJs from "./Galaxy.jsx";

export type GalaxyProps = {
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function Galaxy(props: GalaxyProps) {
  return <GalaxyJs {...props} />;
}

