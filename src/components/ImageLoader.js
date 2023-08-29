import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ImageLoader({path, width, height}) {
    let prefix = path;
    let suffix = '';

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    for (const ext of imageExtensions) {
        if (path.endsWith(ext)) {
            suffix = ext;
            prefix = path.substring(0, path.length - ext.length);
            break;
        }
    }

    let avif = useBaseUrl(prefix + '.avif');
    let webp = useBaseUrl(prefix + '.webp');

    let src = '';
    if (imageExtensions.includes(suffix)) {
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