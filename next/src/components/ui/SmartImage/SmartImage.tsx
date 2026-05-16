'use client';

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import type { StaticImageData } from 'next/image';
import styles from './SmartImage.module.css';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string | StaticImageData;
};

export default function SmartImage({ className = '', onLoad, alt = '', ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  const src = typeof rest.src === 'string' ? rest.src : rest.src.src;

  const classes = [styles.img, loaded && styles.loaded, className]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      decoding="async"
      {...rest}
      src={src}
      alt={alt}
      className={classes}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
