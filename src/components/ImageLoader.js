import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ImageLoader({path, alt, width, height}) {
    let avif = useBaseUrl(path + ".avif");
    let webp = useBaseUrl(path + ".webp");
    let png = useBaseUrl(path + ".png");
    return (
        <picture>
            <source srcset={avif} type="image/avif" />
            <source srcset={webp} type="image/webp" />
            <img src={png} alt={alt} width={width} height={height}/>
        </picture>
    );
}