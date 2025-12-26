import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ImageLoader from '@site/src/components/ImageLoader';
import DownloadCard from '@site/src/components/DownloadCard';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<ImageLoader>" tag to our ImageLoader component
  // `ImageLoader` will receive all props that were passed to `<ImageLoader>` in MDX
  ImageLoader,
  DownloadCard,
};