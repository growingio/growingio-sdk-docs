import React from "react";

export default function ImageLoader({path, width, height}) {
    let prefix = path;
    let suffix = '';

    if (path.lastIndexOf('.') > -1) {
        prefix = path.substring(0, path.lastIndexOf('.'));
        suffix = path.substring(path.lastIndexOf('.'));
    }
    let avif = prefix + '.avif';
    let webp = prefix + '.webp';

    let src = '';
    if (suffix == '.jpg' || suffix == '.jpeg' || suffix == '.png' || suffix == '.gif') {
        src = path;
    } else if (suffix == '') {
        src = path + '.png'; // default png
    }
    return (
        <picture>
            <source srcset={require('@site/static/' + avif).default} type='image/avif' />
            <source srcset={require('@site/static/' + webp).default} type='image/webp' />
            <img src={require('@site/static/' + src).default} width={width} height={height}/>
        </picture>
    );
}