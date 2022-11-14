import React from "react";
import styles from "./Skeleton.module.css"

export interface SkeletonDataOptions {
  /**
  * Optional `height` prop that sets the `height` CSS property of Skeleton loader `div`
  * Default value: `100%`
	*/
  height?: string;
  /**
  * Optional `width` prop that sets the `width` CSS property of Skeleton loader `div`
  * Default value: `100%`
	*/
  width?: string;
  /**
  * Optional boolean prop that sets the Skeleton loader `div`s shape to a circle
  * Default value: `false`
	*/
  circle?: boolean;
  /**
  * Optional custom class string to change default CSS properties of Skeleton loader `div`
  * Default value: `''`
	*/
  customClass?: string;
}

/**
 * A React skeleton wrapper element on the individually styled `div` skeletons 
 * displayed using customised CSS based on input props
 * @version 1.0.0
 * @author [Stephen Wahid](https://github.com/wahidstephen)
 */
export const Skeleton: React.FC<SkeletonDataOptions> = ({
  width = `100%`,
  height = `100%`,
  circle = false,
  customClass = ``
}) => {

  let inlineStyle: React.CSSProperties = { width: `${width}`, height: `${height}` }

  if (circle) inlineStyle.borderRadius = '50%'

  return <div style={inlineStyle} className={customClass.length ? `${styles.skeleton} ${customClass}` : styles.skeleton}></div>;
};