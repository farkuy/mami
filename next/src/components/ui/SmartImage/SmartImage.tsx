'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import Image, { type ImageProps, type StaticImageData } from 'next/image';
import styles from './SmartImage.module.css';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string | StaticImageData;
  placeholder?: ImageProps['placeholder'];
  priority?: ImageProps['priority'];
  sizes?: ImageProps['sizes'];
};

export default function SmartImage({ className = '', onLoad, onError, alt = '', src: imageSrc, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isStaticImage = typeof imageSrc !== 'string';
  const src = isStaticImage ? imageSrc.src : imageSrc;
  const { height, width, ...imageRest } = rest;

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

  if (isStaticImage) {
    return (
      <Image
        {...imageRest}
        src={imageSrc}
        alt={alt}
        className={classes}
        sizes={rest.sizes || '(max-width: 768px) 100vw, 50vw'}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
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
