'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import type { StaticImageData } from 'next/image';
import styles from './SmartImage.module.css';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string | StaticImageData;
};

export default function SmartImage({ className = '', onLoad, onError, alt = '', ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const src = typeof rest.src === 'string' ? rest.src : rest.src.src;

  useEffect(() => {
    const img = imgRef.current;

    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
      return;
    }

    setLoaded(false);
  }, [src]);

  const classes = [styles.img, loaded && styles.loaded, className]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      ref={imgRef}
      decoding="async"
      {...rest}
      src={src}
      alt={alt}
      className={classes}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={(e) => {
        setLoaded(true);
        onError?.(e);
      }}
    />
  );
}
