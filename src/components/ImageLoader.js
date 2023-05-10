import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ImageLoader({path, width, height}) {
    let pre = path;
    let suf = "";
    if (pre.lastIndexOf(".") > -1) {
        pre = pre.substring(0, pre.lastIndexOf("."));
        suf = path.substring(path.lastIndexOf("."));
    }
    let avif = useBaseUrl(pre + ".avif");
    let webp = useBaseUrl(pre + ".webp");

    let src = "";
    if (suf == ".jpg" || suf == ".jpeg" || suf == ".png" || suf == ".gif") {
        src = useBaseUrl(path);
    } else if (suf == "") {
        src = useBaseUrl(path + ".png");
    }
    return (
        <picture>
            <source srcset={avif} type="image/avif" />
            <source srcset={webp} type="image/webp" />
            <img src={src} width={width} height={height}/>
        </picture>
    );
}