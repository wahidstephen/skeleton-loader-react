import React, { useRef } from "react";
import { Skeleton, SkeletonDataOptions } from "./Skeleton";

interface SkeletonLoaderProps {
    /**
     * Options for the Skeleton Loader
	 * `SkeletonDataOptions
     * { 
     *   height?: string, 
     *   width?: string, 
     *   circle?: boolean;
     *   customClass?: string;
     * }`
	 */
    skeletonData?: SkeletonDataOptions;
    /**
     * [React.Children](https://reactjs.org/docs/react-api.html#reactchildren) elements wrapped by the loader
	 */
    children: React.ReactElement;
    /**
     * Boolean prop to toggle display of the loader
	 */
    showLoader: boolean;
    /**
     * Optional `count` prop to repeat the skeleton loader `count` times
     * Default value: `1`
	 */
    count?: number;
}

/**
 * A dynamic skeleton loader used as a wrapper
 * that conditionally renders either the wrapped React.Children elements
 * or the loader dependent on passed props.
 * @version 1.0.0
 * @author [Stephen Wahid](https://github.com/wahidstephen)
 */
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    skeletonData,
    children,
    showLoader,
    count = 1
}) => {

    let ref = useRef<any>();

    const childElement = React.Children.only(children);

    const refElement: any = React.cloneElement(
        childElement,
        { ref: (el: any) => ref.current = el }
    );


    if (!showLoader)
        return <>{refElement}</>

    const loaderData: SkeletonDataOptions = { ...skeletonData };

    if (!loaderData?.width && ref?.current?.clientWidth) 
        loaderData.width = `${ref?.current?.clientWidth}px`;
    
    if (!loaderData?.height && ref?.current?.clientHeight)
        loaderData.height = `${ref?.current?.clientHeight}px`;

    const loaderArray: SkeletonDataOptions[] = Array(count).fill(loaderData);

    return (<>
        {loaderArray.map((skeleton: SkeletonDataOptions, idx) =>
            <Skeleton key={idx} width={skeleton.width} height={skeleton.height} circle={skeleton.circle} customClass={skeleton.customClass}/>
        )}
    </>);

};


