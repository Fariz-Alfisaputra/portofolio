import type { CSSProperties, PropsWithChildren } from "react";
import ElectricBorderJs from "./ElectricBorder.jsx";

export type ElectricBorderProps = PropsWithChildren<{
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
}>;

export default function ElectricBorder(props: ElectricBorderProps) {
  return <ElectricBorderJs {...props} />;
}

