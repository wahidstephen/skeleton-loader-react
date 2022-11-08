import React, { useRef } from "react";
import { Skeleton, SkeletonDataOptions } from "./Skeleton";

interface SkeletonLoaderProps {
    skeletonData?: SkeletonDataOptions;
    children: React.ReactElement;
    showLoader: boolean;
    count?: number;
}

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


