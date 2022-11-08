import React from "react";
import styles from "./Skeleton.module.css"

export interface SkeletonDataOptions {
  height?: string;
  width?: string;
  circle?: boolean;
  customClass?: string;
}

export const Skeleton: React.FC<SkeletonDataOptions> = ({
  width = `100%`,
  height = `100%`,
  circle = false,
  customClass = ''
}) => {

  let inlineStyle: React.CSSProperties = { width: `${width}`, height: `${height}` }

  if (circle) inlineStyle.borderRadius = '50%'

  return <div style={inlineStyle} className={customClass.length ? `${styles.skeleton} ${customClass}` : styles.skeleton}></div>;
};