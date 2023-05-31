import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ImageLoader({path, width, height}) {
    let prefix = path;
    let suffix = '';
    if (path.lastIndexOf('.') > -1) {
        prefix = path.substring(0, path.lastIndexOf('.'));
        suffix = path.substring(path.lastIndexOf('.'));
    }
    let avif = useBaseUrl(prefix + '.avif');
    let webp = useBaseUrl(prefix + '.webp');

    let src = '';
    if (suffix == '.jpg' || suffix == '.jpeg' || suffix == '.png' || suffix == '.gif') {
        src = useBaseUrl(path);
    } else if (suffix == '') {
        src = useBaseUrl(path + '.png'); // default png
    }

    return (
        <picture>
            <source srcset={avif} type='image/avif' />
            <source srcset={webp} type='image/webp' />
            <img src={src} width={width} height={height}/>
        </picture>
    );
}