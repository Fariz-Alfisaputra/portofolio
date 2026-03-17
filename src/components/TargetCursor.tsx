import type { CSSProperties } from "react";
import TargetCursorJs from "./TargetCursor.jsx";

export type TargetCursorProps = {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  parallaxOn?: boolean;
  style?: CSSProperties;
  className?: string;
};

export default function TargetCursor(props: TargetCursorProps) {
  return <TargetCursorJs {...props} />;
}

